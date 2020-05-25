const {
    argv
} = require('./config/yarg');
const toDo = require('./to-do/to-do');
const colors = require('colors/safe');
// Gestion de Tareas por hacer

//console.log(argv);



let command = argv._[0]; // obtener el comando aplicado

switch (command) {
    case 'create':
        let {
            description
        } = argv;
        toDo.create(description);
        break;
    case 'list':
        let tasks = toDo.getAllTask();
        tasks.forEach(task => {
            console.log(colors.green('=========== TO DO ============='));
            console.log(`Desciption: ${task.description}`);
            console.log(`Complete: ${task.complete}`);
            console.log(colors.green('==============================='));

        });
        break;
    case 'update':
        toDo.update(argv.description, argv.complete);
        break;
    case 'delete':
        // toDo.remove(argv.description);
        toDo.removeV2(argv.description);
        break;
    default:
        break;
}