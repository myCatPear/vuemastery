const vm = Vue.createApp({
  // data() {
  //   return {
  //     message: "Hello world",
  //   };
  // },
  // template: `{{message}}`,
});

vm.component('hello', {
  template: '<h1>{{message}}</h1>',
  data() {
    return {
      message:'Hello world from components!'
    }
  }
})

vm.mount("#app");
