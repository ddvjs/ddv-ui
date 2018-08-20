/*!
  * ddv-ui v0.1.0
  * (c) 2018 861883474@qq.com
  * @license MIT
  */
//
//
//
//
//
//
//

var script = {
  name: 'DdvTreeNode',
  props: {
    node: {
      type: Object,
      default: function default$1 () {
        return {}
      }
    },
    level: {
      type: Number,
      default: 0
    },
    indent: {
      type: Number
    }
  },
  mounted: function mounted () {
    console.log(this.level, this.node.label, this.indent);
  }
}

/* script */
            var __vue_script__ = script;
            
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    [_vm._v("\n  " + _vm._s(_vm.node.label) + "\n  "), _vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/sicmouse/Documents/GitHub/ddv-ui/packages/tree/src/tree-node.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    

    return component
  }
  /* style inject */
  function __vue_create_injector__() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var DdvTreeNode = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    __vue_create_injector__,
    undefined
  )

var script$1 = {
  name: 'DdvTree',
  props: {
    data: {
      type: Array,
      default: (function () { return []; })
    },
    indent: {
      type: Number,
      default: 16
    },
    props: {
      type: Object,
      default: function default$1 () {
        return {}
      }
    }
  },
  data: function data () {
    return {
      treeprops: {
        children: 'children',
        label: 'label'
      },
      lists: []
    }
  },
  components: {
    DdvTreeNode: DdvTreeNode
  },
  methods: {
    setProps: function setProps () {
      this.treeprops = Object.assign(this.treeprops, this.props);
    },
    setData: function setData () {
      var this$1 = this;

      this.lists = [];
      var childData = function (lists, childNoteLists) {
        if ( childNoteLists === void 0 ) childNoteLists = [];

        lists.forEach(function (item) {
          var obj = {
            data: item,
            node: {}
          };
          obj.node[this$1.treeprops.children] = [];
          obj.node.label = item[this$1.treeprops.label];

          if (Array.isArray(item[this$1.treeprops.children]) && item[this$1.treeprops.children].length) {
            childData(item[this$1.treeprops.children], obj.node[this$1.treeprops.children]);
          }
          childNoteLists.push(obj);
        });
        return childNoteLists
      };
      this.lists = childData(this.data);
    }
  },
  render: function render (h) {
    var this$1 = this;

    var treeNodes = function (level, lists, renderList) {
      if ( renderList === void 0 ) renderList = [];

      lists.forEach(function (item) {
        console.log(item);
        var slotRender = [];

        if (Array.isArray(item.node.children) && item.node.children.length) {
          var childLevel = level;
          childLevel += 1;
          slotRender = treeNodes(childLevel, item.node.children);
        }
        var render = h(DdvTreeNode, {
          props: {
            node: item.node,
            data: item.data,
            level: level,
            indent: this$1.indent * (level - 1)
          }
        }, slotRender);
        renderList.push(render);
      });
      return renderList
    };

    return h('div', {
      class: ['ddv-ui']
    },[
      h('div', {
        class: ['ddv-ui__tree']
      }, treeNodes(1, this.lists))
    ])
  },
  created: function created () {
    this.setProps();
    this.setData();
  },
  mounted: function mounted () {}
}

/* script */
            var __vue_script__$1 = script$1;
            
/* template */

  /* style */
  var __vue_inject_styles__$1 = undefined;
  /* scoped */
  var __vue_scope_id__$1 = undefined;
  /* module identifier */
  var __vue_module_identifier__$1 = undefined;
  /* functional template */
  var __vue_is_functional_template__$1 = undefined;
  /* component normalizer */
  function __vue_normalize__$1(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/sicmouse/Documents/GitHub/ddv-ui/packages/tree/src/tree.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    

    return component
  }
  /* style inject */
  function __vue_create_injector__$1() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__$1.styles || (__vue_create_injector__$1.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Tree = __vue_normalize__$1(
    {},
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    __vue_create_injector__$1,
    undefined
  )

Tree.install = function (Vue) {
  Vue.component(Tree.name, Tree);
};

var components = [
  Tree
];

var install = function (Vue, opts) {
  if ( opts === void 0 ) opts = {};

  components.forEach(function (component) {
    Vue.component(component.name, component);
  });
};

module.exports = {
  version: '0.2.0',
  install: install,
  Tree: Tree
};

module.exports.default = module.exports;
//# sourceMappingURL=ddv-ui.esm.js.map
