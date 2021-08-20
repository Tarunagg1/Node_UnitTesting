const chai = require('chai');
const expect = chai.expect;
const chaihttp = require('chai-http');

const Student = require('../controller/studentController');

chai.use(chaihttp);

const studentobj = new Student();


describe('--------- Api testing ------------',() => {
    it('get user',() => {
        chai.request('https://jsonplaceholder.typicode.com')
        .get('/posts')
        .end((err,response) => {
            expect(response.status).to.be.equal(200)
            expect(response.body[0]).to.have.all.keys('userId','id','title','body');
        })
    })
})





