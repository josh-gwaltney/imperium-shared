/**
 *
 *
 */

export default class Stack{
    constructor(){
        this._data = [];
    }

    get length(){
        return this._data.length;
    }

    push(data){
        this._data.push(data);
    }

    pop(){
        return this._data.pop();
    }

    clear(){
        this._data = [];
    }
}