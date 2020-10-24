const PouchDB = require('pouchdb');

const MasterDo = require('./MasterDo.js');

const DATABASE_NAME = 'masterdo';

class MasterDoManager {
    constructor() {
        this.db = new PouchDB(DATABASE_NAME);
    }

    add(data) {
        return this.db.put(new MasterDo({
            ...data
        }).json());
    }

    get(_id) {
        return this.db.get(_id);
    }

    update(_id, masterdo) {
        return this.db.put({
            _id,
            ...masterdo
        });
    }

    remove(id) {
        return this.db.get(id).then(doc => {
            this.db.remove(doc);
        });
    }

    getAll() {
        return this.db.allDocs();
    }
}

module.exports = new MasterDoManager();
