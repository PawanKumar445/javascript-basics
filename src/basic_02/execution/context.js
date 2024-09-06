/**
 * Execution context is the environment where JS code runs. Like in Browser or in Local machine
 * The global execution context is referred by 'this' variable. For node js  this is '{}' and for browser 'this' refers to window object
 * Types of Execution Context are: Global, Function/ Functional, Eval
 * 
 * When JS code runs it is executed from 3 phases:- Global Execution Phase, Memory Phase, Execution Phase
 * Global phase: It is created only once, when the JS file starts its execution
 * Memory phase: In this phase all the variables are assigned undefined values and function definition is saved in memory
 * Execution phase: In this phase all the variables are assigned actual values
 *    if there is a function call, then a separate execution environment it allocated to it(which contains separate Memory phase and separate Execution phase). After the function competes it returns (value, if any) to the parent(Global) execution context and the functional execution context gets deleted
 */