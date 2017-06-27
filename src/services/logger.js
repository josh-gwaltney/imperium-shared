export default class Logger{
    constructor(){
        this._log = [];
    }

    success(msg){
        this._write('Success: ' + msg);
    }

    warning(msg){
        this._write('Warning: ' + msg);
    }

    debug(msg){
        this._write('Debug: ' + msg);
    }

    error(msg){
        this._write('Error: ' + msg);
    }

    clear(){
        this._log = [];
    }

    _write(msg){
        this._log.push(msg);
    }
}