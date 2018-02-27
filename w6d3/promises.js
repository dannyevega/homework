// The problem Promises solve:

// Sometimes we need to chain several asynchronous functions. For example, maybe we want to get our user's geolocation, then hit an API to GET the user's nearest surf spot, then hit a third API to get the surf conditions for that spot.

// before promises, we might have to do something like this:
function getForecastForLocation(){
  locationRequest({
    success: spotRequest({
      success: forecastRequest({
        success: handleSuccess,
        error: handleError
      }),
      error: handleError
    }),
    error: handleError
  });
}
// We'd have to define the success callback of one function to invoke the next, and each would have to handle its own errors.
// Nesting callbacks like this can only lead us to callback hell

// with promises:
function getForecastForLocation(){
  locationRequest()
    .then(spotRequest)
    .then(forecastRequest)
    .then(handleSuccess)
    .catch(handleError)
}

// Functionality and Vocabulary of a Promise:

	// ACTION: the primary function of a promise (i.e., fetch data from an API)

// Promises can only exist in one of three states:

	// PENDING: The promise has been neither fulfilled nor rejected.
	// FULFILLED: The promise's action has succeeded.
	// REJECTED: The promise's action has failed.

// A promise is considered settled when it has either been fulfilled or rejected.
// A promise can only succeed or fail once -- callbacks will not be invoked multiple times.
// A promise cannot change its state from fulfilled to rejected or vice-versa.
// If a promise has already been settled and a callback is added that matches the promise's state, that callback will be invoked immediately.	



// We can create a new promise using the promise constructor function:
const p = new Promise(executor);
// The constructor function accepts a single executor argument, which is a function that takes two optional parameters: resolve and reject. Let's see an example:

const p = new Promise((resolve, reject) => {
  if (/* success condition */){
    resolve(/* any args */);
  } else {
    reject(/* any args */);
  }
});



// RESOLVE and REJECT
// resolve and reject are responsible for telling the promise what arguments to pass on once the promise has been settled.
// receiveResponse is the resolve callback, and will be invoked once setTimeout successfully goes off after one second. It receives an argument which will get passed to the resolve callback, which in this case prints it out.
const request = new Promise(resolve => {  
  setTimeout((msg) => resolve(msg), 1000);
});

const receiveResponse = msg => console.log(msg);

request.then(receiveResponse);



// THEN
// Promise objects have two important pre-defined methods: then and catch. Both then and catch return a new promise object, making them chainable.

// then accepts two parameters:

	// onFulfilled: the function to invoke if the promise is fulfilled
	// onRejected: the function to invoke if the promise is rejected

// Essentially, onFulfilled is the resolve function and onRejected is the reject function.

p.then(onFulfilled) // onFulfilled *might* run
p.then(onFulfilled, onRejected) // either onFulfilled or onRejected *will* run



// CATCH
// catch only accepts an onRejected parameter. catch acts exactly like calling then(null, onRejected) on a promise.

// Consider this:

	// p.then(onFulfilled, onRejected).catch(error)
	// If p is rejected, onRejected will run. error will run if either onFulfilled or onRejected are rejected.

// Note: onRejected simply logging an error message would not trigger error, but it would if it explicitly threw an error. In other words:
const onRejected = err => console.log(err); // fulfilled; would not trigger error
const onRejected = err => throw err; // rejected; would trigger error