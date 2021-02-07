'use strict';
const assert = require('assert');

class BinaryTree extends Array {
  update(data) {
    let self = this;
    if (typeof(data) === 'object') {
      Object.keys(data).forEach(k => self[k] = data[k]);
    }
    return self;
  }

  len() {
    return Object.keys(this).length;
  }
}

assert.ok((new BinaryTree()) instanceof BinaryTree);
let bt = new BinaryTree();
bt.update({ 1: 'bee', 2: 'gnu', 3: 'tiger', 4: 'elephant' });
assert.equal(bt.len(), 4);
assert.equal(bt[1], 'bee');
