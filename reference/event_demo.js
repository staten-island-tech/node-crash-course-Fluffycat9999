const EventEmitter = require('events');

//Create class
class MyEmitter extends EventEmitter { }

//Init object
const MyEmitter = new MyEmitter();

//Event listener
MyEmitter.once('event', () => console.log('Event Fired!'));

//Init event
MyEmitter.emit('event');
MyEmitter.emit('event');
MyEmitter.emit('event');
MyEmitter.emit('event');
MyEmitter.emit('event');