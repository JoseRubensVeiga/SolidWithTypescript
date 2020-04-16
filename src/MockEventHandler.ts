import EventHandler from "./EventHandler";

export default class DOMEventHandler implements EventHandler {
  addEventToElement(
    selector: string,
    type: string,
    fn: EventListenerOrEventListenerObject
  ) {
    console.log({
      selector,
      type,
      fn,
    });
  }
}
