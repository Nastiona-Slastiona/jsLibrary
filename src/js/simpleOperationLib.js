(function(window) {
    function simpleOperationLibrary() {
        const simpleOpLib = {};
        const stringRepresentation = Object.prototype.toString;
        const emptyArray = 'There is no element in the array';
        
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
                return 'Wrong parametr. Function \'isArray\' required an array';
        }

        simpleOpLib.last = arr => {
            if( simpleOpLib.isArray(arr) ) {
                return arr.length != 0 ? arr[arr.length - 1] : emptyArray;
            } else
                return 'Wrong parametr. Function \'isArray\' required an array';
        }

        simpleOpLib.skip = function(arr, number) {
            if ( simpleOpLib.isArray(arr) ) {
                return arr.length > number ? arr.slice(number) : ' The length of the array is too short ';
            } else if ( simpleOpLib.isUndefined(number) || simpleOpLib.isNumber(arr) ) {
                simpleOpLib.array =  simpleOpLib.skip(simpleOpLib.array, arr);
                return simpleOpLib;
            } else  return 'Error. Check input parametrs';
        };

        simpleOpLib.take = function(arr, number) {
            if ( simpleOpLib.isArray(arr) ) {
                return  arr.length >= number ? arr.slice(0, number) : arr.length != 0 ?
                'The length of the arraye isn\'t enough there are only the next elements: ' + arr : emptyArray;
            } else if ( simpleOpLib.isUndefined(number) || simpleOpLib.isNumber(arr) ) {
                simpleOpLib.array = simpleOpLib.take(simpleOpLib.array, arr);
                return simpleOpLib;
            } else return 'Error. Check input parametrs';
        };

        // Chaining
        simpleOpLib.array = [];

        simpleOpLib.asChain = function(array) {
            simpleOpLib.array = array;
            return simpleOpLib;
        };

        return simpleOpLib;
    }

    if (typeof(window.simpleOperationLib) === 'undefined') {
        window.simpleOperationLib = simpleOperationLibrary();
    }

})(window); 


// const testArray = [1, 3, '5', 7, 9, 10];

// alert(
//     "simpleOperationLib.isArray([1, 2, 3]) => " + simpleOperationLib.isArray([1, 2, 3]) +
//     "\nsimpleOperationLib.isArray({}) => " + simpleOperationLib.isArray({}));

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

// alert('Third part of the task: chaining');
// alert(
//     'let array = [1, 3, \'5\', 7, 9 , 10];\n' +
//     'simpleOperationLib.asChain(array).skip(2).take(3).array => ' + simpleOperationLib.asChain(testArray).skip(2).take(3).array
// );
