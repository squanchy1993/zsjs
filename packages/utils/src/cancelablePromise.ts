export function cancelablePromise<T>(originPromise: Promise<T>, timeout?: number) {
  let abort = (msg: string) => { };
  let timer: NodeJS.Timeout | undefined
  if (timeout) {
    timer = setTimeout(() => {
      abort('execute function timeout')
    }, timeout);
  }

  const cancelPromise = new Promise((resolve, reject) => {
    abort = (msg: string = "promise aborted") => {
      reject(new CancelablePromiseError(msg))
    };
  })

  let promise = Promise.race([originPromise, cancelPromise]).then(res => {
    if (timer) {
      clearTimeout(timer);
      timer = undefined;
    }
    return res;
  })
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