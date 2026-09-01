<<<<<<< HEAD
# Linked List Assignment

**Name:** Krishna Sharma
**Assignment:** Create a Linked List with JavaScript

## About Linked List

A linked list is a linear data structure made up of nodes. Each node contains two parts:

* **value** — stores the data.
* **next** — stores the reference to the next node.

The linked list starts from a node called **head**. The last node points to `null`, which indicates the end of the list.

Example:

```text
10 → 20 → 30 → null
```

## Methods Implemented

The `LinkedList` class contains the following methods:

1. `addFirst(value)` — Adds a new node at the beginning.
2. `addLast(value)` — Adds a new node at the end.
3. `deleteFirst()` — Deletes the first node.
4. `deleteLast()` — Deletes the last node.
5. `print()` — Prints all nodes in the linked list.
6. `find(value)` — Checks whether a value exists in the list.
7. `delete(value)` — Deletes the first node containing the given value.

## Example

Starting list:

```text
10 → 20 → 30 → null
```

After `addFirst(5)`:

```text
5 → 10 → 20 → 30 → null
```

After `deleteFirst()`:

```text
10 → 20 → 30 → null
```

After `deleteLast()`:

```text
10 → 20 → null
```

## Example Output

```text
Empty list:
null

Adding elements:
10 → 20 → 30 → null

Add at beginning:
5 → 10 → 20 → 30 → null

Delete from beginning:
10 → 20 → 30 → null

Delete from end:
10 → 20 → null

Find:
true
false

Delete value 20:
10 → null
```

## Technologies Used

* JavaScript
* Node.js
* Git & GitHub

## Repository Structure

```text
linked-list-assignment/
│
├── linkedlist.js
└── README.md
```
=======
# linkedlist
>>>>>>> 1b8ae61234f29447612c286aff3d6bfe2161c54e
