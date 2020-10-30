import hsxTest from "./test"
import hsxButton from "./button"
import hsxButtonGroup from "./buttonGroup"

import "../lib/default/index.scss"

const components = [
  hsxTest,
  hsxButton,
  hsxButtonGroup
]

let install = function (Vue) {
  if (install.installed) return
  install.installed = true

  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window!=="undefined" && window.Vue) {
  console.log('install')
  install(window.Vue)
}

export default  {
  install,
  ...components
}