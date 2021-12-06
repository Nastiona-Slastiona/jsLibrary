const EMPTY_ARRAY_MESSAGE = 'There is no element in the array';
const WRONG_PARAMETRS_MESSAGE = 'Wrong parametr. Check attentively parametrs';
const SHORT_LENGTH_MESSAGE = ' The length of the array is too short ';

export function simpleOperationLibrary() {
    const simpleOpLib = {};

    function isNotEmptyArray(arr) {
        if(arr.length === 0) {
            return false;
        }
    
        return true;
    }

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
        if(!simpleOpLib.isArray(arr)) {
            return WRONG_PARAMETRS_MESSAGE;
        }
        
        return isNotEmptyArray(arr) 
            ? arr[0] 
            : EMPTY_ARRAY_MESSAGE;
    }

    simpleOpLib.last = arr => {
        if(!simpleOpLib.isArray(arr)) {
            return WRONG_PARAMETRS_MESSAGE;
        }

        return isNotEmptyArray(arr) 
            ? arr[arr.length - 1] 
            : EMPTY_ARRAY_MESSAGE;
    }

    simpleOpLib.skip = function(arr, number) {
        if (simpleOpLib.isArray(arr)) {
            return arr.length > number 
            ? arr.slice(number) 
            : SHORT_LENGTH_MESSAGE;
        } 
        
        if (simpleOpLib.isUndefined(number) 
            || simpleOpLib.isNumber(arr)) {
            simpleOpLib.array =  simpleOpLib.skip(simpleOpLib.array, arr);

            return simpleOpLib;
        } 
        
        return WRONG_PARAMETRS_MESSAGE;
    };

    simpleOpLib.take = function(arr, number) {
        if (simpleOpLib.isArray(arr)) {
            return  arr.length >= number 
                    ? arr.slice(0, number) 
                    : isNotEmptyArray(arr)
                    ? SHORT_LENGTH_MESSAGE 
                    : EMPTY_ARRAY_MESSAGE;
        }
        
        if (simpleOpLib.isUndefined(number) 
            || simpleOpLib.isNumber(arr)) {
            simpleOpLib.array = simpleOpLib.take(simpleOpLib.array, arr);

            return simpleOpLib;
        }
        
        return WRONG_PARAMETRS_MESSAGE;
    };

    // Chaining
    simpleOpLib.asChain = function(array) {
        simpleOpLib.array = array;
        return simpleOpLib;
    };

    return simpleOpLib;
}