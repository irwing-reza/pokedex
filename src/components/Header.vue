<template>
  <div class="beep-beep">
    <router-link to="/"  tag="div" class="cam"></router-link>
    <div class="led led1"></div>
    <div class="led led2"></div>
    <div class="led led3"></div>
  </div>
</template>
<style lang="scss" scoped>
.beep-beep {
  display: block;
  height: 100px;
}
.led {
  top: 0px;
  left: 40px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  position: relative;
  display: inline-block;
  box-shadow: 0px 0px 0px 1px #222;
  margin-right: 10px;

  &.led1 {
    background-color: #FF002B;
    border: solid 5px #9E001B;
  }

  &.led2 {
    background-color: #FFE21A;
    border: solid 5px #A49010;
  }

  &.led3 {
    background-color: #6EBB79;
    border: solid 5px #336D3B;
  }
}

.cam {
  top: 25px;
  left: 25px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: relative;
  display: inline-block;
  background-color: #28A9FC;
  border: solid 10px #196A9E;
  box-shadow: 0px 0px 0px 4px #C4C4C4;
}
</style>
