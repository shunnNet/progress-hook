<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'

export default {
  hook: {
    test() {
      console.log('test hook')
    },
  },
  components: {
    HelloWorld,
  },
  created() {
    this.test = this.$options.hook.test
  },
  setup() {
    const handleClick = () => {
      console.log('hello World')
    }
    return {
      handleClick,
    }
  },
  methods: {},
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" @click="test" />
  <HelloWorld
    msg="Hello Vue 3 + Vite"
    v-hook:test.click="123"
    @component="handleClick"
  />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
