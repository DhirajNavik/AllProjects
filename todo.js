let todoList=JSON.parse(localStorage.getItem('todoLists'))||{
    goalName:'example',dueDate:'22-12-2000'
}




enteringTodoonPage();

function enteringTodoonPage(){
    let todohtml=''
    for(let i=0;i<todoList.length;i++){
        const todoObject=todoList[i];
        const{ goalName,dueDate}=todoObject;
        const html=`
        <div>${goalName}</div>
        <div>${dueDate}</div>
        <button onclick="
        todoList.splice(${i},1);
        enteringTodoonPage(); ">delete</button>`;
        todohtml+=html;
    }
    document.querySelector('.JS-addTodoLIST').innerHTML=todohtml;

    localStorage.setItem('todoLists',JSON.stringify(todoList));

}


const input=()=>{
    const inputButton = document.querySelector('.JS-todoInput');
    const DateButton = document.querySelector('.JS-todoDate');
    
    const goalName = inputButton.value;
    const dueDate = DateButton.value;
    
    todoList.push({
        goalName,dueDate
    });
    
    console.log(todoList);

    inputButton.value='';

    enteringTodoonPage();
    
}

document.querySelector('.JS-todoAddButton').addEventListener('click',input);





















