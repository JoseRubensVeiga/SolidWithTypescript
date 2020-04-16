export default interface EventHandler {
  addEventToElement(
    selector: string,
    type: string,
    fn: EventListenerOrEventListenerObject
  ): void;
}
