# vue-transfer-dom
> requires Vue v1.0.19+

Transfer DOM to another place (eg. `<body>`).

Useful in some situations such as z-index management, see discussion [here](https://github.com/vuejs/vue/issues/2130).


## Demo (prevent modal overlap by other elements)
http://jsfiddle.net/rhyzx/br5cepu3/


## Installation
```sh
npm install vue-transfer-dom
```

## Usage

```js
Vue.use(VueTransferDom /*, {name: 'transferDom'}*/)

new Vue({
  template: '<div v-transfer-dom>foo</div>', // div will be appended to body(default)
})

// append to specific place
new Vue({
  template: '<div v-transfer-dom:bar>foo</div>', // div will be appended to #bar(document.getElementById)
})
```
