function logMessage(message, name) {
  console.log('Message: ' + message);
  console.log('From: ' + name);
}

function makeLogger(name) {
  return function(message) {
    return logMessage(message, name);
  };
}

var personalLogMessage = makeLogger('My Name');
personalLogMessage('Hello');

// logs
// Message: Hello
// From: My Name