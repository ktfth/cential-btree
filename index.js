'use strict';
const assert = require('assert');

class BinaryTree extends Object {
  constructor() {
    super();
  }

  update(data) {
    let self = this;
    if (typeof(data) === 'object') {
      for (let k in data) {
        self[k] = data[k];
      }
    }
    return self;
  }

  length() {
    return Object.keys(this).length;
  }

  keys(min, max) {
    let out = Object.keys(this);
    if ((min !== undefined && max !== undefined)) {
      out = out.slice(min, max);
    } else if ((min !== undefined && max === undefined)) {
      out = out.slice(min);
    }
    return out;
  }

  values(min, max) {
    let out = Object.values(this);
    if ((min !== undefined && max !== undefined)) {
      out = out.slice(min, max);
    } else if ((min !== undefined && max === undefined)) {
      out = out.slice(min);
    }
    return out;
  }

  minKey(base) {
    let out = null;
    if (base !== undefined) {
      return this.keys().filter(k => k == Math.round(base))[0];
    }
    this.keys().forEach((k, i) => {
      if (out === null) out = k;
      out = Math.min(out, k);
    });
    return out;
  }
}

assert.ok((new BinaryTree()) instanceof BinaryTree);
let bt = new BinaryTree();
bt.update({ 1: 'bee', 2: 'gnu', 3: 'tiger', 4: 'elephant' });
assert.equal(bt.length(), 4);
assert.equal(bt[1], 'bee');
assert.deepEqual(bt.keys(), [1, 2, 3, 4]);
assert.deepEqual(bt.keys(1, 3), [2, 3]);
assert.deepEqual(bt.keys(2), [3, 4]);
assert.deepEqual(bt.values(), ['bee', 'gnu', 'tiger', 'elephant']);
assert.deepEqual(bt.values(1, 3), ['gnu', 'tiger']);
assert.deepEqual(bt.values(2), ['tiger', 'elephant']);
assert.equal(bt.minKey(), 1);
assert.equal(bt.minKey(1.5), 2);
for (let k in bt) {
  assert.ok(['1', '2', '3', '4'].indexOf(k) > -1);
}
