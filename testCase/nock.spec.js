const chai = require('chai');
const expect = chai.expect;
const nock = require('nock');

const Student = require('../controller/studentController');

const studentobj = new Student();



describe('----------- Mock Api Test ----------------',() => {
    it('api test',()=>{
        let obj = {status:'ok',status:200,data:[]};
        const apihit = nock('https://jsonplaceholder.typicode.com')
        .get('/posts')
        .reply(200,obj)

        studentobj.thirdPartyApi()
        .then((record) => {
            expect(record).to.be.eql(obj);
            done();
        })
        .catch(err => {
            done(new Error('Error: ',err))
        })
    })
})





