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
    
    // below not used. maybe for future
    moveItemToNewProject(index, Project) {
        let item = this.todoArray[index]
        this.removeTodo(index)
        Project.addTodo(item)
    }
}

class Todo {
    constructor({title, description, dueDate, priority, isChecked}) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.isChecked = isChecked;
    }
    edit({title, description, dueDate, priority}) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }
    toggleChecked(){
        this.isChecked = ! this.isChecked 
    }
    // below not used. maybe for future
    changePriority(newValue) {
        this.priortity = newValue
    }
}

export { ProjectList, Project, Todo }
