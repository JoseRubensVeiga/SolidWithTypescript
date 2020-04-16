import EventHandler from "./EventHandler";

export default class DOMEventHandler implements EventHandler {
  addEventToElement(
    selector: string,
    type: string,
    fn: EventListenerOrEventListenerObject
  ) {
    const element = document.querySelector(selector);
    element.addEventListener(type, fn);
  }
}
