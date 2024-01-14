export function loopFunc(func: () => Promise<any>, time: number = 1000) {
  let status = false;
  let timer: NodeJS.Timeout;
  let intervalTime: number = 1000;

  if (time) {
    intervalTime = time;
  }

  const refresh = async () => {
    try {
      await func();
    } finally {
      if (status) {
        timer = setTimeout(() => {
          clearTimeout(timer)
          refresh();
        }, intervalTime);
      }
    }
  };

  const start = () => {
    if (status) {
      throw new Error('ready start!')
    };
    status = true;
    refresh();
  };

  const setTime = (time: number) => {
    intervalTime = time
  }

  const stop = () => (status = false);

  return {
    start,
    stop,
    refresh,
    setTime
  };
}