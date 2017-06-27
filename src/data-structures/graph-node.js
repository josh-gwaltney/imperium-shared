/**
 *
 *
 */

////////////////////////////////////////////////////////////////////////////////
//
////////////////////////////////////////////////////////////////////////////////

import Node from './node';

export default class GraphNode extends Node {
    constructor(data){
        super(data);

        this._edges = [];
        this._vertices = [];
    }

    get data(){
        return this._data;
    }

}