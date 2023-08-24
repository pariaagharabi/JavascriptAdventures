// JavaScript Code:
class CustomStack {
    #size;
    #buffer;

    constructor(size) {
        this.#size = size;
        this.#buffer = [];
    }

    push(val) {
        if (this.#buffer.length >= this.#size) {
            throw new Error("Stack is full!");
        }

        this.#buffer.push(val);
    }

    pop() {
        if (this.#buffer.length === 0) {
            throw new Error("Stack is empty!");
        }

        return this.#buffer.pop();
    }

    get buffer() {
        return this.#buffer;
    }

    get size() {
        return this.#size;
    }
}

let myStack;

function createStackClickHandler() {
    const sizeOfStack = Number(document.getElementById("create-stack-size").value);
    myStack = new CustomStack(sizeOfStack);
    displayStack();
}

function pushClickHandler() {
    const numValue = document.getElementById("push-stack-ele").value;
    myStack.push(numValue);
    displayStack();
}

function displayStack() {
    document.getElementById("size").innerHTML = myStack.size;
    document.getElementById("stack").innerHTML = myStack.buffer;
}

// let myStack = new CustomStack(5);
// myStack.push(4);
// console.log(myStack.buffer)
// console.log(myStack.pop());
// console.log(myStack.buffer)

