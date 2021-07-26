// console.log("hello")
const todos = []
let isRunning = true;

while (isRunning) {
    let choice = prompt("Enter what you would like to do today").toLowerCase().trim();
    if (choice === 'quit' || choice === 'q') {
        console.log("Ok! you have successfully exited the application")
        isRunning = false
    }
    else if (choice === 'new') {
        let newTask = prompt("Enter a todo to be added to your list")
        todos.push(newTask)
        console.log(`${newTask} was successfully added to the list`)
        console.log("*************************")
    }

    else if (choice === 'list') {
        console.log("Here are the list of things you would like to to do:")
        // for(let i=0; i<todos.length;i++){
        //     console.log(`${i}: ${todos[i]}`)
        // }
        if (todos.length === 0) {
            console.log("You have nothing in your list currently!")
        }
        for (let item of todos) {
            console.log(`${todos.indexOf(item)}: ${item}`)
        }
        console.log("*************************")
    }
    else if (choice === 'delete') {
        let deletedTodo = parseInt(prompt("Enter the number of todo to be deleted"))
        let isRemoved = false;

        while (isRemoved === false)
            if (!Number.isNaN(deletedTodo)) {
                if (deletedTodo > todos.length || deletedTodo < 0) {
                    deletedTodo = parseInt(prompt("Enter a valid number to delete"));
                }
                else {
                    let removedTodo = todos.splice(deletedTodo, 1);
                    console.log(`${removedTodo} was successfully removed from the list`)
                    isRemoved = true
                }
                console.log("*************************")
            }
            else {
                deletedTodo = parseInt(prompt("Enter a valid number to delete"));
            }


    }
    else {
        console.log("Enter a valid operation to perform!")
    }
}


