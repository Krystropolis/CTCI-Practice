// Instructions: Write code to remove duplicates from an unsorted linked list

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
	let listVals = {};
	let node = l.head;
	listVals[node.data] = 1;

	while (node.next) {
		if (listVals[node.next.data]) {
			node.next = node.next.next;
		} else {
			listVals[node.data] = 1;
			node = node.next;
		}
	}
	return l;
};

/*
 * @param {object} l linked list
 * @return {string} all values in list
 */
const printList = l => {
	let node = l.head;
	let str = '';
	while (node) {
		str += node.data;
		node = node.next;
		if (node) {
			str += '->';
		} else {
			return str;
		}
	}
};

/* TEST */
let list = new List();
list.head = new Node(1);
let node = list.head;
node.next = new Node(2);
node = node.next;
node.next = new Node(3);
node = node.next;
node.next = new Node(2);
node = node.next;
node.next = new Node(1);
node = node.next;

console.log(printList(list)); // 1->2->3->2->1->null
console.log(printList(removeDups(list))); // 1->2->3->null
