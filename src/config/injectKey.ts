import type { InjectionKey } from "vue"
import type router from '@/router'
import type moment from 'moment'
import type http from '@/config/http'

export default {
  router: Symbol() as InjectionKey<typeof router>,
  moment: Symbol() as InjectionKey<typeof moment>,
  $http: Symbol() as InjectionKey<typeof http> 
}
