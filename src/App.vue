<script>
import { ref } from '@vue/reactivity'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import { emitter } from './emitter'

export default {
  components: {
    HelloWorld,
  },
  hook: {
    clickA() {
      this.count++
    },
    clickReset() {
      console.log('got Reset Trigger')
    },
  },
  trigger: {
    clickReset: {
      prepend() {
        console.log('Do something before event emit...')
      },
      append() {
        console.log('Do something after event emit...')
      },
      value: 'trigger value',
    },
  },
  setup() {
    const handleClick = () => {
      console.log('hello World')
    }
    const count = ref(0)
    return {
      handleClick,
      count,
    }
  },
  methods: {},
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" @click="test" />
  {{ count }}
  <HelloWorld
    msg="Hello Vue 3 + Vite"
    v-hook:test.click="123"
    @hello="clickReset"
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
