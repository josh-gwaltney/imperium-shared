/**
 * Imperium 4X (Shared) - Component
 * ===
 *
 * @module component
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import Guid from '../util/guid';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
class Component {

  //////////////////////////////////////////////////////////////////////////////
  // Static Properties
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  _id;
  //_entityId;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////
  get id(){
    return this._id;
  }

  //get entityId(){
  //  return this._entityId;
  //}

  /**
   * @constructor
   * @param entityId
   * @param state
   */
  //constructor (entityId, state) {
  constructor (state) {
    if (state === null){
      throw new Error('Component state cannot be null');
    }

    this._id = Guid.create();
    //this._entityId = entityId;
  };

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  update(state){
    let self = this;
    for(let key in state){
      if(state.hasOwnProperty(key) && self.hasOwnProperty('_' + key)) {
        self['_' + key] = state[key];
      }
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////

}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Component;