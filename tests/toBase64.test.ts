import { test } from 'node:test';
import assert from 'node:assert';
import toBase64ImageUrl from '../utils/toBase64';

test('it should be a string base64', async () => {
    const imageUrl = 'https://avatars1.githubusercontent.com/u/33148052?v=4';
    assert.match(await toBase64ImageUrl(imageUrl), /^data:image\/\w+;base64,[A-Za-z0-9+/=]+$/);
});
