/**
 * How data is saved in memory and how it is accessed, on the basis of this data is categorized. Primitive Types and Non Primitive Types
 * Primitive: CALL BY VALUE
 * Non Primitive: CALL BY REFERENCE
 * 
 * Primitive Types: String, Number, Boolean, null, undefined, Symbol, BigInt
 *    NOTE: They all holds single value at a time
 * 
 * Non Primitive / Reference Types: Array, Objects, Functions
 * 
 * null is a object type but still a primitive type (May be bug)
 */

const sym1 = Symbol(123);
const sym2 = Symbol(123);

// console.log('Symbol 1:', sym1, 'Symbol 2:', sym2,'Are the equal:', sym1==sym2, 'strict check:', sym1===sym2);//OUTPUT: Symbol 1: Symbol(123) Symbol 2: Symbol(123) Are the equal: false strict check: false

//NOTE: Symbols are unique

const num= 848728478277939429423094123094094;
const bigNum = 848728478277939429423094123094094n;
// console.log('num:',num, 'Big Num:::', bigNum, 'type of big num:', typeof bigNum);// OUTPUT: num: 8.487284782779394e+32 Big Num::: 848728478277939429423094123094094n type of big num: bigint

