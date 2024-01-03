
import { useEffect } from "react";

/**
 * 组件挂载后
 * componentDidMount in hook way
 *
 * @export
 * @param {() => any} onMount
 * @returns
 */
export function useOnMount(onMount: () => any) {
  return useEffect(() => {
    if (onMount) {
      //
      onMount()
    }
  }, [])
}

/**
 * 组件卸载前
 * componentWillUnmount in hook way
 *
 * @export
 * @param {() => any} onUnmount
 * @returns
 */
export function useOnUnmount(onUnmount: () => any) {
  return useEffect(() => {
    return () => onUnmount && onUnmount()
  }, [])
}
/**
 * 组件更新前
 * componentDidUpdate in hook way
 *
 * @export
 * @param {() => any} onUpdate
 * @returns
 */
export function useOnUpdate(onUpdate: () => any) {
  return useEffect(() => {
    return () => onUpdate && onUpdate()
  })
}