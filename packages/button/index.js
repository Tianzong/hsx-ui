import hsxButton from "./src/button";

hsxButton.install = function (Vue) {
  Vue.component(hsxButton.name, hsxButton)
}

export default hsxButton