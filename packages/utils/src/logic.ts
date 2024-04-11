import { deepClone } from './deepClone'

export function dataWithDefault<T>(data: T) {
  const defaultData = deepClone(data);

  const getClone = () => {
    const copy: T = deepClone(defaultData)
    return copy
  }
  return { data, defaultData, getClone }
}

