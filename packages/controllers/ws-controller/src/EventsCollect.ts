export default class EventsCollect {
  events: { [key: string]: Array<(e: any) => void> } = {}
  constructor(eventNames: string[]) {
    eventNames.forEach(name => {
      Reflect.set(this.events, name, [])
    })
  }

  /**
   * Add a callback function
   * @param {string} eventName - The event name.
   * @param {function} fun - The callback function.
   */
  addEventListener(eventName: string, fun: (e: any) => void) {
    if (!Reflect.has(this.events, eventName)) {
      throw new Error(`event ${eventName} doesn't exist!`)
    }

    this.events[eventName].push(fun)
  }

  /**
 * remove a callback function
 * @param {string} eventName - The event name.
 * @param {function} fun - The callback function.
 */
  removeEventListener(eventName: string, fun: (e: any) => void) {
    if (!Reflect.has(this.events, eventName)) {
      throw new Error(`event ${eventName} doesn't exist!`)
    }

    const index = this.events[eventName].indexOf(fun)
    if (index !== -1) {
      this.events[eventName].splice(index, 1)
    }
  }

  dispatchEvent(eventName: string, data: any) {
    if (!Reflect.has(this.events, eventName)) {
      throw new Error(`event ${eventName} doesn't exist!`)
    }

    this.events[eventName].forEach(fun => fun(data))
  }
}