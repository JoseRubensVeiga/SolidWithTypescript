import AbstractShareButton from "./AbstractShareButton";
import EventHandler from "./EventHandler";

export default abstract class AbstractShareLinkButton extends AbstractShareButton {
  url: string;

  constructor(eventHandler: EventHandler, selector: string, url: string) {
    super(eventHandler, selector);
    this.url = url;
  }

  abstract bind(): void;
}
