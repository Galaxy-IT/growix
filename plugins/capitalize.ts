import Vue from 'vue'
export default () => {
  Vue.filter('capitalize', function (value: string) {
    return value.charAt(0).toUpperCase() + value.slice(1)
  })
}
