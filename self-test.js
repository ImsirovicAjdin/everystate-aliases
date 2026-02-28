/**
 * @everystate/aliases: zero-dependency self-test
 *
 * Verifies that all exported aliases exist, are functions, and have the
 * expected arities. DOM calls cannot be tested without a browser, so this
 * is a structural smoke test only.
 */

import * as aliases from './index.js';

let passed = 0;
let failed = 0;

function assert(label, condition) {
  if (condition) {
    console.log(`  ✓ ${label}`);
    passed++;
  } else {
    console.error(`  ✗ ${label}`);
    failed++;
  }
}

function section(title) {
  console.log(`\n${title}`);
}

// Expected exports: [name, minArity]
const EXPECTED = [
  // Selection
  ['$', 1],
  ['qs', 1],
  ['qsa', 1],
  ['find', 2],
  // Creation
  ['mk', 1],
  ['txt', 1],
  ['frag', 0],
  // Events
  ['on', 3],
  ['off', 3],
  ['once', 3],
  ['emit', 2],
  // Manipulation
  ['append', 1],
  ['prepend', 1],
  ['before', 1],
  ['after', 1],
  ['replace', 1],
  ['remove', 1],
  // Attributes
  ['attr', 2],
  ['data', 2],
  // Classes
  ['cls', 1],
  ['uncls', 1],
  ['toggle', 2],
  ['has', 2],
  // Styles
  ['css', 2],
  // Traversal
  ['parent', 1],
  ['children', 1],
  ['siblings', 1],
  ['next', 1],
  ['prev', 1],
  // Utilities
  ['ready', 1],
  ['clone', 1],
  ['empty', 1],
];

// -- 1. All expected exports exist and are functions ---------------------

section('1. exports exist and are functions');

for (const [name] of EXPECTED) {
  assert(`${name} is exported`, name in aliases);
  assert(`${name} is a function`, typeof aliases[name] === 'function');
}

// -- 2. No unexpected exports -------------------------------------------

section('2. no unexpected exports');

const expectedNames = new Set(EXPECTED.map(([n]) => n));
const actualNames = Object.keys(aliases);

for (const name of actualNames) {
  assert(`${name} is expected`, expectedNames.has(name));
}

assert(`export count matches (${actualNames.length} === ${EXPECTED.length})`, actualNames.length === EXPECTED.length);

// -- 3. Arity check (function .length) ----------------------------------

section('3. arity check');

for (const [name, minArity] of EXPECTED) {
  const fn = aliases[name];
  if (typeof fn === 'function') {
    assert(`${name}.length >= ${minArity}`, fn.length >= minArity);
  }
}

// -- Summary ------------------------------------------------------------

console.log(`\n@everystate/aliases v1.0.1 self-test`);
if (failed > 0) {
  console.error(`✗ ${failed} assertion(s) failed, ${passed} passed`);
  process.exit(1);
} else {
  console.log(`✓ ${passed} assertions passed`);
}
