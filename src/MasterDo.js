const { v4: UUID } = require('uuid');

module.exports = class MasterDo {
    /**
     * MasterDo constructor.
     * @param {Object}   params MasterDo parameters.
     * @param {Date}     params.deadline Deadline for this task.
     * @param {string}   params Short description of this task
     * @param {string}   params Any related link to this task.
     * @param {boolean}  params.inProgress The task is in progress or not.
     * @param {boolean}  params.done The task is done or not.
     */
    constructor({
        deadline = Date.now(),
        task,
        link = "",
        inProgress = false,
        done = false
    }) {
        this._id = task ? UUID() : null;
        if (this._id) {
            this.deadline = deadline;
            this.task = task;
            this.link = link;
            this.inProgress = inProgress;
            this.done = done;
        }
    }

    json() {
        return this._id ? {
            _id: this._id,
            deadline: this.deadline,
            task: this.task,
            link: this.link,
            inProgress: this.inProgress,
            done: this.done,
        } : {
            _id: null
        };
    }
}