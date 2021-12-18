import Emitter from 'tiny-emitter'

export const emitter = new Emitter()

export function registHook(options, context = {}) {
  Object.entries(options).forEach(([event, handler]) => {
    emitter.on(event, handler, context)
  })
}

export default {
  install(app, options) {
    app.config.globalProperties.$e = emitter

    app.directive('hook', {
      registered: {},
      mounted(el, binding, vnode, oldNode) {
        Object.keys(binding.modifiers).forEach((event) => {
          const handler = () => {
            emitter.emit(binding.arg, binding.value)
          }
          el.addEventListener(event, handler)
          binding.dir.registered[binding.modifiers] = handler
        })
      },
      beforeUnmount(el, binding, vnode, oldNode) {
        Object.keys(binding.modifiers).forEach((event) => {
          el.removeEventListener(
            event,
            binding.dir.registered[binding.modifiers]
          )
        })
      },
    })
    app.mixin({
      created() {
        if (this.$options.hook) {
          registHook(this.$options.hook, this)
        }
      },
    })
  },
}

emitter.on('test', (val) => {
  console.log(val)
})
