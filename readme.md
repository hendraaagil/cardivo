<div align="center">
<h1>Cardivo card name</h1>

<p>Get your card name for your GitHub profile readme 😎</p>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

</div>

# Description

GitHub shows the readme of a repo named after your username on your profile page (the "magic readme"), where you can put your skills, portfolio, etc.

Cardivo generates name cards as static SVG (Scalable Vector Graphics) files at build time, so you can host them anywhere static (e.g. Cloudflare Pages) and embed them in your profile readme.

> Forked from [satyawikananda/cardivo](https://github.com/satyawikananda/cardivo), which renders cards on the fly with a Vercel serverless function.

# How to use this?

1. Add your card(s) to `cards.json`:

    ```json
    [
        {
            "slug": "me",
            "name": "Satya Wikananda",
            "description": "I am a coder",
            "image": "https://avatars.githubusercontent.com/u/33148052?v=4",
            "pattern": "leaf",
            "github": "satyawikananda"
        }
    ]
    ```

2. Build:

    ```sh
    pnpm install
    pnpm build   # writes dist/<slug>.svg
    ```

3. Deploy `dist/` to any static host. For Cloudflare Pages: build command `pnpm build`, build output directory `dist`.

4. Embed it in your readme:

    ```md
    ![My card name](https://<your-site>.pages.dev/me.svg)
    ```

Card options:

| Key                | Description                                                          | Type           | Example                         |
| ------------------ | -------------------------------------------------------------------- | -------------- | ------------------------------- |
| `slug`             | **Mandatory** Output file name (`dist/<slug>.svg`)                   | String         | me                              |
| `name`             | **Mandatory** Your name                                              | String         | Satya Wikananda                 |
| `description`      | **Mandatory** Some text about you                                    | String         | I am a coder                    |
| `image`            | **Mandatory** An avatar image of you, fetched and inlined at build   | URL            | `https://example.com/image.jpg` |
| `backgroundColor`  | Background color for the card name                                   | Hex color code | `#ffffff`                       |
| `iconColor`        | Colorize the icons in card name                                      | Hex color code | `#e64a19`                       |
| `fontColor`        | Font color for the card name                                         | Hex color code | `#000000`                       |
| `site`             | If you have a site, you can fill this one                            | String         | `https://satyawikananda.tech`   |
| `pattern`          | You can use a pattern for the background. You can see the list below | String         | plus                            |
| `colorPattern`     | Fill the color pattern                                               | Hex color code | `#1abc9c`                       |
| `opacity`          | Opacity of the pattern background                                    | Float          | `0` - `1`                       |
| `instagram`        | Your Instagram username                                              | String         | satyawikananda                  |
| `linkedin`         | Your Linkedin username                                               | String         | Satya Wikananda                 |
| `github`           | Your GitHub username                                                 | String         | satyawikananda                  |
| `twitter`          | Your Twitter username                                                | String         | satya_wikananda                 |
| `disableAnimation` | Disable animation transition                                         | Boolean        | `true`                          |

Pattern in Cardivo uses the [Hero Pattern](https://github.com/lowmess/hero-patterns) package which is developed by [Lowmess](https://github.com/lowmess/), and here the list:

| Pattern          | Value            |
| ---------------- | ---------------- |
| Plus             | plus             |
| Topography       | topography       |
| Texture          | texture          |
| Hideout          | hideout          |
| FallingTriangles | fallingTriangles |
| I Like Food      | iLikeFood        |
| Four point stars | fourPointStars   |
| Brick wall       | brickWall        |
| Wiggle           | wiggle           |
| Bubbles          | bubbles          |
| Floating Cogs    | floatingCogs     |
| Leaf             | leaf             |
| Rain             | rain             |
| Polkadots        | polkaDots        |
| Tic Tac Toe      | ticTacToe        |

# Development

```sh
pnpm build   # generate dist/
pnpm test    # node:test via tsx
```

# Contribution

Want to make this project better? Contributions are welcome.

---

![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)
![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)

Powered by Typescript. Code licensed under MIT License.
