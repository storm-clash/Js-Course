const todoList = [];

function practice1() {
   

    const valor = document.querySelector('.js-practice1').value;
    todoList.push(valor);
    console.log(todoList);

    document.querySelector('.js-practice1').value = '';
}

function practice2() {

   
    const input = document.querySelector('.js-practice2');

    const valor = input.value;

    todoList.push(valor);
    renderTodoList();
    input.value = '';
}
function renderTodoList() {
    let todoListHTML = '';
    for(let i = 0; i < todoList.length; i++){
        const todo = todoList[i];
        const html = `
        <p>
        ${todo} 
        <button onClick="
            todoList.splice(${i}, 1);
            renderTodoList();
        ">Delete</button>
        </p>
        
        `;
        todoListHTML+= html;
        
        
    }
    document.querySelector('.js-show-list').innerHTML = todoListHTML;
}

function practice3() {
    const inputTodo = document.querySelector('.js-dateTodo');
    const inputDate = document.querySelector('.js-date');

    const short = inputTodo.value;
    const date = inputDate.value;

    todoList.push({
        short,
        date
    });
    renderTodoList2();
    inputTodo.value = '';
    inputDate.value = '';

}
function renderTodoList2() {
    let todoListHTML = '';
    for(let i = 0; i < todoList.length; i++){
        const todo = todoList[i];
       // const short = todo.short;
       // const date = todo.date;
        const {short, date} = todo;
        const html = `
        <div>${short}</div>
        <div>${date}</div>
        <button onClick="
            todoList.splice(${i}, 1);
            renderTodoList2();
        " class="delete-button">Delete</button>
        
        
        `;
        todoListHTML+= html;
        
        
    }
    document.querySelector('.js-show-list2').innerHTML = todoListHTML;
}