const axios = require('axios');


class Student {
    constructor() { }

    home(type) {
        let data = this.getInfo(type, 1);
        return 5;
    }

    userId() {
        return 12;
    }

    getInfo(type, status) {
        return type;
    }

    getExternal(v) {
        return v + 1;
    }


    getInternal(v) {
        return v - 1;
    }

    dbData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(10)
            }, 1500);
        })
    }

    thirdPartyApi(){
        return new Promise((resolve, reject) => {
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                resolve(response);
            })
            .catch(err => {
                reject(err);
            })
        })
    }
}




module.exports = Student;







