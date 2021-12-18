<script>
import { btnA } from '../composable/btnA'
import { btnB } from '../composable/btnB'
import { btnC } from '../composable/btnC'
import { btnD } from '../composable/btnD'
export default {
  emits: ['component'],
  setup() {
    return {
      btnA,
      btnB,
      btnC,
      btnD,
    }
  },
}
</script>

<template>
  <div>
    <p @click="$emit('component')">
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

    <button type="button" v-hook:clickReset.click>reset</button>
    <button
      type="button"
      v-if="btnA"
      v-hook:clickA.click="'message from buttonA'"
    >
      buttonA
    </button>
    <button type="button" v-if="btnB" v-hook:clickB.click>buttonB</button>
    <button type="button" v-if="btnC" v-hook:clickC.click>buttonC</button>
    <button type="button" v-if="btnD" v-hook:clickD.click>buttonD</button>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
