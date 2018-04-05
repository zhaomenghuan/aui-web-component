<template>
  <div>
    <h1 @click="clickTest">{{title}}</h1>
  </div>
</template>

<script type="module">
  export default {
    name: "aui-header",
    props: ['title'],
    methods: {
      clickTest() {
        this.$emit("title", this.title)
      }
    }
  }
</script>