var timer = require('./')('timer');

timer('lol');
timer('hi');
timer('wahoo');

setTimeout(function() {
  timer.end('lol');
}, 500);

setTimeout(function() {
  timer.end('hi');
}, 1000);

setTimeout(function() {
  timer.end('wahoo');
}, 2000);
