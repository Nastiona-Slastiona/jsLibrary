(function(window) {

    function myLibrary() {
        let _myLibraryObject = {};
        let stringRepresentation = Object.prototype.toString;

        // First part of the task: some functionality
        _myLibraryObject.isArray = obj =>
            stringRepresentation.call(obj) === '[object Array]';

        _myLibraryObject.isBoolean = obj =>
            stringRepresentation.call(obj) === '[object Boolean]';

        _myLibraryObject.isNumber = obj =>
            stringRepresentation.call(obj) === '[object Number]';

        _myLibraryObject.isDate = obj =>
            stringRepresentation.call(obj) === '[object Date]';

        _myLibraryObject.isString = obj =>
            stringRepresentation.call(obj) === '[object String]';
        
        _myLibraryObject.isUndefined = obj =>
            stringRepresentation.call(obj) === '[object Undefined]';

        _myLibraryObject.isNull = obj =>
            stringRepresentation.call(obj) === '[object Null]'; 

        _myLibraryObject.isFunction = obj =>
            stringRepresentation.call(obj) === '[object Function]';
           
            
        // Work with arrays
        _myLibraryObject.first = arr => arr[0];
        _myLibraryObject.last = arr => arr[arr.length - 1];

        _myLibraryObject.skip = function(arr, number) {
            return arr.splice(number,);
        };
        _myLibraryObject.take = function(arr, number) {
            return arr.splice(0, number);
        };

        // Chaining
        _myLibraryObject.array = [];
        _myLibraryObject.asChain = function(array) {
            _myLibraryObject.array = array;
            _myLibraryObject.skip = _myLibraryObject.skipWrapper;
            _myLibraryObject.take = _myLibraryObject.takeWrapper;
            return _myLibraryObject;
        };
        _myLibraryObject.skipWrapper = function(number){
            _myLibraryObject.array = _myLibraryObject.array.splice(number,);
            return _myLibraryObject;
        };
        _myLibraryObject.takeWrapper = function(number){
            _myLibraryObject.array = _myLibraryObject.array.splice(0, number);
            return _myLibraryObject;
        };

        return _myLibraryObject;
    }

    if (typeof(window.myLib) === 'undefined') {
        window.myLib = myLibrary();
    }

})(window); 


let array = [1, 3, '5', 7, 9 , 10];

alert(
    "myLib.isArray([1, 2, 3]) => " + myLib.isArray([1, 2, 3]) +
    "\nmyLib.isArray({}) => " + myLib.isArray({}));
alert(
    "myLib.isBoolean('') => " + myLib.isBoolean('') +
    "\nmyLib.isBoolean(false) => " + myLib.isBoolean(false) );
alert(
    "myLib.isNumber(2000) => " + myLib.isNumber(2000) +
    "\nmyLib.isNumber(\"45\") => " + myLib.isNumber("45") );
alert(
    "myLib.isDate('20.08.2021') => " + myLib.isDate('20.08.2021') +
    "\nmyLib.isDate(new Date(2013, 13, 1)) => " + myLib.isDate(new Date(2013, 13, 1)) );  
alert(
    "myLib.isString('20.08.2021') => " + myLib.isString('20.08.2021') +
    "\nmyLib.isString({}) => " + myLib.isString({}) );     
alert(
    "myLib.isUndefined(undefined) => " + myLib.isUndefined(undefined) +
    "\nmyLib.isUndefined(null) => " + myLib.isUndefined(null) );  
alert(
    "myLib.isNull(0) => " + myLib.isNull(0) +
    "\nmyLib.isNull(null)) => " + myLib.isNull(null) );     
alert(
    "myLib.isFunction('function') => " + myLib.isFunction('function') +
    "\nmyLib.isFunction( () => prompt('How old are you?', '25') ) => " + myLib.isFunction( () => prompt('How old are you?', '25') ) );

alert('Second part of the task: work with arrays');
alert(
    'let array = [1, 3, \'5\', 7, 9 , 10];\n' +
    'myLib.first(array) => ' + myLib.first(array) +
    '\nmyLib.last(array) => ' + myLib.last(array) +
    '\nmyLib.skip(array, 3) => ' + myLib.skip(array, 3) +
    '\nmyLib.take(array, 5) => ' + myLib.take(array, 5) 
);

array = [1, 3, '5', 7, 9 , 10];
alert('Third part of the task: chaining');
alert(
    'let array = [1, 3, \'5\', 7, 9 , 10];\n' +
    'myLib.asChain(array).skip(2).take(3).array => ' + myLib.asChain(array).skip(2).take(3).array
);
