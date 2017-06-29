/**
 * Imperium 4X (Shared) - Graph
 * ===
 *
 * @module graph
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import GraphNode from './graph-node';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
class Graph {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  _data;
  _nodes;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  constructor() {
    this._data = {};
    this._nodes = [];
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
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

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
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

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Graph;