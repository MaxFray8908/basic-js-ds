const { BinarySearchTree } = require('./binary-search-tree.js');

const tree = new BinarySearchTree();
tree.add(13);
tree.add(2);
tree.add(1);
tree.add(6);
tree.add(5);
tree.add(9);
tree.add(8)
tree.add(10);
tree.add(15);
tree.add(14);
tree.add(12);
tree.add(17);
tree.add(16);
tree.add(19);

tree.remove(13);

tree.add(128);
tree.add(31);
tree.add(54);
tree.add(13)

tree.remove(14);
tree.remove(8);
tree.remove(9);

console.log(tree.has(14), false);
console.log(tree.has(8), false);
console.log(tree.has(9), false);

console.log(tree.has(2), true);
console.log(tree.has(1), true);
console.log(tree.has(6), true);
console.log(tree.has(5), true);
console.log(tree.has(10), true);
console.log(tree.has(15), true);
console.log(tree.has(12), true);
console.log(tree.has(17), true);
console.log(tree.has(16), true);
console.log(tree.has(19), true);
console.log(tree.has(128), true);
console.log(tree.has(31), true);
console.log(tree.has(54), true);
console.log(tree.has(13), true);
