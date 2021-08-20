const chai = require('chai');
const assert = chai.assert;
const should = chai.should()
const expect = chai.expect;


describe('Aspect check', () => {
    let username = "tarun";
    let mylist = [1, 2];

    it('check string', () => {
        assert.typeOf(username, 'string');
    })

    it('check equal string', () => {
        assert.equal(username, 'tarun');
    })

    it('check length', () => {
        assert.lengthOf(mylist, 2);
    })
})




describe('should check', () => {
    let username = "tarun";
    let mylist = [1, 2];

    it('check string', () => {
        username.should.be.a('string');
    })
    it('check equal string', () => {
        username.should.be.equal("tarun");
    })

    it('check length', () => {
        mylist.should.be.lengthOf(2);
    })

});

describe('expect check', () => {
    let username = "tarun";
    let mylist = [1, 2];
    let myobj = {
        item: [1, 2, 3],
        item2: [
            {
                name: "tarun", age: 21
            },
            {
                name: "arun", age: 20
            }
        ],
        name: "tarun",
        address: {
            place: "delhi", pincode: "110086",
            phone:["1234567899","9876543211"]
        }
    };

    it('check string', () => {
        expect(username).to.be.a('string');
    })
    it('check equal string', () => {
        expect(username).to.equal('tarun');
    })

    it('check length', () => {
        expect(mylist).to.lengthOf(2);
    })

    it('Object length test', () => {
        expect(myobj).to.have.property('item2').with.lengthOf(2)
    })

    it('check Object keys', () => {
        expect(myobj).to.have.all.keys("item","name","item2","address");
    })

    it('Check address in object', () => {
        expect(myobj).to.have.nested.property("address.phone").length(2)
    })

    it('Check place', () => {
        expect(myobj).to.have.nested.include({'address.place':"delhi"});
    })
    

})

















































