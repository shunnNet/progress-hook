import { ref } from 'vue'
import { registHook } from '../emitter'

export const btnC = ref(false)

registHook({
  clickA() {
    btnC.value = false
  },
  clickB() {
    btnC.value = true
  },
  clickD() {
    btnC.value = false
  },
  clickReset() {
    btnC.value = false
  },
})
