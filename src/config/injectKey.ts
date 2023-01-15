import type { InjectionKey } from "vue"
import type router from '@/router'

export default {
  router: Symbol() as InjectionKey<typeof router>
}
