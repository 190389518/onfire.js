'use strict';
var test = require('tape');
var onfire = require('..');

test('onfire.js show be tested', function (t) {

  console.log('===================test on');
  var e1 = onfire.on('test_event', function(d) {
    t.equal(d, 't1_test_data');
  });
  var e2 = onfire.on('test_event_1', function(d) {
    t.fail(d);
  });

  t.equal(onfire.size(), 2);

  console.log('\n===================test un');
  t.equal(onfire.un(e2), true);
  t.equal(onfire.un(e2), false);
  t.equal(onfire.size(), 2);

  t.equal(onfire.un('test_event_1'), true);
  t.equal(onfire.un('test_event_1'), false);
  t.equal(onfire.size(), 1);

  console.log('\n===================test fire');
  onfire.fire('test_event', 't1_test_data');
  onfire.fire('test_event_1', 't2_test_data');

  console.log('\n===================test clear');
  onfire.clear()

  t.equal(onfire.size(), 0);

  console.log('\n===================test events');
  var e1 = onfire.on('test_event', function(d) {});
  var e2 = onfire.on('test_event_1', function(d) {});
  t.deepEqual(onfire.events(), ['test_event', 'test_event_1']);

  t.end();
});