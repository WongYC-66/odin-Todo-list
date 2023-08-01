import { ProjectList, Project, Todo } from './class'
import {
    initialisePage, displayController, showAddProjectForm,
    closeAddProjectForm, showAddTodoForm, closeAddTodoForm
} from './dom'
import './style.css'


const projectList = new ProjectList('myNewProjectList')
const defaultProject = new Project('default')
const defaultTodoItem = new Todo({ title: 'todo Item #1', description: 'no descrption', dueDate: '2023-08-21', priority: 'low' })
let currentProject = defaultProject
let editMode = { mode : false, editingTodo : null}
defaultProject.addTodo(defaultTodoItem)
projectList.add(defaultProject)

initialisePage()
renderPage(projectList)


//event listener
const confirmAddProject = document.querySelector('#projectForm .add')
const cancelAddProject = document.querySelector('#projectForm .cancel')
const confirmAddTodo = document.querySelector('#todoForm .add')
const cancelAddTodo = document.querySelector('#todoForm .cancel')

confirmAddProject.addEventListener('click', () => {
    closeAddProjectForm()
    let value = document.querySelector('#projectForm input').value
    if (value) {
        const newProject = new Project(value)
        projectList.add(newProject)
        renderPage(projectList)
    }
})
cancelAddProject.addEventListener('click', () => {
    closeAddProjectForm()
})
confirmAddTodo.parentNode.addEventListener('submit', e => {
    e.preventDefault()
    closeAddTodoForm()
    const form = document.querySelector('#todoForm')
    const inputArr = form.querySelectorAll('input')
    let value = {
        title: inputArr[0].value,
        description: inputArr[1].value,
        dueDate: inputArr[2].value,
        priority: form.querySelector('select').value
    }
    // console.log(newTodo)
    if( editMode.mode ){
        editMode.mode  = false  // update Todo
        console.log(editMode.editingTodo)
        editMode.editingTodo.edit(value)
        editMode.editingTodo = null
    } else {
        const newTodo = new Todo(value)
        currentProject.addTodo(newTodo) // add newTodo
    }
    renderPage(projectList)
})
cancelAddTodo.addEventListener('click', () => {
    closeAddTodoForm()
})

// 
function activateButtons() {
    // add project/ todo btn
    const addProjectBtn = document.querySelector('#addProjectBtn')
    const addTodoBtn = document.querySelector('#addTodoBtn')
    addProjectBtn.addEventListener('click', () => {
        showAddProjectForm()
    })
    addTodoBtn.addEventListener('click', () => {
        showAddTodoForm()
    })

    // delete icon
    const projectDeleteIcon = document.querySelector('.content-box h1 .icon')
    if (!projectDeleteIcon) return
    projectDeleteIcon.addEventListener('click', e => {
        let projectIndex = e.target.parentNode.getAttribute('project-index')
        projectList.remove(projectIndex)
        renderPage(projectList)
    })

    // delete to-do icon
    document.querySelectorAll('.todo-card .icon:nth-of-type(2)').forEach(x => {
        x.addEventListener('click', () => {
            let index = x.parentNode.getAttribute('todo-index')
            currentProject.removeTodo(index)
            renderPage(projectList)
        })
    })

    // expand/edit Todo Card
    document.querySelectorAll('.todo-card .icon:nth-of-type(1)').forEach(x => {
        x.addEventListener('click', () => {
            editMode.mode = true
            let index = x.parentNode.getAttribute('todo-index')
            editMode.editingTodo = currentProject.todoArray[index]
            // console.log(index, editMode)
            showAddTodoForm('edit')
        })
    })

    // switch project
    document.querySelectorAll('.project-card').forEach((x, i) => {
        x.addEventListener('click', () => {
            projectList.selectedIndex = i
            currentProject = projectList.projectArr[i]
            renderPage(projectList)
        })
    })

}

function renderPage(projectList) {
    displayController(projectList)
    activateButtons()
}




