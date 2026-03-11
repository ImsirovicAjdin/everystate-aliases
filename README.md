# @everystate/aliases v1.0.4

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

## Documentation

Full documentation available at [everystate.dev](https://everystate.dev).

## Ecosystem

| Package | Description | License |
|---|---|---|
| [@everystate/aliases](https://www.npmjs.com/package/@everystate/aliases) | Ergonomic single-character and short-name DOM aliases for vanilla JS | MIT |
| [@everystate/angular](https://www.npmjs.com/package/@everystate/angular) | Angular adapter: `usePath`, `useIntent`, `useWildcard`, `useAsync` — bridges store to Angular signals | MIT |
| [@everystate/core](https://www.npmjs.com/package/@everystate/core) | Path-based state management with wildcard subscriptions and async support | MIT |
| [@everystate/css](https://www.npmjs.com/package/@everystate/css) | Reactive CSSOM engine: design tokens, typed validation, WCAG enforcement, all via path-based state | MIT |
| [@everystate/examples](https://www.npmjs.com/package/@everystate/examples) | Example applications and patterns | MIT |
| [@everystate/perf](https://www.npmjs.com/package/@everystate/perf) | Performance monitoring overlay | MIT |
| [@everystate/react](https://www.npmjs.com/package/@everystate/react) | React hooks adapter: `usePath`, `useIntent`, `useAsync` hooks and `EventStateProvider` | MIT |
| [@everystate/renderer](https://www.npmjs.com/package/@everystate/renderer) | Direct-binding reactive renderer: `bind-*`, `set`, `each` attributes. Zero build step | MIT |
| [@everystate/router](https://www.npmjs.com/package/@everystate/router) | SPA routing as state | MIT |
| [@everystate/solid](https://www.npmjs.com/package/@everystate/solid) | Solid adapter: `usePath`, `useIntent`, `useWildcard`, `useAsync` — bridges store to Solid signals | MIT |
| [@everystate/test](https://www.npmjs.com/package/@everystate/test) | Event-sequence testing for EveryState stores. Zero dependency. | MIT |
| [@everystate/types](https://www.npmjs.com/package/@everystate/types) | Typed dot-path autocomplete for EveryState stores | MIT |
| [@everystate/view](https://www.npmjs.com/package/@everystate/view) | State-driven view: DOMless resolve + surgical DOM projector. View tree as first-class state | MIT |
| [@everystate/vue](https://www.npmjs.com/package/@everystate/vue) | Vue 3 composables adapter: `provideStore`, `usePath`, `useIntent`, `useWildcard`, `useAsync` | MIT |

## License

MIT © Ajdin Imsirovic
