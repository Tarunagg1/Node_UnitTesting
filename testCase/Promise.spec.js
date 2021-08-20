const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const chaiaspromised = require('chai-as-promised');
const Student = require('../controller/studentController');
chai.use(chaiaspromised);

const studentobj = new Student();



describe("------- Promise ---------------------",() => {
    it('check value function',() => {
        studentobj.dbData().then(res =>{
            expect(res).to.be.equal(10);
            done();
        })
    });

    it('check value function',() => {
        expect(studentobj.dbData()).to.eventually.equal(10);
    });

});



