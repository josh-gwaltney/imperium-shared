/**
 * Imperium 4X (Shared) - Component Manager
 * ===
 *
 * @module componentManager
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import Component from './component';

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * @memberof module:engine
 */
class ComponentManager {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  _templates;
  _components;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  constructor(config){
    this._templates = {};
    this._components = [];
    this._init(config);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  createComponent(templateId, state){
    let template = this._findTemplate(templateId);
    let component = new template.constructor(template.defaults);
    if(state){
      component.update(state);
    }
    let id = component.id;
    this._components.push(component);
    return id;
  }

  findComponent(id){
    this._components.find((component) => {
      return component.id === id;
    });
  }

  findComponentsByType(type){
    let template = this._findTemplate(type);
    let constructor = template.constructor;
    let components = [];
    this._components.find(x => {
      if(x instanceof constructor === true){
        components.push(x);
      }
    });
    return components;
  }

  removeComponent(id){
    let component = this.findComponent(id);
    if (component) {
      let idx = this._components.indexOf(component);
      this._components.splice(idx, 0);
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  _init(config){
    config.forEach(component => {
      this._addTemplate(component);
    });
  }

  _addTemplate(template){
    let id = template.id;
    if(!this._templates[id]){
     this._templates[id] = {
       constructor: template.constructor,
       defaults: template.defaults
     };
    }
  }

  _findTemplate(id){
    if(!this._templates[id]){
      throw new Error('Component template ' + id + ' does not exit');
    }
    return this._templates[id];
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default ComponentManager;