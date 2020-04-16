import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonTwitter from "./ShareButtonTwitter";
import ShareButtonLinkedIn from "./ShareButtonLinkedIn";
import ShareButtonPrint from "./ShareButtonPrint";
import DOMEventHandler from "./DOMEventHandler";

const eventHandler = new DOMEventHandler();

const shareButtonFacebook = new ShareButtonFacebook(
  eventHandler,
  ".btn-facebook",
  "joserubensveiga"
);
shareButtonFacebook.bind();

const shareButtonTwitter = new ShareButtonTwitter(
  eventHandler,
  ".btn-twitter",
  "joserubensveiga"
);
shareButtonTwitter.bind();

const shareButtonLinkedIn = new ShareButtonLinkedIn(
  eventHandler,
  ".btn-linkedin",
  "joserubensveiga"
);
shareButtonLinkedIn.bind();

const shareButtonPrint = new ShareButtonPrint(eventHandler, ".btn-print");
shareButtonPrint.createAction();
