# Linked List Assignment

**Name:** Vayu Nandan Tripathi
**Admission Number:** 24SCSE1180366
**Assignment Title:** Create a Linked List with JavaScript

## About Linked List

A linked list is a linear data structure made up of nodes. Each node contains two parts:

* **Value** – stores the data.
* **Next** – stores the reference to the next node.

The first node is called the **head**. The last node points to `null`.

Example:

```text
10 → 20 → 30 → null
```

## Classes Implemented

### `Node`

The `Node` class represents an individual node.

```javascript
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
```

### `LinkedList`

The `LinkedList` class manages the linked list and contains the `head`.

## Methods Implemented

| Method            | Description                                 |
| ----------------- | ------------------------------------------- |
| `addFirst(value)` | Adds a node at the beginning                |
| `addLast(value)`  | Adds a node at the end                      |
| `deleteFirst()`   | Deletes the first node                      |
| `deleteLast()`    | Deletes the last node                       |
| `print()`         | Prints the complete linked list             |
| `find(value)`     | Searches for a value in the list            |
| `delete(value)`   | Deletes the first node containing the value |

## Example

### Adding at the Beginning

```text
Before:
10 → 20 → 30 → null

addFirst(5)

After:
5 → 10 → 20 → 30 → null
```

### Adding at the End

```text
Before:
10 → 20 → 30 → null

addLast(40)

After:
10 → 20 → 30 → 40 → null
```

### Deleting from the Beginning

```text
Before:
10 → 20 → 30 → null

deleteFirst()

After:
20 → 30 → null
```

### Deleting from the End

```text
Before:
10 → 20 → 30 → null

deleteLast()

After:
10 → 20 → null
```

## Bonus Methods

### Find

```javascript
list.find(20);  // true
list.find(100); // false
```

### Delete by Value

```javascript
list.delete(20);
```

This deletes the **first node** containing the specified value.

## Example Output

```text
10 → 20 → 30 → null
5 → 10 → 20 → 30 → null
10 → 20 → 30 → null
10 → 20 → null
```

## Testing

The implementation has been tested for:

* Empty linked list
* Linked list with one node
* Linked list with multiple nodes
* Adding at the beginning
* Adding at the end
* Deleting from the beginning
* Deleting from the end
* Finding a value
* Deleting a value

## Project Structure

```text
linkedlist/
│
├── linkedlist.js
└── README.md
```

## How to Run

Make sure Node.js is installed, then run:

```bash
node linkedlist.js
```

---

**Submitted by:**
**Vayu Nandan Tripathi**
**Admission Number:** 24SCSE1180366
