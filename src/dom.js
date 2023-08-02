import editImage from './images/pencil.svg'
import deleteImage from './images/delete.svg'

function initialisePage() {

    const container = createDiv('div', 'container')
    const header = createDiv('div', 'header')
    const content = createDiv('div', 'content')

    const sidebar = createDiv('div', null, 'side-bar')
    const contentBox = createDiv('div', null, 'content-box')
    content.append(sidebar, contentBox)

    const footer = createDiv('div', 'footer')
    // 
    container.append(header, content, footer)
    document.body.appendChild(container)

    initialiseText({ container, header, content, sidebar, contentBox, footer })
    initialiseForm({ container })
    const addTodoBtn = createAddBtn(contentBox, 'todo')
    const addProjectBtn = createAddBtn(sidebar, 'project')
}

function initialiseText({ header, sidebar, contentBox, footer }) {
    header.textContent = 'To-do List'
    sidebar.textContent = 'sidebar'
    contentBox.textContent = 'contentBox'
    footer.textContent = 'copyright @2023 YC-Wong66'
}

function createAddBtn(parentBox, type) {
    const buttonEl = document.createElement('button')
    buttonEl.textContent = '+'
    parentBox.append(buttonEl)
    if (type == 'todo') {
        buttonEl.id = 'addTodoBtn'
    } else if (type == 'project') {
        buttonEl.id = 'addProjectBtn'
    }
    return buttonEl
}

function createDiv(type, id, className) {
    // helper function
    if (!type) return console.log('error type')
    let newElement = document.createElement(type)
    if (id) newElement.id = id
    if (className) newElement.classList.add(className)

    return newElement
}

function setAttributes(el, attrs) {
    // helper function
    Object.keys(attrs).forEach(key => el.setAttribute(key, attrs[key]));
}

function displayController(projectList) {
    // re-render sidebar
    const sidebar = document.querySelector('.side-bar')
    sidebar.innerHTML = ''

    const title = createDiv('h2')
    title.textContent = 'Projects'
    sidebar.appendChild(title)

    projectList.projectArr.forEach(item => {
        const newEl = createDiv('div', null, 'project-card')
        newEl.textContent = item.name
        sidebar.appendChild(newEl)
    })

    const addProjectBtn = createAddBtn(sidebar, 'project')

    // re-render content-box
    const contentBox = document.querySelector('.content-box')
    contentBox.innerHTML = ''

    // project title
    if (projectList.projectArr.length <= 0) return createAddBtn(contentBox, 'todo')
    let index = projectList.selectedIndex
    if (!index || index > projectList.projectArr.length - 1) index = 0 // error prevent
    const selectedProject = projectList.projectArr[index] // by default, select project#1
    // console.log(projectList)
    const contentBoxTitle = createDiv('h1')
    const deleteIcon = createDiv('img')
    contentBoxTitle.setAttribute('project-index', index)
    contentBoxTitle.textContent = selectedProject.name
    deleteIcon.src = deleteImage
    deleteIcon.classList.add('icon')

    contentBoxTitle.append(deleteIcon)
    contentBox.append(contentBoxTitle)
    // todo card
    selectedProject.todoArray.forEach((item, i) => {
        // console.log(item)
        const newEl = createDiv('div', null, 'todo-card')
        const checkBox = createDiv('input')
        const cardTitle = createDiv('p')
        const cardDate = createDiv('p')
        const editIcon = createDiv('img')
        const deleteIcon = createDiv('img')
        const priorityCard = createDiv('p')
        newEl.setAttribute('todo-index', i)
        checkBox.setAttribute('type', 'checkbox')
        checkBox.checked = item.isChecked
        cardTitle.textContent = item.title
        cardDate.textContent = item.dueDate
        editIcon.src = editImage
        editIcon.classList.add('icon')
        deleteIcon.src = deleteImage
        deleteIcon.classList.add('icon')
        priorityCard.textContent = item.priority
        priorityCard.classList.add(`priority-${item.priority}`)
        if(item.isChecked) newEl.classList.add('cross-out')

        newEl.append(checkBox, cardTitle, cardDate, editIcon, deleteIcon, priorityCard)
        contentBox.appendChild(newEl)
    })


    const addTodoBtn = createAddBtn(contentBox, 'todo')

}

function initialiseForm({ container }) {
    // project form
    const createProjectForm = () => {
        const form = createDiv('form', 'projectForm')
        const inputArea = createDiv('input', null)
        const addButton = createDiv('div', null, 'add')
        const cancelButton = createDiv('div', null, 'cancel')
        inputArea.setAttribute('type', 'text')
        addButton.textContent = 'Add'
        cancelButton.textContent = 'Cancel'
        form.append(inputArea, addButton, cancelButton)
        form.style.visibility = 'hidden'
        document.body.appendChild(form)
    }
    createProjectForm()

    // todo form
    const createTodoForm = () => {
        const form = createDiv('form', 'todoForm')
        const label1 = createDiv('div')
        const label2 = createDiv('div')
        const label3 = createDiv('div')
        const label4 = createDiv('div')
        label1.textContent = 'to-do : '
        label2.textContent = 'details : '
        label3.textContent = 'due date : '
        label4.textContent = 'priority : '
        const input1 = createDiv('input')
        const input2 = createDiv('input')
        const input3 = createDiv('input')
        const input4 = createDiv('select')
        const dropDownItem1 = createDiv('option')
        const dropDownItem2 = createDiv('option')
        setAttributes(input1, { type: 'text', required: 'true' })
        setAttributes(input2, { type: 'text', required: 'true' })
        setAttributes(input3, { type: 'date', required: 'true' })
        dropDownItem1.textContent = 'low'
        dropDownItem2.textContent = 'high'
        input4.add(dropDownItem1)
        input4.add(dropDownItem2)

        const addButton = createDiv('button', null, 'add')
        const cancelButton = createDiv('div', null, 'cancel')
        setAttributes(addButton, { type: 'submit' })
        addButton.textContent = 'Add'
        cancelButton.textContent = 'Cancel'
        form.append(
            label1, input1,
            label2, input2,
            label3, input3,
            label4, input4,
            addButton, cancelButton
        )
        form.style.visibility = 'hidden'
        document.body.appendChild(form)
    }
    createTodoForm()

}

function showAddProjectForm() {
    document.querySelector('#container').classList.toggle('inactive')
    document.querySelector('#projectForm').style.visibility = 'visible'
    document.querySelector('#todoForm').style.visibility = 'hidden'
}
function closeAddProjectForm() {
    document.querySelector('#container').classList.toggle('inactive')
    document.querySelector('#projectForm').style.visibility = 'hidden'
}
function showAddTodoForm(type) {
    document.querySelector('#container').classList.toggle('inactive')
    document.querySelector('#todoForm').style.visibility = 'visible'
    document.querySelector('#projectForm').style.visibility = 'hidden'

    let x = document.querySelector('#todoForm .add')
    x.textContent = type == 'edit' ? 'Edit' : 'Add'
}
function closeAddTodoForm() {
    document.querySelector('#container').classList.toggle('inactive')
    document.querySelector('#todoForm').style.visibility = 'hidden'
}

export {
    initialisePage, displayController, showAddProjectForm,
    closeAddProjectForm, showAddTodoForm, closeAddTodoForm
}