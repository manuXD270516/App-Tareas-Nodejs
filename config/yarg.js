let optionsCreate = {
    description: {
        demand: true,
        alias: 'd',
        desc: 'Task Description'
    }
};
let optionsUpdate = {
    /*description: {
        demand: true,
        alias: 'd'
    },*/
    ...optionsCreate,
    complete: {
        demand: true,
        default:true,
        alias: 'c',
        desc: 'State: {Done, Pending} Complete Task'
    }
};


const argv = require('yargs')
    .command('create', 'Create task to do', optionsCreate)
    .command('update', 'update complete state of task to do', optionsUpdate)
    .command('delete', 'delete task to do', optionsCreate)
    .command('list', 'list all task to do', {})
    .help()
    .argv;

module.exports = {
    argv
};