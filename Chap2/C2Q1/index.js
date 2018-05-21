// Instructions: Write code to remove duplicates from an unsorted linked list
// Assumption: List will have at least 1 node

function List() {
	this.head = null;
}

function Node(data) {
	this.data = data;
	this.next = null;
}
/*
 * @param {object} l linked list
 * @return {object} linked list without duplicates
 */
const removeDups = l => {
	// use an object to keep track of all list values
	let listVals = {};
	// start with list head node
	let node = l.head;
	// add value to list object
	listVals[node.data] = 1;

	// while the next node exists
	while (node.next) {
		// if the next node's value exists in our list value object
		if (listVals[node.next.data]) {
			// skip the node
			node.next = node.next.next;
		} else {
			// add the next node's value
			listVals[node.next.data] = 1;
			// advance node
			node = node.next;
		}
	}
	//return list
	return l;
};

/*
 * @param {object} l linked list
 * @return {string} all values in list
 */
const printList = l => {
	let node = l.head;
	let str = '';

	// for each node within the list
	while (node) {
		// add the data to the string
		str += node.data;
		// advance to next node
		node = node.next;
		// if next node exists
		if (node) {
			// add arrow
			str += '->';
			// if the next node does not exist
		} else {
			// print the string
			return str;
		}
	}
};

/* TESTS */
let case1 = new List();
case1.head = new Node(1);
let node = case1.head;
node.next = new Node(2);
node = node.next;
node.next = new Node(3);
node = node.next;
node.next = new Node(2);
node = node.next;
node.next = new Node(1);
node = node.next;

let case2 = new List();
case2.head = new Node(1);

console.log(printList(case1)); // 1->2->3->2->1->null
console.log(printList(removeDups(case1))); // 1->2->3->null

console.log(printList(case2)); // 1->null
console.log(printList(removeDups(case2))); // 1->null
