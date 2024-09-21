# Execution Context
* In JavaScript, the execution context is an abstract concept that represents the environment in which a piece of code is executed.
* It contains information about the scope, the value of this, and other variables that are available during the execution of the code. 

## Pass Execution context
* If a method is called using call() method with this keyword as its first argument, then the called function does not use its own execution context. If this keyword is not used then it still used the execution context of the caller function 
* Call method is used to pass execution context (this keyword to another function)
* Each function have its own execution context, and when the execution of the function ends its context also ends () removed from call stack
* To solve this problem call() is used which takes this as an optional parameter

# Execution Stack
* JavaScript uses a call stack to manage execution contexts. When a function is invoked, a new execution context is created and pushed onto the stack. When the function completes, its context is popped off the stack, and execution resumes in the previous context.