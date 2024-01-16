<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="incrementCount">count is {{ count }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    incrementCount() {
      this.count++
    }
  }
}
</script>

<style scoped></style>