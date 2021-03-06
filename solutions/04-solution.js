const Rx = require('rxjs');

/**
 * Exercise: from interval(1000), make an Observable with 10 EVEN numbers
 * multiplied by 100. Then, subscribe to it and show the values
 * in console.log.
 */

const obs = Rx.Observable.interval(1000)
  .take(10)
  .filter(x => x % 2 === 0)
  .map(x => x * 100);

obs.subscribe(x => console.log(x));
