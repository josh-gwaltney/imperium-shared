/**
 * Imperium 4X (Shared) - Hexagon
 * ===
 *
 * @module hexagon
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import Point2D from './point2d';
import Cube from './cube';

////////////////////////////////////////////////////////////////////////////////
// Definitions
///////////////////////////////////////////////////////////////////////////////
const DIRECTIONS = [
  [0, -1],
  [1, -1],
  [1, 0],
  [0, 1],
  [-1, 1],
  [-1, 0]
];

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
class Hexagon extends Point2D{
  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  constructor(x, y){
    super(x, y);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  findNeighbors(){
    let neighbors = [];
    for(let idx = 0; idx < 3; idx++){
      let direction = DIRECTIONS[idx];
      let x = this._x + direction[0];
      let y = this._y + direction[1];
      let hexagon = new Hexagon(x, y);
      neighbors.push(hexagon);
    }
    return neighbors;
  }

  toPixels(pt, size){
    let f0 = (3.0 / 2.0);
    let f1 = 0.0;
    let f2 = Math.sqrt(3.0) / 2.0;
    let f3 = Math.sqrt(3.0);
    let x = (f0 * pt.x + f1 * pt.y) * size;
    let y = (f2 * pt.x + f3 * pt.y) * size;
    return new Point2D(x, y);
  }

  toCube(){
    let z = this._y;
    let y = (this._x + z) * -1;
    return new Cube(this._x, y, z);
  }

  render(ctx){
    let size = 25;
    let center = this.toPixels(new Point2D(this._x, this._y), size);

    ctx.beginPath();
    for (let idx = 0; idx < 6; idx++){
      let offset = this._findCornerOffset(size, idx);
      let corner = new Point2D(center.x + offset.x, center.y + offset.y);
      ctx.lineTo(corner.x, corner.y);
    }
    ctx.closePath();
    ctx.strokeStyle = '#000000';
    ctx.stroke();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  _findCornerOffset(size, i){
    let start = 0.0;
    let angle = 2.0 * Math.PI * (i + start) / 6;
    let x = size * Math.cos(angle);
    let y = size * Math.sin(angle);

    return new Point2D(x, y);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  static hexagonDistance(a, b){
    if(!(a instanceof Hexagon) || !(b instanceof Hexagon)){
      throw new Error('input not of type Hexagon');
    }

    let cube1 = a.toCube();
    let cube2 = b.toCube();

    return Math.ceil((Math.abs(cube1.x - cube2.x) + Math.abs(cube1.y - cube2.y) + Math.abs(cube1.z - cube2.z)) / 2);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Hexagon;