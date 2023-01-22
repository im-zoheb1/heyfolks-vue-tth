import moment from 'moment'

declare module 'vue' {
  interface ComponentCustomProperties {
    $moment: typeof moment
  }
}
