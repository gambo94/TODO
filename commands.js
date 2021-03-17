const add = (title) => {
    console.log(`adding task: ${title}`)
}

const update = (id, status) => {
    console.log(`updating task number ${id}. Updated status: ${status}`)
}

const list = () => {
    console.log(`listing all tasks`)
}

module.exports = {
    add,
    update,
    list
}