//require here we receive the module that was exported to the outside world
const linkedList = require('./linkedList');

/*
1. Add a new value at the list tail
2. Add a new value at the list head
3. Add a new value at the middle of the list
4. Delete the first element of the list
5. Delete the last element of the list
6. Delete an element in the middle of the list
7. Sort the list and validate that the order (high-low)
8. Reverse the list and validate the order */

describe('testing functions for a linked List', () =>{
    const list = new linkedList();
    
    expect(list.head).toBe(null)
    expect(list.tail).toBe(null)


    //test 1
    it ("Add new value at the list tail", () => {
        const list = new linkedList();
        expect(list.addToTail).toBeDefined();
        expect(list.addToTail(120).element).toEqual(120);
        expect((list.head).element).toEqual(120);
        expect(list.addToTail(1202).element).toEqual(1202);
        expect((list.head.element)).not.toEqual(1202);
        expect((list.tail)).toEqual(1202);
    })

    //test 2
    it ("Add a new value at the list head", () => {
        const list = new linkedList();
        expect(list.addToHead).toBeDefined();
        expect(list.addToHead(120).element).toEqual(120);
        expect((list.head).element).toEqual(120);
        expect(list.addToHead(220).element).toEqual(220);
        expect((list.head).element).toEqual(220);
    })

    //test 3
    it ("Add a new value at the list middle", () => {
        const list = new linkedList();
        expect(list.addToMiddle).toBeDefined();
        expect(list.addToMiddle(-50).element).toEqual(-50);
        expect((list.head).element).toEqual(-50);
        expect(list.addToMiddle(-500).element).toEqual(-500);
        expect((list.head).element).not.toEqual(-500);
        expect((list.tail)).toEqual(-500);
        expect(list.addToMiddle(-5000).element).toEqual(-5000);
        expect((list.head).element).not.toEqual(-5000);
        expect((list.tail)).not.toEqual(-5000);
        expect((list.tail)).toEqual(-500);
        
    })

    //test 4
    it ("Delete the first element of the list", () => {
        const list = new linkedList();
        expect(list.deleteFirst).toBeDefined();
        expect(list.deleteFirst()).toBe("The list its empty");
        expect(list.addToHead).toBeDefined();
        expect(list.addToTail).toBeDefined();
        expect(list.addToHead(120).element).toEqual(120);
        expect(list.addToTail).toBeDefined();
        expect(list.addToTail(1202).element).toEqual(1202);
        expect(list.head.element).not.toBeNull();
        expect(list.size).toBeGreaterThan(0);
        expect(list.deleteFirst()).toBe(true);
        expect((list.head).element).not.toEqual(120);
        expect(list.tail).not.toEqual(120);
       

    })

    //test 5
    it ("Delete the last element of the list", () => {
        const list = new linkedList();
        expect(list.deleteLast).toBeDefined();
        expect(list.deleteLast()).toBe("The list its empty");
        expect(list.addToHead(120).element).toEqual(120);
        expect(list.addToTail(100).element).toEqual(100);
        expect(list.deleteLast()).toBe(true);
        expect(list.tail).toEqual(120);
        expect(list.addToHead(1).element).toEqual(1);
        expect(list.addToHead(2).element).toEqual(2);
        expect(list.addToHead(3).element).toEqual(3);
        expect(list.tail).toEqual(120);
        expect(list.deleteLast()).toBe(true);
        expect(list.tail).not.toEqual(3);
        expect(list.tail).toEqual(1);
    })

    //test 6
    it ("Delete an element in the middle of the list", () => {
        const list = new linkedList();
        expect(list.deleteMiddle).toBeDefined();
        expect(list.deleteMiddle()).toBe('Increase the size of the list to delete the middle');
        expect(list.addToHead(10).element).toEqual(10);
        expect(list.addToTail(1).element).toEqual(1);
        expect(list.deleteMiddle()).toBe('Increase the size of the list to delete the middle');
        expect(list.addToTail(5).element).toEqual(5);
        expect(list.deleteMiddle()).toBe(true);
        expect(list.size).toEqual(2);
        expect(list.deleteMiddle()).toBe('Increase the size of the list to delete the middle');
        expect(list.addToTail(15).element).toEqual(15);
        expect(list.addToTail(6).element).toEqual(6);
        expect(list.printList()).toEqual('10->5->15->6->null')
        expect(list.deleteMiddle()).toBe(true);
        expect(list.printList()).toEqual('10->5->6->null')
    })

    //test 7
    it ("Sort the list and validate that the order (high-low)", () => {
        const list = new linkedList();
        expect(list.orderList).toBeDefined();
        expect(list.addToHead).toBeDefined();
        expect(list.addToTail).toBeDefined();
        expect(list.addToMiddle).toBeDefined();
        expect(list.addToHead(10).element).toEqual(10);
        expect(list.addToTail(1).element).toEqual(1);
        expect(list.addToTail(5).element).toEqual(5);
        expect(list.size).toBeGreaterThan(1);
        expect(list.orderList()).not.toEqual([1,5,10])
        expect(list.orderList()).toEqual([10,5,1])
    })

    //test 8
    it ("Reverse the list and validate the order", () => {
        const list = new linkedList();
        expect(list.ReverseList).toBeDefined();
        expect(list.addToHead).toBeDefined();
        expect(list.addToTail).toBeDefined();
        expect(list.addToMiddle).toBeDefined();
        expect(list.addToHead(10).element).toEqual(10);
        expect(list.addToTail(1).element).toEqual(1);
        expect(list.addToTail(4).element).toEqual(4);
        expect(list.addToTail(-100).element).toEqual(-100);
        expect(list.size).toBeGreaterThan(1);
        expect(list.ReverseList()).not.toEqual([10,1,4,-100])
        expect(list.ReverseList()).toEqual([-100,4,1,10])

    })

    //other tests

    it ("Print the linkedList values", () => {
        const list = new linkedList();
        expect(list.printList).toBeDefined();
        expect(list.addToTail(2).element).toEqual(2);
        expect(list.addToTail(3).element).toEqual(3);
        expect(list.addToTail(4).element).toEqual(4);
        expect(list.printList()).toBe('2->3->4->null')
    })

    it ("Get the tail of the list", () => {
        const list = new linkedList();
        expect(list.getTail).toBeDefined();
        expect(list.addToTail(2).element).toEqual(2);
        expect(list.addToTail(3).element).toEqual(3);
        expect(list.addToTail(4).element).toEqual(4);
        expect(list.getTail()).toEqual(4);
        expect(list.addToTail(5).element).toEqual(5);
        expect(list.getTail()).toEqual(5);
        expect(list.addToHead(1).element).toEqual(1);
        expect(list.getTail()).not.toEqual(1);
    })

})
