<template>
    <div class="hsx-col" v-bind:style="{flex: span}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "hsxCol",
        props: {
            span: {
                type: Number,
                default: 0
            }
        }
    }
</script>

<style scoped>

</style>