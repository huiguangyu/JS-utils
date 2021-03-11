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
      if (value instanceof Promise) {
        return value.then(resolve, reject)
      }
      setTimeout(() => {
        // 异步执行所有的回调函数
        if (this.status === PENDING) {
          this.status = RESOLVE
          this.value = value
          this.onResolveCallbacks.forEach((fn) => fn(value))
        }
      })
    }
    let reject = (reason) => {
      setTimeout(() => {
        // 异步执行所有的回调函数
        if (this.status === PENDING) {
          this.status = REJECT
          this.reason = reason
          this.onRejectCallbacks.forEach((fn) => fn(reason))
        }
      })
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
      typeof onResolved === 'function' ? onResolved : (value) => value
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (reason) => {
            throw reason
          }

    return new Promise((resolve, reject) => {
      let resolvePromise = (result) => {
        try {
          if (result instanceof Promise) {
            result.then(resolve, reject)
          } else if (
            result !== null &&
            (typeof result === 'object' || typeof result === 'function')
          ) {
            const then = result.then
            if (typeof then === 'function') {
              then(resolve, reject)
            } else {
              resolve(then)
            }
          } else {
            resolve(result)
          }
        } catch (error) {
          reject(error)
        }
      }
      if (this.status === RESOLVE) {
        setTimeout(() => {
          let result = onResolved(this.value)
          resolvePromise(result)
        }, 0)
      }
      if (this.status === REJECT) {
        setTimeout(() => {
          let result = onRejected(this.reason)
          resolvePromise(result)
        }, 0)
      }
      if (this.status === PENDING) {
        this.onResolvedCallbacks.push(() => {
          let result = onResolved(this.value)
          resolvePromise(result)
        })
        this.onRejectedCallbacks.push(() => {
          let result = onRejected(this.reason)
          resolvePromise(result)
        })
      }
    })
  }
}
