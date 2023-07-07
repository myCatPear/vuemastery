<template>
  <!-- <greeting></greeting>
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
  </select> -->

  <!-- <keep-alive>
    <component :is="componentsName" />
  </keep-alive>
  <hr>
  <button type="button" @click="flag = !flag">Toggle</button> -->

  <!-- <transition name="fade" mode="out-in">
    <h2 v-if="flag">Hellow deniska</h2>
    <h2 v-else>Bye deniska</h2>
  </transition> -->

  <!-- <transition name="zoom" type="animation" appear>
    <h2 v-if="flag">Hello DEN!</h2>
  </transition> -->

  <!-- <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave"
    @leave="leave" @after-leave="afterLeave" :css="true" name="fade">
    <h2 v-if="flag">Hey den</h2>
  </transition> -->

  <button @click="addItem">Add</button>

  <ul>
    <transition-group name="fade">

    <li v-for="(number,index) in numbers" :key="number" @click="removeItem(index)">
      {{ number }}

    </li>
    </transition-group>

  </ul>
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
      flag: true,
      numbers:[1,2,3,4,5]
    };
  },
  methods: {
    addItem() {
      const num = Math.floor(Math.random() * 100 + 1)
      const index = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(index, 0, num);
    },
    removeItem(index) {
      this.numbers.splice(index, 1)
    },
    updateAgeCB(num) {
      this.age += num;
    },
    beforeEnter(el) {
      console.log('beforeEnter event fired', el)
    },
    enter(el, done) {
      console.log('Enter event fired', el)
      // const animation = el.animate([{ transform: "scale3d(0,0,0)" }, {}], {
      //   duration: 1000,
      // })

      // animation.onfinish = () => {
      //   done()

      // }

    },
    afterEnter(el) {
      console.log('afterEnter event fired', el)

    },
    beforeLeave(el) {
      console.log('beforeLeave event fired', el)

    },
    leave(el, done) {
      // const animation = el.animate([{}, { transform: "scale3d(0,0,0)" }], {
      //   duration: 1000,
      // })

      // animation.onfinish = () => {
      //   done()

      // }
    },
    afterLeave(el) {
      console.log('afterLeave event fired', el)

    }
  },
};
</script>

<style scoped>
li {
  font-size: 22px;
  cursor: pointer;
}

h2 {
  width: 400px;
  padding: 20px;
  margin: 20px;
}

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

.zoom-enter-active {
  animation: zoom-in 1s linear forwards;
  transition: all 2s linear;
}

.zoom-leave-active {
  animation: zoom-out 1s linear forwards;
  transition: all 2s linear;

}

.zoom-enter-from {
  opacity: 0;
}

.zoom-leave-to {
  opacity: 0;
}

@keyframes zoom-in {
  from {
    transform: scale(0, 0);
  }

  to {
    transform: scale(1, 1);
  }
}

@keyframes zoom-out {
  from {
    transform: scale(1, 1);
  }

  to {
    transform: scale(0, 0);
  }
}
</style>
