<template>
  <div class="fake-buttons is-hidden-mobile">
    <button class="circle">A</button>
    <button class="circle">B</button>
    <div class="arrows">
      <div class="arrow up"></div>
      <div class="arrow right"></div>
      <div class="arrow center"></div>
      <div class="arrow down"></div>
      <div class="arrow left"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.fake-buttons {
  padding: 0 10px;

  @media all and (min-width: 768px) {
    padding: 0 30px;

    .circle {
      font-size: 20px;
      width: 80px;
      height: 80px;
    }

    .arrows {
      margin-right: 30px;
      .arrow {
         width: 30px;
        height: 30px;
      }
     
      .left {
        left: -30px;
        top: 30px;
      }

      .right {
        right: -30px;
        top: 30px;
      }
    }
  }
}
.circle {
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: black;
  color: #fff;
  font-weight: bold;
  &:first-child {
    margin-right: 20px;
  }
}
.arrows {
  margin-right: 20px;
  position: relative;
  float: right;
  cursor: pointer;

  .arrow {
    width: 20px;
    height: 20px;
    background-color: #000;
    cursor: pointer;
  }

  // .up {
  //   border-radius: 10px 10px 0 0;
  // }

  .left {
    position: absolute;
    left: -20px;
    top: 20px;
  }

  .right {
    position: absolute;
    right: -20px;
    top: 20px;
  }

}
</style>
