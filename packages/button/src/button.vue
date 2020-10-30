<template>
  <button
    class="hsx-button"
    @click="handleClick"
    :class="[
      type ? 'hsx-button--' + type: '',
      buttonSize ? 'hsx-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': isPlain,
        'is-round': isRound,
        'is-circle': isCircle
      }
      ]"
  >
    <i class="hsx-icon-loading" v-if="loading"></i>
    <i class="hsx-icon-arrow-down" v-if="icon"></i>
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "hsxButton",

    props: {
      type: {
        type: String,
        default: 'default'
      },
      icon: {
        type: String,
        default: ''
      },
      buttonDisabled: Boolean,
      loading: Boolean,
      buttonSize: String,
      isPlain: Boolean,
      isRound: Boolean,
      isCircle: Boolean
    },
    methods: {
      handleClick(e) {
        this.$emit('click', e)
      }
    }
  }
</script>

<style scoped>

</style>