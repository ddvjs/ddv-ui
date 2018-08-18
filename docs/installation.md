# Installation

## Direct Download / CDN

[https://unpkg.com/ddv-ui/dist/ddv-ui.js](https://unpkg.com/ddv-ui/dist/ddv-ui.js)

<!--email_off-->
[Unpkg.com](https://unpkg.com) provides npm-based CDN links. The above link will always point to the latest release on npm. You can also use a specific version/tag via URLs like `https://unpkg.com/ddv-ui@2.0.0/dist/ddv-ui.js`.
<!--/email_off-->

Include `ddv-ui` after Vue and it will install itself automatically:

``` html
<script src="/path/to/vue.js"></script>
<script src="/path/to/ddv-ui.js"></script>
```

## npm

``` bash
npm install ddv-ui
```

When used with a module system, you must explicitly install the router via `Vue.use()`:

``` js
import Vue from 'vue'
import DdvMultiWindow from 'ddv-ui'

Vue.use(DdvMultiWindow)
```

You don't need to do this when using global script tags.

## Dev Build

You will have to clone directly from GitHub and build `ddv-ui` yourself if
you want to use the latest dev build.

``` bash
git clone https://github.com/vuejs/ddv-ui.git node_modules/ddv-ui
cd node_modules/ddv-ui
npm install
npm run build
```
