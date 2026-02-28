# @everystate/aliases

**Ergonomic DOM aliases for vanilla JavaScript**

Single-character and short-name DOM utilities that stay close to the metal with zero abstraction penalty.

## Installation

```bash
npm install @everystate/aliases
```

## Quick Start

```js
import { $, qsa, on, attr } from '@everystate/aliases';

// $ = getElementById
const btn = $('#myButton');

// qsa = querySelectorAll
const items = qsa('.item');

// on = addEventListener
on(btn, 'click', () => console.log('clicked'));

// attr = setAttribute/getAttribute
attr(btn, 'disabled', true);
```

## Features

- **Minimal wrappers** - Thin layer over native DOM APIs
- **Zero dependencies** - Pure JavaScript
- **TypeScript support** - Full type definitions
- **Tree-shakeable** - Import only what you need

## Ecosystem


| Package | Description | License |
|---|---|---|
| [@everystate/aliases](https://www.npmjs.com/package/@everystate/aliases) | Ergonomic single-character and short-name DOM aliases for vanilla JS (You are here). | MIT |
| [@everystate/core](https://www.npmjs.com/package/@everystate/core) | Path-based state management with wildcard subscriptions and async support. Core state engine. | MIT |
| [@everystate/css](https://www.npmjs.com/package/@everystate/css) | Reactive CSSOM engine: design tokens, typed validation, WCAG enforcement, all via path-based state | MIT |
| [@everystate/examples](https://www.npmjs.com/package/@everystate/examples) | Example applications and patterns | MIT |
| [@everystate/perf](https://www.npmjs.com/package/@everystate/perf) | Performance monitoring overlay | MIT |
| [@everystate/react](https://www.npmjs.com/package/@everystate/react) | React hooks adapter: `usePath`, `useIntent`, `useAsync` hooks and `EventStateProvider` | MIT |
| [@everystate/renderer](https://www.npmjs.com/package/@everystate/renderer) | Direct-binding reactive renderer: `bind-*`, `set`, `each` attributes. Zero build step | Proprietary |
| [@everystate/router](https://www.npmjs.com/package/@everystate/router) | SPA routing as state | MIT |
| [@everystate/test](https://www.npmjs.com/package/@everystate/test) | Event-sequence testing for UIstate stores. Zero dependency. | Proprietary |
| [@everystate/view](https://www.npmjs.com/package/@everystate/view) | State-driven view: DOMless resolve + surgical DOM projector. View tree as first-class state | MIT |


## License

MIT © Ajdin Imsirovic
