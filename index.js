// umd https://github.com/umdjs/umd/blob/master/templates/returnExports.js
!function (root, install) {
  if (typeof define === 'function' && define.amd) {
    define([], { install: install })
  } else if (typeof module === 'object' && module.exports) {
    exports.install = install
  } else {
    root.VueTransferDom = { install: install }
  }
}(this, function (Vue, options) {

var name = (options && options.name) || 'transferDom'
name = Vue.util.hyphenate(name)

var FragmentFactory = Vue.FragmentFactory
var remove = Vue.util.remove
var createAnchor = Vue.util.createAnchor

// register as terminal directive
Vue.directive(name, {
  priority: 2000,
  terminal: true,
  bind: function () {
    var el = this.el
    if (!el.__vue__) {
      // default append to <body>
      var container = this.arg
        ? document.getElementById(this.arg)
        : document.body
      this.anchor = createAnchor('v-transfer-dom')
      container.appendChild(this.anchor)
      remove(this.el)
      var factory = new FragmentFactory(this.vm, el)
      this.frag = factory.create(this._host, this._scope, this._frag)
      this.frag.before(this.anchor)
    } else {
      console.warn(
        'v-transfer-dom="' + this.expression + '" cannot be ' +
        'used on an instance root element.'
      )
    }
  },
  unbind: function () {
    this.frag.remove()
    remove(this.anchor)
  }
})

})
