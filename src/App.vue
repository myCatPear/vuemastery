<template>
  <greeting></greeting>
  <user :ageChangeFn="updateAgeCB" :age="age"></user>
</template>

<script>
import Greeting from "@/components/Greeting.vue";
import User from "@/components/User.vue";

export default {
  name: "App",
  components: {
    Greeting,
    User,
  },
  data() {
    return {
      age: 20,
    };
  },
  methods: {
    updateAgeCB(num) {
      this.age += num;
    },
  },
};
</script>

<style scoped></style>
