export function syncPromise<P, R>(fun: (parameters?: P) => Promise<R>) {
  let loginCB: { succeed: Function[], fail: Function[] } = {
    succeed: [],
    fail: []
  }
  let isLocked = false
  return async function ({ Locked, parameters }: { Locked?: boolean, parameters?: P }): Promise<R | null> {
    return new Promise(async (resolve, reject) => {

      if (isLocked === false && Locked === true) {
        isLocked = Locked
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

      if (isLocked) {
        loginCB.succeed.push(resolve)
        loginCB.fail.push(reject)
      } else {
        resolve(null)
      }
    })
  }
}
