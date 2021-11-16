(function(global) {

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
        }
        _myLibraryObject.take = function(arr, number) {
            return arr.splice(0, number);
        }
       

        return _myLibraryObject;
    }

    if (typeof(global.myLib) === 'undefined') {
        global.myLib = myLibrary();
    }

})(global); 


let array = [1, 3, '5'];
console.log( myLib.isFunction(myLib.isArray) );
console.log( myLib.last(['1', '2', '3']) );
console.log( myLib.skip(array, 2).length);
