import AbstractShareButton from "./AbstractShareButton";
import EventHandler from "./EventHandler";

export default class ShareButtonPrint extends AbstractShareButton {
  constructor(eventHandler: EventHandler, selector: string) {
    super(eventHandler, selector);
  }

  createAction() {
    this.eventHandler.addEventToElement(this.selector, "click", () =>
      window.print()
    );
  }
}
