<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="text-lg flex items-center justify-center h-screen flex-col"><button class="btn-accent btn">Hello
      World!</button>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
export default {
  components: {
    HelloWorld
  }
}
</script>
<style scoped></style>
