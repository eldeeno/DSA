class Stack {
    constructor() {
        this.count =  0;
        this.items = {};
    }

    push(element) {
        this.items[this.count] = element;
        this.count++;
        console.log('Added element');
        console.log(element);
    }

    pop() {
        if (this.isEmpty()) {
            console.log(undefined);
        }

        let removedElement  = this.items[this.count-1];
        this.count--;
        delete this.items[this.count];

        console.log('Removed element');
        console.log(removedElement);
    }

    peek() {
        if(this.isEmpty()) {
            console.log(undefined);
        }

        let topElement = this.items[this.count-1];

        console.log('Top element');
        console.log(topElement);
    }

    size() {
        let size = this.count;
        console.log('No of elements');
        console.log(size);
    }

    // check if 
    isEmpty() {
        return this.count == 0;
    }

    // clears stack
    clear() {
        this.items = {};
        this.count = 0;
        return this.items;
    }
}

const stack = new Stack();
stack.push(2);
stack.push(3);
stack.push(1);
stack.peek();
stack.pop();