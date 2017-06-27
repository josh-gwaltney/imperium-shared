/**
 *
 *
 */

////////////////////////////////////////////////////////////////////////////////
//
////////////////////////////////////////////////////////////////////////////////

import GraphNode from './graph-node';

export default class Graph {
  constructor() {
    this._data = {};
    this._nodes = [];
  }

  addNode(data){
    let node = this._createNode();
    this._data[node.id] = data;
  }

  removeNode(){

  }

  addEdge(node1, node2, twoWay){

  }

  removeEdge(){

  }

  _createNode(){
    let id = Guid.create();
    let node = new GraphNode(id);
    this._nodes.push(node);
    return node;
  }

    //_findNode(id){
    //    this._nodes
    //}
}