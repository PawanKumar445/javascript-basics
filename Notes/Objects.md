# Objects
* Object in javascript is a data-type which stores data in key-value pairs
* Object can be created using object literals -'{}' or Object.create() method
* Objects are non-primitive, so they are `called by reference`.
* Nearly all objects in JS are instances of Object class
* To delete an object key, `delete` operator can be used as delete obj.keyName;

## Useful Object Methods
* `Object.keys(obj)` returns an array of object keys. Array values are in string type
* `Object.values(obj)` returns an array of object values. Array values have same type as of the object value types
* `Object.entries(obj)` returns an array of array and each array contains key value pairs. 
* `Object.assign({},obj)` copies the object into the first parameter (i.e empty object) and returns the new object. NOTE: Here object is copied, not its reference. Change in any object will not reflect in another.
* `delete obj?.keyName` will delete the key value pair from the object.
* `Object.freeze(obj)` is used to freeze the object
  * Freeze object values can not be changed
  * Freeze object key values can not be deleted
  * By default an object is not freeze'
* `Object.isFrozen(obj)` returns a boolean value. true if object is freezed else false
* `obj.hasOwnProperty('keyName')` returns a boolean value after checking if the key is in the object or not.
* `Object.getOwnPropertyDescriptor(obj, 'keyName')` is used to check the description of an key and return an object with keys: ['value', 'writable', 'enumerable', 'configurable']
  * value- the value for the key
  * writeable- if true the value of the key can be changed.
  * enumerable - If true then the object key value will be part of the iteration
  * configurable- A boolean value that indicates if a object key value can be deleted or its value can be changed.
  * For newly created object, by default these values are true
* `Object.defineProperty(obj, 'keyName', {})`. It is used to define the description of an object key
  * {writeable: false}: restricts to change the value of the key;
  * {enumerable: false}: Key will not be included in any iterable. Like Object.keys(), Object.values(), Object.entries() or for in loop;
  * {configurable: false}- will not allow to delete the key
* `Object.getOwnPropertyDescriptors(user)` return description for all keys of the object.
* `Object.getOwnPropertyNames(user)` returns all the keys as array of string.



