/**
 * Module Dependencies
 */

var subs = require('subs');
var debug = require('debug');
var ms = require('ms');
var write;

/**
 * Timers
 */

var timers = {};

/**
 * Expose `timer`
 */

module.exports = function(key) {
  if (!key) return timer;
  if (write) return timer(key);
  write = debug(key);
  return timer;
}

/**
 * timer
 */

function timer(key) {
  timers[key] = new Date;
}

/**
 * timer#end
 */

timer.end = function(key) {
  var t = timers[key];
  if (!t) return;
  var str = timer.template;
  var elapsed = ms(+(new Date - t));
  write(str, key, elapsed)
}

/**
 * Template
 */

timer.template = '%s: %s';
