<template>
  <div>
    <p v-for="item in items" :key="item.index">{{ item.name }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  mounted() {
    for (let i = 0; i < 1000; i++) {
      this.items.push({
        index: i,
        name: "idnex: " + i
      });
    }
  }
};
</script>