export default class Client {
    constructor(){

    }

    load(f){
        let text;
        let rawFile = new XMLHttpRequest();
        rawFile.open('GET', f, false);
        rawFile.onreadystatechange = function(){
            if(rawFile.readyState === 4){
                if(rawFile.status === 200 || rawFile.status == 0){
                    let res = rawFile.responseText;
                    text = res;
                }
            }
        };
        rawFile.send();
        return text;
    }

    makeRequest(method, url){
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.onload = function() {
                if (this.status >= 200 && this.status < 300) {
                    resolve(xhr.response)
                } else {
                    reject({
                        status: this.status,
                        statusText: xhr.statusText
                    });
                }
            };
            xhr.onerror = function(){
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            };
            xhr.send();
        });
    }
}