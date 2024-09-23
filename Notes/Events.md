# Events

* Events are fired when something happens, like on click on scroll etc.
* There can be more than one div with same id. But if `getElementById('tag_id')` is used, then it returns first element that matches the id
* Directly adding `onClick()` or any other event is not recommended in javascript (But fine with `React`)

## Event Propagation
* Event propagation defined in which order the elements receives the events.
* Types of Event Propagation
  * Bubbling: Here Events are received from child to parent
  * Capturing: Here Events and received from parent to child
* TO prevent event propagation (do not want to send the event from child to parent or parent to child). Use `e.stopPropagation()` method of the event object
* For DOM events: `addEventListener('event_name', callback, useBubble)` 
  * useBubble is a boolean value. If passed false then capturing is used else bubbling is used
* In react use `onClickCapture={}` to use capturing as default is bubbling