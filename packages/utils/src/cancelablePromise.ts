function cancelablePromise<T>(originPromise: () => Promise<T>) {
  let cancelPromiseReject: (reason?: any) => void
  const cancelPromise = new Promise((resolve, reject) => {
    cancelPromiseReject = reject
  })

  let promise = Promise.race([originPromise, cancelPromise])
  return {
    promise,
    abort: () => {
      cancelPromiseReject(new CancelablePromiseError("promise aborted"))
    }
  }
}

class CancelablePromiseError extends Error {
  constructor(message: string) {
    super(message)
  }
}