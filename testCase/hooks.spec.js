const chai = require('chai');
const expect = chai.expect;

const Student = require('../controller/studentController');

const studentobj = new Student();



describe('handling hooks', () => {
    after(() => {
        console.log('---last---');
    });

    before(() => {
        console.log('---first---');

    });

    afterEach(() => {
        console.log('---after every---');

    })

    beforeEach(() => {
        console.log('---before every---');
    });

    let data = "tarun";

    it('check string', () => {
        expect(data).to.be.a('string');
    })

    it('validating string', () => {
        expect(data).to.be.equal("tarun");
    })
})

describe('handling 2', () => {
    let data = "tarun";

    it('check string', () => {
        expect(data).to.be.a('string');
    })

    it('validating string', () => {
        expect(data).to.be.equal("tarun");
    })
})






















