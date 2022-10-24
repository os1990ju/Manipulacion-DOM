(()=>{
const btn = document.querySelector('[data-form-btn]'); //data atributes

const createTask = (e)=>{
    
    e.preventDefault();
    const input = document.querySelector('[data-input-task]');
    const value = input.value;
    const list = document.querySelector('[data-list]')
    // se crea span con su value
    const titleTask = document.createElement('span');
    titleTask.className = 'task';
    titleTask.innerHTML=value;
    const task = document.createElement('li');
    task.classList.add('card');
    input.value='';
    const taskContent = document.createElement('div');
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask)
    task.appendChild(taskContent)
    list.appendChild(task)  
}
//creacion de check item
const checkComplete = ()=>{
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click',completeTask)
    return i;
}

const completeTask = (e)=>{
    const element = e.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
}

btn.addEventListener('click', createTask)
})() //IIEF funcion auto invocada para evitar que accedan a funciones