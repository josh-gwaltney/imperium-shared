/**
 * Imperium 4X (Shared) - Registry
 * ===
 *
 * @module registry
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
class Registry {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  _dependencies;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////
  constructor() {
    this._dependencies = {};
  }

  register(nm, fn) {
    if (this._dependencies[nm] === undefined) {
      this._dependencies[nm] = fn;
    }
  }

  resolve(nm) {
    var fn = this._dependencies[nm];
    var FN_ARGS = /^class|function\s*[^\(]*\(\s*([^\)]*)\)/m;

    var text = fn.toString();
    if (text.match(FN_ARGS)[1] !== '') {
      let deps = [];
      let args = text.match(FN_ARGS)[1].split(', ');
      for (let idx = 0; idx < args.length; idx++) {
        deps.push(this.resolve(args[idx]));
      }
      return new fn(...deps);
    } else {
      return new fn();
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Registry;