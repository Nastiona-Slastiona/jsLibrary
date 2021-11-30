import { simpleOperationLibrary } from "./simpleOperationLib.js";

const testArray = [1, 3, '5', 7, 9 , 10];
const simpleOperationLib = simpleOperationLibrary();
alert(
    "simpleOperationLib.isArray([1, 2, 3]) => " + simpleOperationLib.isArray([1, 2, 3]) +
    "\nsimpleOperationLib.isArray({}) => " + simpleOperationLib.isArray({}));
// alert(
//     "simpleOperationLib.isBoolean('') => " + simpleOperationLib.isBoolean('') +
//     "\nsimpleOperationLib.isBoolean(false) => " + simpleOperationLib.isBoolean(false) );
// alert(
//     "simpleOperationLib.isNumber(2000) => " + simpleOperationLib.isNumber(2000) +
//     "\nsimpleOperationLib.isNumber(\"45\") => " + simpleOperationLib.isNumber("45") );
// alert(
//     "simpleOperationLib.isDate('20.08.2021') => " + simpleOperationLib.isDate('20.08.2021') +
//     "\nsimpleOperationLib.isDate(new Date(2013, 13, 1)) => " + simpleOperationLib.isDate(new Date(2013, 13, 1)) );  
// alert(
//     "simpleOperationLib.isString('20.08.2021') => " + simpleOperationLib.isString('20.08.2021') +
//     "\nsimpleOperationLib.isString({}) => " + simpleOperationLib.isString({}) );     
// alert(
//     "simpleOperationLib.isUndefined(undefined) => " + simpleOperationLib.isUndefined(undefined) +
//     "\nsimpleOperationLib.isUndefined(null) => " + simpleOperationLib.isUndefined(null) );  
// alert(
//     "simpleOperationLib.isNull(0) => " + simpleOperationLib.isNull(0) +
//     "\nsimpleOperationLib.isNull(null)) => " + simpleOperationLib.isNull(null) );     
// alert(
//     "simpleOperationLib.isFunction('function') => " + simpleOperationLib.isFunction('function') +
//     "\nsimpleOperationLib.isFunction( () => prompt('How old are you?', '25') ) => " + simpleOperationLib.isFunction( () => prompt('How old are you?', '25') ) );

// alert('Second part of the task: work with arrays');
// alert(
//     'let array = [1, 3, \'5\', 7, 9 , 10];\n' +
//     'simpleOperationLib.first(array) => ' + simpleOperationLib.first([]) +
//     '\nsimpleOperationLib.last(array) => ' + simpleOperationLib.last(testArray) +
//     '\nsimpleOperationLib.skip(array, 3) => ' + simpleOperationLib.skip(testArray, 3) +
//     '\nsimpleOperationLib.take(array, 5) => ' + simpleOperationLib.take(testArray, 5) 
// );

// array = [1, 3, '5', 7, 9 , 10];
// alert('Third part of the task: chaining');
// alert(
//     'let array = [1, 3, \'5\', 7, 9 , 10];\n' +
//     'simpleOperationLib.asChain(array).skip(2).take(3).array => ' + simpleOperationLib.asChain(array).skip(2).take(3).array
// );
