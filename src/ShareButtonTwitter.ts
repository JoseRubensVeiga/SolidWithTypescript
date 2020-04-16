import AbstractShareLinkButton from "./AbstractShareLinkButton";
import EventHandler from "./EventHandler";

export default class ShareButtonTwitter extends AbstractShareLinkButton {
  url: string;

  constructor(eventHandler: EventHandler, selector: string, url: string) {
    super(eventHandler, selector, url);
  }

  bind() {
    let link: string;

    link = `https://twitter.com/${this.url}`;

    this.eventHandler.addEventToElement(this.selector, "click", () =>
      window.open(link)
    );
  }
}
