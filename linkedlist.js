class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Add a node at the beginning
    addFirst(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;
    }

    // Add a node at the end
    addLast(value) {
        const newNode = new Node(value);

        // If list is empty
        if (this.head === null) {
            this.head = newNode;
            return;
        }

        // Traverse to the last node
        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }

        current.next = newNode;
    }

    // Delete the first node
    deleteFirst() {
        if (this.head === null) {
            return;
        }

        this.head = this.head.next;
    }

    // Delete the last node
    deleteLast() {
        // Empty list
        if (this.head === null) {
            return;
        }

        // Only one node
        if (this.head.next === null) {
            this.head = null;
            return;
        }

        let current = this.head;

        // Stop at the second-last node
        while (current.next.next !== null) {
            current = current.next;
        }

        current.next = null;
    }

    // Print the linked list
    print() {
        let current = this.head;
        let result = "";

        while (current !== null) {
            result += current.value + " → ";
            current = current.next;
        }

        result += "null";
        console.log(result);
    }

    // Bonus: Find a value
    find(value) {
        let current = this.head;

        while (current !== null) {
            if (current.value === value) {
                return true;
            }

            current = current.next;
        }

        return false;
    }

    // Bonus: Delete first node containing value
    delete(value) {
        if (this.head === null) {
            return;
        }

        // If value is in the first node
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;

        while (current.next !== null) {
            if (current.next.value === value) {
                current.next = current.next.next;
                return;
            }

            current = current.next;
        }
    }
}


// =====================
// TESTING
// =====================

const list = new LinkedList();

console.log("Empty list:");
list.print();

console.log("\nAdding elements:");
list.addLast(10);
list.addLast(20);
list.addLast(30);
list.print();

console.log("\nAdd at beginning:");
list.addFirst(5);
list.print();

console.log("\nDelete from beginning:");
list.deleteFirst();
list.print();

console.log("\nDelete from end:");
list.deleteLast();
list.print();

console.log("\nFind:");
console.log(list.find(20));   // true
console.log(list.find(100));  // false

console.log("\nDelete value 20:");
list.delete(20);
list.print();

console.log("\nOne node test:");
const oneNodeList = new LinkedList();
oneNodeList.addLast(50);
oneNodeList.print();

oneNodeList.deleteFirst();
oneNodeList.print();

console.log("\nDelete from empty list:");
oneNodeList.deleteLast();
oneNodeList.print();