const fs = require('fs');

const colors = require('colors');

let listToDo = [];

const create = (description) => {
    loadDb();

    let toDo = {
        description,
        complete: false
    };
    listToDo.push(toDo);

    saveDb();
    return listToDo;
}

const getAllTask = () => {
    loadDb();
    return listToDo;
}

const update = (description, complete = true) => {

    loadDb();


    let index = listToDo.findIndex(task => task.description === description);
    if (index != -1) {
        listToDo[index].complete = complete;
        saveDb();
    }
    return index != -1;
}

const remove = (description) => {
    loadDb();
    let index = listToDo.findIndex(task => task.description === description);
    let exists = index != -1;
    console.log(index);
    if (exists) {
        listToDo.splice(index, 1);
        saveDb();
    } 
    return exists;
}

const removeV2 = (description) => {
    loadDb();
    let filterTasks = listToDo.filter(task => task.description !== description);
    let removeSucessfully = filterTasks.length == listToDo.length;
    listToDo = filterTasks; 
    saveDb();
    return removeSucessfully;
}

const loadDb = () => {
    try {
        listToDo = require('../db/data.json');
    } catch (error) {
        listToDo = {};
    }

    console.log(listToDo);
}

const saveDb = () => {
    let dataJson = JSON.stringify(listToDo);
    fs.writeFile('db/data.json', dataJson, (err) => {
        if (err) {
            throw new Error('Not save data: ', err);
        }
    })
}

module.exports = {
    create,
    update,
    remove,
    removeV2,
    getAllTask
};