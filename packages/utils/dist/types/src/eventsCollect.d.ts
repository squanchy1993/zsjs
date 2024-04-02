export declare class EventsCollect {
    events: {
        [key: string]: Array<Function>;
    };
    constructor(eventNames: string[]);
    /**
     * Add a callback function
     * @param {string} eventName - The event name.
     * @param {function} fun - The callback function.
     */
    addEventListener(eventName: string, fun: Function): void;
    /**
   * remove a callback function
   * @param {string} eventName - The event name.
   * @param {function} fun - The callback function.
   */
    removeEventListener(eventName: string, fun: Function): void;
    dispatchEvent<T>(eventName: string, data: T): void;
}
//# sourceMappingURL=eventsCollect.d.ts.map