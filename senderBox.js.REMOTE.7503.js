var boxcar = require('boxcar');
var provider = new boxcar.Provider('2KXkozIJdhwT9tyvukKf');
var arguments = process.argv[2];
//console.log(arguments);
//send a message to a user directly

setTimeout((function() {
  provider.notify('immmmmmmmmmmmmail.com',  process.argv[2]);
 // provider.notify('magdabenavente@gmail.com',  process.argv[2]);
}), 10000);
