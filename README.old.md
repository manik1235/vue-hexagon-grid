# vue-hexagon-grid

> A Vue.js component styleguide example

Vue component styleguide example http://vlewin.me/vue-hexagon-grid/


## Installation

### Using yarn

`yarn add vue-hexagon-grid`

### Using npm

`npm i --save vue-hexagon-grid`

## Demo and Docs

`npm run serve`

## Usage

### ES6 Modules / CommonJS

```js
import MyFirstComponent from 'vue-hexagon-grid';
import 'vue-hexagon-grid/dist/vue-hexagon-grid.min.css';

Vue.component('vue-hexagon-grid', MyFirstComponent);
```

```html
<vue-hexagon-grid text="Hello World!"></vue-hexagon-grid>
```

### UMD

```html
<vue-hexagon-grid text="Hello World!"></vue-hexagon-grid>

<script src="https://unpkg.com/vue" charset="utf-8"></script>
<script src="./dist/umd/vue-hexagon-grid.min.js" charset="utf-8"></script>
<link rel="stylesheet" type="text/css" href="./dist/umd/vue-hexagon-grid.min.css">

<script type="text/javascript">
  Vue.component('vue-hexagon-grid', window.MyFirstComponent);
</script>
```

## Build

Build configuration is located in the `poi.config.js` file, to build just run: `npm run build`, it will build to `cjs` and `umd` directories.

## Tests

This template uses karma with chai by default, you can change test settings in poi.config.js

`npm run test`
`npm run test:watch`
`npm run test:cov`

## License

This project is licensed under [MIT License](http://en.wikipedia.org/wiki/MIT_License)


· Generated "vue-hexagon-grid".
· To get started:
· cd vue-hexagon-grid
· 1. Install dependencies: npm install
· 2. Write your component in src/vue-hexagon-grid/vue-hexagon-grid.vue
· 3. Write the component doc in src/vue-hexagon-grid/vue-hexagon-grid.md or in the component itself using jsdoc
· 4. Write the demo and usage instructions in docs/*.md
· 5. Access demo and docs with npm run serve
· 6. Build with: npm run build
· 7. Build docs with: npm run build:doc
