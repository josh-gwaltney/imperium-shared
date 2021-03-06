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
  _vertices;
  _edges;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  constructor() {
    this._vertices = {};
    this._edges = [];
    this._data = {};
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  addVertex(data){
    let vertex = new GraphNode(data);
    let id = vertex.id;
    this._vertices[id] = vertex;
    this._edges[id] = [];
    return id;
  }

  removeVertex(v){
    const IDX = this._vertices.indexOf(v);
    if(IDX){
      this._vertices.splice(IDX, 1);
    }
    while(this._edges[v].length){
      const ADJ = this._edges[v].pop();
      this.removeEdge(ADJ, v);
    }
  }

  addEdge(v1, v2){
    this._edges[v1].push(v2);
    console.log(this._edges[v1][0]);
    this._edges[v2].push(v1);
    console.log(this._edges[v2][0]);
  }

  removeEdge(v1, v2){
    const IDX1 = this._edges[v1] ? this._edges[v1].indexOf(v2) : -1;
    const IDX2 = this._edges[v2] ? this._edges[v2].indexOf(v1) : -1;
    if(IDX1){
      this._edges[v1].splice(IDX1, 1);
    }

    if(IDX2){
      this._edges[v2].splice(IDX2, 1);
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  _hasEdge(v1, v2){
    return this._edges[v1].indexOf(v2);
  }

  _hasVertex(id){
    return id in this._vertices;
  }

  _addEdge(v1, v2){
    if(this._hasVertex(v1) && this._hasVertex(v2)){

    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Graph;