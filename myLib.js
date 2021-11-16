(function(global) {

    function myLibrary() {
        let _myLibraryObject = {};
        let stringRepresentation = Object.prototype.toString;

        //First part of the task
        _myLibraryObject.isArray = (obj) =>
            stringRepresentation.call(obj) === '[object Array]';

        _myLibraryObject.isBoolean = (obj) =>
            stringRepresentation.call(obj) === '[object Boolean]';

        _myLibraryObject.isNumber = (obj) =>
            stringRepresentation.call(obj) === '[object Number]';

        _myLibraryObject.isDate = (obj) =>
            stringRepresentation.call(obj) === '[object Date]';

        _myLibraryObject.isString = (obj) =>
            stringRepresentation.call(obj) === '[object String]';
        
        _myLibraryObject.isUndefined = (obj) =>
            stringRepresentation.call(obj) === '[object Undefined]';

        _myLibraryObject.isNull = (obj) =>
            stringRepresentation.call(obj) === '[object Null]'; 

        _myLibraryObject.isFunction = (obj) =>
            stringRepresentation.call(obj) === '[object Function]';
            
        return _myLibraryObject;
    }

    if (typeof(global.myLib) === 'undefined') {
        global.myLib = myLibrary();
    }

})(global); 

console.log( myLib.isFunction(myLib.isArray));