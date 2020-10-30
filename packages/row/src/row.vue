
<template>
  <div class="hsx-row"
       v-bind:style="{justifyContent: justify, alignContent:align}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "hsxRow",
    props: {
      justify: {
        type: String,
        default: "start"
      },
      align: {
        type: String,
        default: "top"
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>
  .hsx-row {
    display: flex;
  }
</style>