const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

let student = chai.expect;

const Student = require('../controller/studentController');



const studentobj = new Student();


describe("------- Spay ---------------------",() => {
    it('test user function',()=>{
        expect(studentobj.userId()).to.be.equal(12);
    })
    
    it('calling of getInfo function count',()=>{
        let spyObj = sinon.spy(studentobj, 'getInfo');
        studentobj.home();
        expect(spyObj.calledOnce).to.be.true;
    });

    it('Check arguments',()=>{
        let spyObj = sinon.spy(studentobj, 'getInfo');
        studentobj.home();
        expect(spyObj.calledOnce).to.be.true;
    });    
});












