const PENDING = 'pending'
const RESOLVE = 'resolve'
const REJECT = 'reject'
class Promise {
  constructor(excutor) {
    this.status = PENDING
    this.value = undefined
    this.reason = undefined
    this.onResolveCallbacks = [] // 成功的回调函数
    this.onRejectCallbacks = [] // 失败的回调函数

    let resolve = (value) => {
      if (this.status === RESOLVE) {
        this.value = value
        this.onResolveCallbacks.forEach((fn) => fn())
      }
    }
    let reject = (reason) => {
      if (this.status === REJECT) {
        this.reason = reason
        this.onRejectCallbacks.forEach((fn) => fn())
      }
    }
    try {
      excutor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }
}
