/**
 * Imperium 4X (Shared) - State
 * ===
 *
 * @module state
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
class State {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  _id;
  _entityManager;
  _componentManager;
  _assemblageManager;
  _entityComponentTable;
  _componentTypeTable;


  // _entityComponentData - dictionary - key: entity id, value: array of components - determine if by id or type
  // _componentData - dictionary - key: component id, value: entity id


  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////
  get id(){
    return this._id;
  }

  constructor(entityManager, componentManager, assemblageManager){
    this._id = Guid.create();
    this._entityManager = entityManager || {};
    this._componentManager = componentManager || {};
    this._assemblageManager = assemblageManager || {};
    this._entityComponentTable = [];
    this._componentTypeTable = [];

  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  //createEntity(template, settings){
  createEntity(componentData){
    //let assemblage = this._assemblageManager.findTemplate(template);
    let entityId = this._entityManager.createEntity();
    if(!this._hasEntity(id)){
      this._entityComponentTable[entityId] = [];
    }
    //componentData.forEach(component => {
    //  let id = this._componentManager.create();
    //});
  }

  findEntity(id){

  }

  updateEntity(id, newState){

  }

  removeEntity(id){
    return this._entityManager.removeEntity(id);
  }

  findComponent(id){

  }

  findComponentsByType(type){

  }

  findComponentsForEntity(id){

  }

  removeComponent(id){
    return this._componentManager.removeComponent(id);
  }

  addComponentToEntity(entityId, template, state){
    let componentId = this._componentManager.createComponent(template, state);

  }

  print(){
    console.log(JSON.stringify(this._entityComponentTable));
    console.log(JSON.stringify(this._componentTypeTable));
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  _hasEntity(id){
    return id in this._entityComponentTable;
  }

}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default State;