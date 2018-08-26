<template>
  <ul>
    <ListItem
      v-for="item in items"
      :key="item.name"
      :name="item.name"
      :id="item.resource_uri.match(/\/([0-9]+)/)[1]"
    />
  </ul>
</template>
<script>
import ListItem from '@/components/ListItem.vue';

export default {
  components: {
    ListItem,
  },
  props: {
    items: {
      items: Array,
      required: true,
    },
  },
};
</script>
