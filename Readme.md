
# debug-timer

  time things. outputs to [visionmedia/debug](https://github.com/visionmedia/debug).

## Installation

  Install with [component(1)](http://component.io):

    $ component install matthewmueller/debug-timer

  Install with npm:

    $ npm install debug-timer

## Example

```js
var timer = require('debug-timer')('timer');
timer('js');
timer('css');

setTimeout(function() {
  timer.end('js')
}, 1000);

setTimeout(function() {
  timer.end('css')
}, 2000);
```

## API

### Timer(namespace)

  Assign timer to a namespace. In the code this means: `require('debug')(namespace)`.

### timer(key)

  Start a timer with the given `key`.

### timer.end(key)

  End the timer with the given `key`.

### timer.template

Assign a custom template. The first `%s` is the key, second `%s` is the elapsed time. Defaults to:

```js
timer.template = %s: %s;
```

## License

  MIT
