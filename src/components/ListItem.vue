<template>
<router-link tag="li" :to="{ name: 'detail', params: { id: name }}" class="list-item">
  <article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
        <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`">
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong class="name">{{ name }} </strong>
          <br>
        </p>
      </div>
    </div>
  </article>
</router-link>
</template>
<script>
export default {
  props: {
    name: {
      required: true,
      type: String,
    },
    id: {
      required: true,
      type: [Number, String],
    }
  }
}
</script>
<style <style lang="scss" scoped>
.list-item {
  cursor: pointer;
  &:hover {
    background-color: #dedede;
    .name {
      color: #000;
    }
  }
}
.name {
  color:#fff;
}
</style>

