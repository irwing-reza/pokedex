<template>
  <div class="home">
    <img src="https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG" alt="">
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
};
</script>
<style lang="scss" scoped>
.home {
  position: relative;
  height: 100%;
  width: 100%;

}
img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: block;
  max-width: 200px;
}
</style>
