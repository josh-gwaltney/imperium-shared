/**
 *
 *
 */

export default class Node {
    constructor(data){
        this._data = data || null;
    }

    get data(){
        return this._data;
    }

    set data(data){
        this._data = data;
    }
}