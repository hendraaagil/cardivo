import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import { cardRender } from './utils/card';
import toBase64ImageUrl from './utils/toBase64';

interface CardConfig {
    slug: string;
    name: string;
    description: string;
    image: string;
    backgroundColor?: string;
    iconColor?: string;
    fontColor?: string;
    site?: string;
    pattern?: string;
    colorPattern?: string;
    opacity?: string;
    instagram?: string;
    linkedin?: string;
    github?: string;
    twitter?: string;
    disableAnimation?: boolean;
}

// Text lands inside SVG/XHTML, so `&` or `<` would break the file.
const escape = (s = ''): string =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

async function build() {
    const cards: CardConfig[] = JSON.parse(readFileSync(`${__dirname}/cards.json`, 'utf8'));
    mkdirSync(`${__dirname}/dist`, { recursive: true });

    for (const card of cards) {
        const svg = cardRender({
            name: escape(card.name),
            description: escape(card.description),
            _image: await toBase64ImageUrl(card.image),
            backgroundColor: card.backgroundColor,
            iconColor: card.iconColor,
            fontColor: card.fontColor,
            _site: escape(card.site),
            pattern: card.pattern,
            colorPattern: card.colorPattern,
            opacity: card.opacity,
            _instagram: escape(card.instagram),
            _linkedin: escape(card.linkedin),
            _github: escape(card.github),
            _twitter: escape(card.twitter),
            __disableAnimation: String(card.disableAnimation ?? false),
        });
        writeFileSync(`${__dirname}/dist/${card.slug}.svg`, svg);
        console.log(`dist/${card.slug}.svg`);
    }

    const items = cards
        .map((c) => `<li><a href="${escape(c.slug)}.svg">${escape(c.slug)}.svg</a><br><img src="${escape(c.slug)}.svg" alt="${escape(c.name)}" width="640"></li>`)
        .join('\n');
    writeFileSync(
        `${__dirname}/dist/index.html`,
        `<!doctype html>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Cardivo</title>
<style>body{font-family:sans-serif;max-width:680px;margin:2rem auto;padding:0 1rem}li{margin-bottom:2rem}img{max-width:100%;height:auto}</style>
<h1>Cardivo</h1>
<ul>
${items}
</ul>
`,
    );
    console.log('dist/index.html');
}

build().catch((e) => {
    console.error(e);
    process.exit(1);
});
