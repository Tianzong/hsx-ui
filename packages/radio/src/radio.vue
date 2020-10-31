<template>

  <label class="hsx-radio" role="radio">
    <span class="hsx-radio__input">
      <span class="hsx-radio__inner"></span>
      <input class="hsx-radio__origin" type="radio">
    </span>
  </label>

</template>

<script>
  export default {
    name: "hsxRadio"
  }
</script>

<style>
  .exciting-text::after {
    content: "<- 让人兴兴兴奋!";
    width: 10px;
    height: 10px;
    background-color: red;
    color: green;
  }

  .boring-text::after {
    width: 4px;
    height: 4px;
    border-radius: 100%;
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    background-color: #42b983;
    transform: translate(-50%, -50%) scale(0);
    transition: transform .15s ease-in;
  }

  .box {
    width: 20px;
    height: 20px;
    /*position: relative;*/
  }

  .sb::after {
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    background-color: red;
    content: "";
    /*position: absolute;*/
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform .15s ease-in;
  }

  span.ab {
    /*position: absolute;*/
    background-color: #42b983;
    width: 200px;
    height: 200px;
  }
</style>