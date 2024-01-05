export default class EventsCollect {
  events: { [key: string]: Array<Function> } = {}
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
  addEventListener(eventName: string, fun: Function) {
    if (!Reflect.has(this.events, eventName)) {
      throw new Error(`event ${eventName} doesn't exist!`)
    }

    if (this.events[eventName].includes(fun)) {
      return;
    }

    this.events[eventName].push(fun)
  }

  /**
 * remove a callback function
 * @param {string} eventName - The event name.
 * @param {function} fun - The callback function.
 */
  removeEventListener(eventName: string, fun: Function) {
    if (!Reflect.has(this.events, eventName)) {
      throw new Error(`event ${eventName} doesn't exist!`)
    }

    const index = this.events[eventName].indexOf(fun)
    if (index !== -1) {
      this.events[eventName].splice(index, 1)
    }
  }

  dispatchEvent<T>(eventName: string, data: T) {
    if (!Reflect.has(this.events, eventName)) {
      throw new Error(`event ${eventName} doesn't exist!`)
    }

    this.events[eventName].forEach(fun => fun(data))
  }
}