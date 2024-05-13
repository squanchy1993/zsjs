export function syncPromise<P, R>(fun: (parameters: P) => Promise<R>) {
  let loginCB: { succeed: Function[], fail: Function[] } = {
    succeed: [],
    fail: []
  }
  let isLocked = false
  return async function (parameters: P): Promise<R> {
    return new Promise(async (resolve, reject) => {
      loginCB.succeed.push(resolve)
      loginCB.fail.push(reject)

      if (!isLocked) {
        isLocked = true
        try {
          const data = await fun(parameters)
          loginCB.succeed.map(fun => fun(data))
        } catch (error) {
          loginCB.fail.map(fun => fun(error))
        } finally {
          loginCB.succeed = []
          loginCB.fail = []
          isLocked = false
        }
      }
    })
  }
}
