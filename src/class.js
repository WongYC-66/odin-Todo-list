class ProjectList {
    constructor(name) {
        this.projectArr = []
        this.name = name
        this.selectedIndex = null
    }
    add(project) {
        this.projectArr.push(project)
    }
    remove(index) {
        this.projectArr.splice(index, 1)
    }
    getLastIndex(){
        return this.projectArr.length - 1
    }
}

class Project {
    constructor(name) {
        this.todoArray = []
        this.name = name
    }
    addTodo(item) {
        this.todoArray.push(item)
    }
    removeTodo(index) {
        this.todoArray.splice(index, 1)
    }
    moveItemToNewProject(index, Project) {
        let item = this.todoArray[index]
        this.removeTodo(index)
        Project.addTodo(item)
    }
}

class Todo {
    constructor({title, description, dueDate, priority}) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }
    changePriority(newValue) {
        this.priortity = newValue
    }
    edit({title, description, dueDate, priority}) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }
}

export { ProjectList, Project, Todo }
