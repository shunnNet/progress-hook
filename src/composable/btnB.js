import { ref } from 'vue'
import { registHook } from '../emitter'

export const btnB = ref(false)

registHook({
  clickA(message) {
    btnB.value = true
    console.log(message)
  },
  clickD() {
    btnB.value = false
  },
  clickReset() {
    btnB.value = false
  },
})
