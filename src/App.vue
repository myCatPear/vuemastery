<template>
  <greeting></greeting>
  <user :ageChangeFn="updateAgeCB" :age="age"></user>
  <app-form>
    <div>{{ age }}</div>
    <template v-slot:help>
      This is some help text
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="email">
      <input type="text" placeholder="username">
      <input type="password" placeholder="password">
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
  </app-form>
  <app-form>
    <template v-slot:help>
      Contact help text
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="name">
      <input type="text" placeholder="message">
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
  </app-form>
  <hr />
  <select v-model="componentsName">
    <option value="Home">Home</option>
    <option value="About">About</option>
  </select>

  <keep-alive>
    <component :is="componentsName" />
  </keep-alive>
</template>

<script>
import Greeting from "@/components/Greeting.vue";
import User from "@/components/User.vue";
import AppForm from "./components/AppForm.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Greeting,
    User,
    AppForm,
    About,
    Home,
  },
  data() {
    return {
      age: 20,
      componentsName: 'Home'
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
