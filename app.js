let vm = Vue.createApp({
  data() {
    return {
      isPurple: false,
      selected: "",
    };
  },
  computed: {
    setClass() {
      return {
        purple: this.isPurple,
      };
    },
  },
}).mount("#app");
