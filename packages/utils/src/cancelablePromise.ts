export function cancelablePromise<T>(originPromise: Promise<T>) {
  let abort = (msg: string) => { };
  const cancelPromise = new Promise((resolve, reject) => {
    abort = (msg: string = "promise aborted") => {
      reject(new CancelablePromiseError(msg))
    };
  })

  let promise = Promise.race([originPromise, cancelPromise])
  return {
    promise,
    abort
  }
}

class CancelablePromiseError extends Error {
  constructor(message: string) {
    super(message)
  }
}