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
  <hr>
  <button type="button" @click="flag = !flag">Toggle</button>

  <transition name="fade" mode="out-in">
    <h2 v-if="flag">Hellow deniska</h2>
    <h2 v-else>Bye deniska</h2>
  </transition>
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
      componentsName: 'Home',
      flag: false,
    };
  },
  methods: {
    updateAgeCB(num) {
      this.age += num;
    },
  },
};
</script>

<style scoped>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s linear;
}

.fade-leave-to {
  transition: all 1s linear;
  opacity: 0;
}
</style>
