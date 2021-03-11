const PENDING = 'pending'
const RESOLVE = 'resolve'
const REJECT = 'reject'
class Promise {
  constructor(executor) {
    this.status = PENDING
    this.value = undefined
    this.reason = undefined
    this.onResolveCallbacks = [] // 成功的回调函数
    this.onRejectCallbacks = [] // 失败的回调函数

    let resolve = (value) => {
      if (this.status === PENDING) {
        this.status = RESOLVE
        this.value = value
        this.onResolveCallbacks.forEach((fn) => fn(value))
      }
    }
    let reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECT
        this.reason = reason
        this.onRejectCallbacks.forEach((fn) => fn(reason))
      }
    }
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onResolved, onRejected) {
    let promise2

    onResolved =
      typeof onResolved === 'function' ? onResolved : function (value) {}
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : function (reason) {
            throw reason
          }

    if (this.status === RESOLVE) {
      return (promise2 = new Promise((resolve, reject) => {}))
    }
    if (this.status === REJECT) {
      return (promise2 = new Promise((resolve, reject) => {}))
    }
    if (this.status === PENDING) {
      return (promise2 = new Promise((resolve, reject) => {}))
    }
  }
}
