export function simpleOperationLibrary() {
    const simpleOpLib = {};
    const stringRepresentation = Object.prototype.toString;
    const emptyArray = 'There is no element in the array';
    const wrongParametr = 'Wrong parametr. Check attentively parametrs';
    
    // First part of the task: type inditification 
    simpleOpLib.isArray = obj =>
        stringRepresentation.call(obj) === '[object Array]';

    simpleOpLib.isBoolean = obj =>
        stringRepresentation.call(obj) === '[object Boolean]';

    simpleOpLib.isNumber = obj =>
        stringRepresentation.call(obj) === '[object Number]';

    simpleOpLib.isDate = obj =>
        stringRepresentation.call(obj) === '[object Date]';

    simpleOpLib.isString = obj =>
        stringRepresentation.call(obj) === '[object String]';
    
    simpleOpLib.isUndefined = obj =>
        stringRepresentation.call(obj) === '[object Undefined]';

    simpleOpLib.isNull = obj =>
        stringRepresentation.call(obj) === '[object Null]'; 

    simpleOpLib.isFunction = obj =>
        stringRepresentation.call(obj) === '[object Function]';
        
        
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