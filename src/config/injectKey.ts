import type { InjectionKey } from "vue"
import type router from '@/router'
import type moment from 'moment'

export default {
  router: Symbol() as InjectionKey<typeof router>,
  moment: Symbol() as InjectionKey<typeof moment>
}
