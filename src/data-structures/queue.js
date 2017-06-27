/**
 *
 *
 */

////////////////////////////////////////////////////////////////////////////////
//
////////////////////////////////////////////////////////////////////////////////

export default class Queue {
    constructor(){
        this._data = [];
    }

    get length(){
        return this._data.length;
    }

    enqueue(elem){
        this._data.push(elem);
    }

    dequeue(){
        return this._data.shift();
    }

    peek(){
        return this._data[0];
    }

    clear(){
        this._data = [];
    }
}
