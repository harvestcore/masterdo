const assert = require("assert");

const MasterDo = require('../src/MasterDo.js');

describe('MasterDo main tests', () => {
    describe('Create with params', () => {
        const tested = new MasterDo({
            task: 'Test creation'
        });

        it('should be created', () => {
            assert.notEqual(tested._id, null);
        });
    });

    describe('Create without params', () => {
        const tested = new MasterDo({});

        it('the id should be null', () => {
            assert.equal(tested.id, null);
        });

        it('should not have any other properties', () => {
            assert.equal(Object.keys(tested.json())[0], '_id');
        });
    });
});