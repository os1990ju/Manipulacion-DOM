const btn = document.querySelector('[data-form-btn]'); //data atributes
const createTask = (e)=>{
    e.preventDefault();
    const input = document.querySelector('[data-input-task]')
    console.log(input.value);
    input.value='';
}

btn.addEventListener('click', createTask)