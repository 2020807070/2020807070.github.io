(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{203:function(a,e,s){"use strict";s.r(e);var t=s(0),r=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"我是二级标题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#我是二级标题","aria-hidden":"true"}},[a._v("#")]),a._v(" 我是二级标题")]),a._v(" "),s("h3",{attrs:{id:"首先初始化一个项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#首先初始化一个项目","aria-hidden":"true"}},[a._v("#")]),a._v(" 首先初始化一个项目")]),a._v(" "),s("blockquote",[s("p",[a._v("npm init -y")])]),a._v(" "),s("h3",{attrs:{id:"安装vuepress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装vuepress","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装vuepress")]),a._v(" "),s("blockquote",[s("p",[a._v("npm install -D vuepress")])]),a._v(" "),s("h3",{attrs:{id:"创建文件夹"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建文件夹","aria-hidden":"true"}},[a._v("#")]),a._v(" 创建文件夹")]),a._v(" "),s("blockquote",[s("p",[a._v("mkdir docs")])]),a._v(" "),s("h3",{attrs:{id:"在docs下面创建readme-md"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在docs下面创建readme-md","aria-hidden":"true"}},[a._v("#")]),a._v(" 在docs下面创建README.md")]),a._v(" "),s("blockquote",[s("p",[a._v("echo '# Hello VuePress' > docs/README.md")])]),a._v(" "),s("h3",{attrs:{id:"添加package-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加package-json","aria-hidden":"true"}},[a._v("#")]),a._v(" 添加package.json")]),a._v(" "),s("h2",{attrs:{id:"我是二级标题-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#我是二级标题-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 我是二级标题")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('{\n  "scripts": {\n    "docs:dev": "vuepress dev docs",\n    "docs:build": "vuepress build docs"\n  }\n}\n')])])]),s("h3",{attrs:{id:"按照官方文档的指示运行npm-run-docs-dev-进入本地环境时却报了错"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按照官方文档的指示运行npm-run-docs-dev-进入本地环境时却报了错","aria-hidden":"true"}},[a._v("#")]),a._v(" 按照官方文档的指示运行npm run docs:dev  进入本地环境时却报了错")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/3/14/1697cb2dfa139fda?w=1086&h=162&f=png&s=100972",alt:""}})]),a._v(" "),s("blockquote",[s("p",[a._v("Typ\neError: res.getHeader is not a function")])]),a._v(" "),s("h3",{attrs:{id:"最终在github中找到解决方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最终在github中找到解决方法","aria-hidden":"true"}},[a._v("#")]),a._v(" 最终在github中找到解决方法")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/3/14/1697cbe1363b2f3a?w=905&h=471&f=png&s=57145",alt:""}})]),a._v(" "),s("blockquote",[s("p",[a._v("运行npm install webpack-dev-middleware@3.6.0")])]),a._v(" "),s("h3",{attrs:{id:"或-修改为以下package-josn-从新安装依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#或-修改为以下package-josn-从新安装依赖","aria-hidden":"true"}},[a._v("#")]),a._v(" 或 修改为以下package.josn 从新安装依赖")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('{\n  "scripts": {\n    "docs:dev": "vuepress dev docs",\n    "docs:build": "vuepress build docs"\n  },\n  "devDependencies": {\n    "vuepress": "^0.14.10",\n    "webpack-dev-middleware": "3.6.0"\n  }\n}\n')])])]),s("h3",{attrs:{id:"然后从新运行就可以了"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#然后从新运行就可以了","aria-hidden":"true"}},[a._v("#")]),a._v(" 然后从新运行就可以了")])])}],!1,null,null,null);e.default=r.exports}}]);