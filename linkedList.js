class Node {
	// constructor
	constructor(element) {
		this.element = element;
		this.next = null
	}
}
// linkedlist class
class LinkedList {
	constructor() {
		this.head = null;
        this.tail = null;
		this.size = 0;
	}

	// adds an element at the end
	// of list
	addToTail(element) {
		var node = new Node(element); // creates a new node
		var current; // to store current node

		if (this.head === null) // if list is Empty add the
			this.head = node; 	// element and make it head
		else {
			current = this.head;
			// iterate to the end of the
			// list
			while (current.next) { //if curren.next is not null then we are not yet before de tail of the list
				current = current.next;
			}
			// create node
			current.next = node;
            this.tail = this.getTail(); //obtain the last value of the list
		}
		this.size++; //the size of the list increase
        return node;
	}

	addToHead(element) {
		// creates a new node
		var node = new Node(element);
        node.next = this.head; //We move the old structure
        this.head = node; //and set the this node as the new head

        this.size++;
        this.tail = this.getTail();
        return node;
	}

    addToMiddle(element){
        var node = new Node(element);
        var current, prev;
        current = this.head;

        let index = 0;

        if(this.size === 0) {
            this.addToHead(element) //if the list is empty then with set the element as the head
            return node;
        } 

        if(this.size % 2 === 0){
            //If the list is even we add the element after middle element 
            while(index < ((this.size / 2 ))){
                index++;
                //Here we make the magic to storage the new value and not lost the after or before value
                prev = current;
                current = current.next;
            }
            //once we finished then we add the rest of the list
            node.next = current;
            prev.next = node;
            this.size++;
            this.tail = this.getTail();
            return node
        }

        if(this.size % 2 !== 0){
            //If the list is odd we add the element by moving the list to the right
            while(index < (Math.floor((this.size / 2) + 1))){
                index++;
                prev = current;
                current = current.next;
            }
            node.next = current;
            prev.next = node;
            this.size++;
            this.tail = this.getTail();
            return node
        }
        
    }

    deleteFirst(){
        if(this.size >= 1){
            this.head.next;
            //with just ignore the first element and make the new linkedList with out the old head.
            this.head = this.head.next;
            this.size--; // decrease the list size
            this.tail = this.getTail();
            return true;
        }
        else{
            return "The list its empty"
        }
        
    }


	deleteLast() {
		var current, previous;
        let controlIndex = 0;

		current = this.head;
        previous = current;

        if(this.size === 0){
            return "The list its empty";
        }

        //loop through the list to the last element and we ignore it
		while (controlIndex < this.size -1) {
            previous = current;
            current = current.next
            controlIndex++;
		}

        previous.next = current.next;
		this.size--; // decrease the list size
        this.tail = this.getTail();
        return true;
	}

    deleteMiddle(){
        let current, prev;
        let index = 0;
        current = this.head;
        

        if(this.size < 3) {
            return 'Increase the size of the list to delete the middle';
            
        }

        //If the list is even we ignore the middle element
        if(this.size % 2 === 0 && this.size !== 0){
            while(index < ((this.size / 2 ))){
                index++;
                prev = current;
                current = current.next;
            }
            prev.next = current.next;
            this.size--;
            this.tail = this.getTail();
            return true
        }

        //If the list is odd we ignore the element in the middle
        if(this.size % 2 !== 0){
        while(index < (Math.floor((this.size / 2)))){
            index++;
            prev = current;
            current = current.next;
        }
        prev.next = current.next;
        this.size--;
        this.tail = this.getTail();
        return true
        }
        
    }


    getTail(){
        //this function returns the value found at the tail of the list before it is null
        var curr = this.head;
        let last;
        while (curr) {
            last = curr.element
            curr = curr.next;
        }
        return last;
    }

    orderList(){
        var curr = this.head;
        let array = []
        while (curr) {
            array.push(curr.element) //we store the values 
            curr = curr.next; //of the linkedlist as if they were an array and order it
        }
        return array.sort(function(a, b){return b - a});
    }

    ReverseList(){
        var curr = this.head;
        let array = []
        while (curr) {
            array.push(curr.element) //we store the values as an array
            curr = curr.next;
        }
        return array.reverse(); //use the reverse method
    }


    printList() {
    //we print the list values as an string for a more clear interpretation of its
    var curr = this.head;
    var str = "";
    while (curr) {
        str += curr.element + "->";
        curr = curr.next;
    }
    return str +'null'
    }
}


module.exports = LinkedList;


