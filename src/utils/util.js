export default {
  install(Vue) {
    Vue.prototype.$isWeiXin = () => {
      const u = navigator.userAgent
      return u.indexOf('MicroMessenger') > -1
    }

    Vue.prototype.$isAndroid = () => {
      const u = navigator.userAgent
      return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
    }

    Vue.prototype.MAX_UPLOAD_SIZE = 50
    Vue.prototype.MAX_GROUP_NUMBER = 10
  }
}