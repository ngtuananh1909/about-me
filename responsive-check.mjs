import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = (file) => readFile(file, 'utf8');
const [tailwind, css, main, index, game, qr] = await Promise.all([
  read('tailwind.config.js'),
  read('src/css/main.css'),
  read('src/js/main.js'),
  read('index.html'),
  read('game.html'),
  read('qr.html'),
]);

assert.match(tailwind, /["']\.\/game\.html["']/);
assert.match(tailwind, /["']\.\/qr\.html["']/);
assert.match(css, /overflow-x:\s*(hidden|clip)/);
assert.match(css, /prefers-reduced-motion/);
assert.match(index, /id="mobile-menu-toggle"/);
assert.match(index, /aria-controls="mobile-menu"/);
assert.match(main, /const mobileMenuToggle = document\.getElementById\('mobile-menu-toggle'\)/);
assert.match(main, /if \(document\.getElementById\('cf-rank'\)\)/);
assert.match(game, /role="dialog"/);
assert.match(game, /max-h-\[/);
assert.match(game, /event\.key === 'Escape'/);
assert.match(qr, /type="url"/);
assert.match(qr, /inputmode="url"/);
assert.match(qr, /max-w-full/);

console.log('responsive static checks passed');
