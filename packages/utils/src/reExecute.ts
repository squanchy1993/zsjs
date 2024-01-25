export function reExecute<T>({
  cb,
  retryCount,
  intervalTime,
  event
}: {
  cb: (params?: any) => Promise<any>;
  retryCount: number;
  intervalTime?: number;
  event: (message: string) => void
}): { promise: Promise<T>; cancel: Function } {
  let finished = false

  let canceled = false;

  let cancel = () => {
  };

  const promise = new Promise<T>(async (resolve, reject) => {


    cancel = () => {
      if (finished == true) {
        return;
      }

      retryCount = 0;
      canceled = true;
      finished = true;

      const message = `Because of reason [user cancel], re-execute end`;
      console.warn(message);
      event(message)
      return reject(new Error(message));
    };
    const retry = async () => {
      try {
        const res = await cb();
        finished = true;
        resolve(res);
      } catch (error) {
        if (canceled) {
          return
        }

        let errorMsg = '';
        if (error instanceof Error) {
          errorMsg = error.message;
        } else {
          errorMsg = JSON.stringify(error)
        }

        const message = `Because of reason [${errorMsg}], start re-execute on ${retryCount}`;
        console.warn(message);
        event(message)

        if (retryCount == 0) {
          const message = `Because of reason [${errorMsg}], re-execute end`;
          console.error(message);
          event(message)
          finished = true;
          reject(error);
        } else if (retryCount !== 0) {
          if (retryCount > 0) {
            retryCount--;
          }
          setTimeout(() => {
            retry();
          }, intervalTime);
        }
      }
    };
    retry();
  })

  return {
    promise: promise,
    cancel,
  };
}
