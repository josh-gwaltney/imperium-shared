/**
 * Imperium 4X (Shared) - Engine
 * ===
 *
 * @module engine
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import { timestamp } from '../util/timestamp';
import EntityManager from './entity-manager';
import ComponentManager from './component-manager';
import AssemblageManager from './assemblage-manager';
import StateManager from './state-manager';
import SystemManager from './system-manager';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
class Engine {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  _messageBus;
  _stateManager;
  _systemManager;
  _frame;
  _lastTick;
  _tickLength;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  constructor(messageBus, stateManager, systemManager){
    this._messageBus = messageBus;
    this._stateManager = stateManager;
    this._systemManager = systemManager;
    this._frame = null;
    this._lastTick = null;
    this._tickLength = 50;

    this._init();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  start(){
    if(this._frame){
        window.cancelAnimationFrame(this._frame);
    }
    this._lastTick = timestamp();
    this._tick();
  }

  stop(){
    if(this._frame){
      window.cancelAnimationFrame(this._frame);
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  _init(){

  }

  _tick(){
    let now = timestamp();
    this._frame = window.requestAnimationFrame(() => this._tick());
    let delta = now - this._lastTick;
    this._update(delta);
    this._render(delta);
    this._lastTick = now;
  }

  _update(dt){
    //let state = this._stateManager.state;
    //this._systemManager.update(state);
  }

  _render(dt){
    //let state = this._stateManager.state;
    //this._messageBus.publish({name: 'RENDER', body: state});
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Engine;