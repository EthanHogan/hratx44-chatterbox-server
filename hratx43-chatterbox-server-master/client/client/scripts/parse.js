var Parse = {

  server: `http://127.0.0.1:3000`,

  create: function(message, successCB, errorCB = null) {

    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function(successCB) {console.log('hello this is working', successCB)},
      error: errorCB || function (error) {
        console.error('chatterbox: Failed to create message', error);
      }
    });
      },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};

// http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages

// const { headers, method, url } = request;
// let body = [];
// request.on('error', (err) => {
//   console.error(err);
// }).on('data', (chunk) => {
//   body.push(chunk);
// }).on('end', () => {
//   body = Buffer.concat(body).toString();
//   // BEGINNING OF NEW STUFF

//   response.on('error', (err) => {
//     console.error(err);
//   });

//   response.statusCode = 200;
//   response.setHeader('Content-Type', 'application/json');
//   // Note: the 2 lines above could be replaced with this next one:
//   // response.writeHead(200, {'Content-Type': 'application/json'})

//   const responseBody = { headers, method, url, body };

//   response.write(JSON.stringify(responseBody));
//   response.end();
//   // Note: the 2 lines above could be replaced with this next one:
//   // response.end(JSON.stringify(responseBody))

//   // END OF NEW STUFF
// });