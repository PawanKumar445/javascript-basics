# Document Object Model
* `Javascript representation` of a webpage is know as DOM.
* DOM can be used to manipulate the web page.
* DOM have the full access and control of the web page. So anything on the webpage can be accessed and manipulated using DOM object.


## Some DOM prototypes(methods and values)
* myTag=getElementById('id'): returns the tag that matches the passed id. DOM methods can be used on myTag object
* Difference b/w `innerText` and `innerContent` is, innerText returns all the visible content of the web page but innerContent returns all the content, even it is hidden on the webpage
* innerHtml returns the content with HTML tags (of the nested tag, if any `<p>Outer<span>Inner</span></p>`), Even if Hidden by CSS
* querySelector()
  * querySelector(`<h1>`): will return 1st h1 tag.
  * querySelector(`#tag_id`): will return the tag that matches the passed id. Prefix '#'
  * querySelector(`.tag_class`): will return the tag that matches the passed class name. Prefix '.'
  * querySelectorAll(`tag/id/class`). Returns `NodeList` (not array). NodeList is a collection of DOM elements. forEach can be used and elements can also be accessed by index. Like NodeListValues[0], NodeListValues[1] 
    * NodeList can be converted into array (if needed). `Array.from(NodeList)`. Same for HTMLList