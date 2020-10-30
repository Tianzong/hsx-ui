import hsxButtonGroup from "./src/buttonGroup";

hsxButtonGroup.install = function (Vue) {
  Vue.component(hsxButtonGroup.name, buttonGroup)
}

export default hsxButtonGroup