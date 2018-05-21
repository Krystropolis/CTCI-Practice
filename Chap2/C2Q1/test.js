const Q1 = require('./index');
const List = Q1.List;
const Node = Q1.Node;
const removeDups = Q1.removeDups;
const printList = Q1.printList;

test('Return list with duplicates removed', () => {
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
	expect(printList(removeDups(case1))).toEqual('1->2->3');
});

test('Return list with single node', () => {
	let case2 = new List();
	case2.head = new Node(1);
	expect(printList(removeDups(case2))).toEqual('1');
});

test('Return error, submitted Node instead of List', () => {
	let case3 = new Node(1);
	expect(printList(removeDups(case3))).toEqual(
		'Error: Please submit a valid list.',
	);
});

test('Return error, submitted empty List', () => {
	let case4 = new List();
	expect(printList(removeDups(case4))).toEqual(
		'Error: Please submit a valid list.',
	);
});

test('Return error, no arg provided', () => {
	expect(printList(removeDups())).toEqual(
		'Error: Please submit a valid list.',
	);
});
