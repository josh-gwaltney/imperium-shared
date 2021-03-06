/**
 * Imperium 4X (Shared) - Point2D
 * ===
 *
 * @module point2D
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
class Point2D {
  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  _x;
  _y;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  get x(){
    return this._x;
  }

  get y(){
    return this._y;
  }

  constructor(x, y){
    this._x = x;
    this._y = y;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  add(p2){
    let x = this._x + p2.x;
    let y = this._y + p2.y;
    return new Point2D(x, y);
  }

  subtract(p2){
    let x = this._x - p2.x;
    let y = this._y + p2.y;
    return new Point2D(x, y);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  static create(x, y){
    return new Point2D(x, y);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Point2D;