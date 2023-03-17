# fully-customizable-select

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

You can clone it and step by step create your own NPM package and publish it.

It is simple React counter.

[**Live Demo**](https://guvictory.github.io/fully-customizable-select/)

## Installation:

```bash
npm install fully-customizable-select --save-dev
```

or

```bash
yarn add -D fully-customizable-select
```

## Usage :

Add `MyCounter` to your component:

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import { MyCounter } from 'fully-customizable-select'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <div>
            <h2>Default counter</h2>
            <MyCounter />
        </div>
        <hr />
        <div>
            <h2>Counter with predefined value</h2>
            <MyCounter value={5} />
        </div>
    </React.StrictMode>,
)

```

[npm-url]: https://www.npmjs.com/package/fully-customizable-select
[npm-image]: https://img.shields.io/npm/v/fully-customizable-select
[github-license]: https://img.shields.io/github/license/guvictory/fully-customizable-select
[github-license-url]: https://github.com/guvictory/fully-customizable-select/blob/main/LICENSE
[github-build]: https://github.com/guvictory/fully-customizable-select/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/guvictory/fully-customizable-select/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/fully-customizable-select
