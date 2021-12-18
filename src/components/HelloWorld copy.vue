<script>
import { reactive } from '@vue/reactivity'

export default {
  setup() {
    const buttons = reactive({
      btnA: true,
      btnB: false,
      btnC: false,
      btnD: false,
    })

    const reset = () => {
      buttons.btnA = true
      buttons.btnB = false
      buttons.btnC = false
      buttons.btnD = false
    }
    const handleA = () => {
      console.log('buttonA')
      buttons.btnB = true
      buttons.btnC = false
      buttons.btnD = false
    }
    const handleB = () => {
      buttons.btnC = true
      buttons.btnD = false
    }
    const handleC = () => {
      buttons.btnD = true
    }
    const handleD = () => {
      alert('Process Done !')
      reset()
    }

    return {
      buttons,
      handleA,
      handleB,
      handleC,
      handleD,
      reset,
    }
  },
}
</script>

<template>
  <div>
    <p>
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
      +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </p>

    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank">
        Vite Documentation
      </a>
      |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
    </p>

    <button type="button" @click="reset">reset</button>
    <button type="button" v-if="buttons.btnA" @click="handleA">buttonA</button>
    <button type="button" v-if="buttons.btnB" @click="handleB">buttonB</button>
    <button type="button" v-if="buttons.btnC" @click="handleC">buttonC</button>
    <button type="button" v-if="buttons.btnD" @click="handleD">buttonD</button>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
