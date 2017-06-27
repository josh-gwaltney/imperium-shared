/**
 *
 * ===
 *
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////

function isBool(x){
    return typeof x === 'boolean';
}

function isString(x){
    return typeof x === 'string';
}

function isNumber(x){
    return typeof x === 'number';
}

function isInt(x){
    if(isNumber(x)){
        return Number.isInteger(x);
    }
    return false;
}
function isObject(x){
    return typeof x === 'object';
}

function isFunction(x){
    return typeof x === 'function';
}

function isDefined(x){
    return (typeof x !== 'undefined');
}

function isNotNull(x){
    return (x !== null);
}

function isType(x, type){
    return (typeof x === type);
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////

export { isBool, isString, isNumber, isInt, isObject, isFunction, isDefined, isNotNull, isType };