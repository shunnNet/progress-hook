import { ref } from 'vue'
import { emitter, registHook } from '../emitter'

export const btnD = ref(false)
registHook({
  clickA() {
    btnD.value = false
  },
  clickB() {
    btnD.value = false
  },
  clickC() {
    btnD.value = true
  },
  clickD() {
    console.log('Process Complete')
    btnD.value = false
  },
  clickReset() {
    btnD.value = false
  },
})
