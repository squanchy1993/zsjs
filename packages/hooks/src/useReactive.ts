
import { useRef } from 'react';
import { useUpdate } from './useUpdate'
import { useCreation } from './useCreation'


const observer = <T extends Record<string, any>>(initialVal: T, cb: () => void): T => {

  if (Object.prototype.toString.call(initialVal) !== '[object Object]') {
    return initialVal;
  }
  const proxy = new Proxy<T>(initialVal ?? {}, {
    get(target, key, receiver) {
      const res = Reflect.get(target, key, receiver);
      return typeof res === 'object' ? observer(res, cb) : Reflect.get(target, key);
    },
    set(target, key, val) {
      const ret = Reflect.set(target, key, val);
      cb();
      return ret;
    },
  });

  return proxy;
}

export const useReactive = <T extends Record<string, any>>(initialState: T): T => {
  const ref = useRef<T>(initialState);
  const update = useUpdate();

  const state = useCreation(() => {
    return observer(ref.current, () => {
      update();
    });
  }, []);

  return state
};