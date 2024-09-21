# Prototypes

* Prototypes in javascript re mechanism by which objects inherit/share features (properties and methods) of another object.
* Every javascript object have built in properties which are known as prototypes
  * Like map, filter, reduce etc. in array
  * Like toUpperCase(), replace() etc. in strings
* The prototype itself is an object, which will have its own prototype and so on. It Creates a `Prototype Chain`
* A prototype chain ends when a prototype have its prototype value as null
* When property or method  is not found in an object then it looks for it in its prototype and searches until the property in found or found null for any prototype. 
* In case null is found instead of property/method, the invocation returns undefined
* When a object defines a property/method which already exists in its prototype, then on invocation the user defined prop/method will be executed (Like inheritance) this is knowns as `Shadowing`.
* All the properties of an object which are not in its prototype are known as `Own Properties`