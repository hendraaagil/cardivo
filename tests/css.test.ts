import { test } from 'node:test';
import assert from 'node:assert';
import { css } from '../utils/getCss';

test('Style CSS SVG', () => {
    assert.ok(css({ backgroundColor: '#ecf0f1', pattern: 'plus', opacity: 1, colorPattern: '#eaeaea', fontColor: '#e64a19' }));
});

test('Unknown pattern throws', () => {
    assert.throws(() => css({ backgroundColor: '', pattern: 'nope', opacity: 1, colorPattern: '', fontColor: '' }), /Unknown pattern/);
});
