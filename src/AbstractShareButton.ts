import EventHandler from "./DOMEventHandler";

export default abstract class AbstractShareButton {
  selector: string;
  eventHandler: EventHandler;

  constructor(eventHandler: EventHandler, selector: string) {
    this.selector = selector;
    this.eventHandler = eventHandler;
  }
}
