/**
 *
 *
 */

import Node from './node';

export default class BinaryNode extends Node {
    constructor(data, left, right){
        super(data);
        this._left = left instanceof BinaryNode ? left : new BinaryNode(left);
        this._right = right instanceof BinaryNode ? right : new BinaryNode(right);

    }

    get left(){
        return this._left;
    }

    get right(){
        return this._right;
    }

    set left(data){
        let node = data instanceof BinaryNode ? data : new BinaryNode(data);
        this._left = node;
    }

    set right(data){
        let node = data instanceof BinaryNode ? data : new BinaryNode(data);
        this._right = node;
    }
}