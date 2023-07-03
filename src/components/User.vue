<template>
  <button type="button" @click="ageChangeFn(3)">Update age CB</button>
  <p>The user is {{ age }} years old</p>
</template>

<script>
export default {
  name: "USer",
  props: {
    ageChangeFn: Function,
    age: Number,
  },
};
</script>

<style lang="scss" scoped></style>
