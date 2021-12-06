export function simpleOperationLibrary() {
    const simpleOpLib = {};
    const stringRepresentation = Object.prototype.toString;
    const emptyArray = 'There is no element in the array';
    const wrongParametr = 'Wrong parametr. Check attentively parametrs';
    
    // First part of the task: type inditification 
    simpleOpLib.isArray = obj =>
        obj instanceof Array;

    simpleOpLib.isBoolean = obj =>
        typeof obj == 'boolean';

    simpleOpLib.isNumber = obj =>
        typeof obj == 'number';

    simpleOpLib.isDate = obj =>
        obj instanceof Date;

    simpleOpLib.isString = obj =>
        typeof obj == 'string';
    
    simpleOpLib.isUndefined = obj =>
        typeof obj == 'undefined';

    simpleOpLib.isNull = obj =>
        obj === null; 

    simpleOpLib.isFunction = obj =>
        typeof obj == 'function';
        
        
    // Work with arrays 
    simpleOpLib.first = arr => {
        if( simpleOpLib.isArray(arr) ) {
            return arr.length != 0 ? arr[0] : emptyArray ;
        } else
            return wrongParametr;
    }

    simpleOpLib.last = arr => {
        if( simpleOpLib.isArray(arr) ) {
            return arr.length != 0 ? arr[arr.length - 1] : emptyArray;
        } else
            return wrongParametr;
    }

    // simpleOpLib.checkTwoParam = function(arr, num, funcName) {
    //     if ( simpleOpLib.isArray(arr) ) {
    //         return true;
    //     } else if ( simpleOpLib.isUndefined(num) || simpleOpLib.isNumber(arr) ) {
    //         simpleOpLib.func = new Function();
    //         simpleOpLib.func.name = funcName;
    //         simpleOpLib.array =  simpleOpLib.func(simpleOpLib.array, arr);
    //         return simpleOpLib;
    //     } else  return wrongParametr;
    // }

    simpleOpLib.skip = function(arr, number) {
        if ( simpleOpLib.isArray(arr) ) {
            return arr.length > number ? arr.slice(number) : 
            ' The length of the array is too short ';
        } else if ( simpleOpLib.isUndefined(number) || simpleOpLib.isNumber(arr) ) {
            simpleOpLib.array =  simpleOpLib.skip(simpleOpLib.array, arr);
            return simpleOpLib;
        } else  return wrongParametr;
    };

    simpleOpLib.take = function(arr, number) {
        if ( simpleOpLib.isArray(arr) ) {
            return  arr.length >= number ? arr.slice(0, number) : arr.length != 0 ?
            'The length of the arraye isn\'t enough there are only the next elements: ' + arr :
            emptyArray;
        } else if ( simpleOpLib.isUndefined(number) || simpleOpLib.isNumber(arr) ) {
            simpleOpLib.array = simpleOpLib.take(simpleOpLib.array, arr);
            return simpleOpLib;
        } else return wrongParametr;
    };

    // Chaining
    simpleOpLib.array = [];

    simpleOpLib.asChain = function(array) {
        simpleOpLib.array = array;
        return simpleOpLib;
    };

    return simpleOpLib;
}