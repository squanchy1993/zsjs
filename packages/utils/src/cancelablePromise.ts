export function cancelablePromise<T>(originPromise: Promise<T>) {
  let abort = () => { };
  const cancelPromise = new Promise((resolve, reject) => {
    abort = () => {
      reject(new CancelablePromiseError("promise aborted"))
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