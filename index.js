/**
 * Authors
 * - Aishwarya Shrestha ()
 * - Shrijan Karki (1234)
 * - Justice Ekeke ()
 * - Basil Dhillo ()
 * - Keshav Dulal (301209947)
 */

// Library Imports
const express = require('express');
   
const PORT_ADDR = 8000;
const LOCALHOST = '127.0.0.1'
   
  var server = http.createServer(function (request, response) {
    
    // handle different request urls using switch
    switch (request.url) {
      case '/':
        response.writeHead(200, { "Content-Type": "text/plain" }); // HTTP header
        response.end('Welcome to the Server')
        break;
      
      case '/images':
        response.writeHead(200, { "Content-Type": "text/plain" }); // HTTP header
        response.end('Images endpoint')
        break;
    }
  });


  server.listen(PORT_ADDR, LOCALHOST, () => {
    console.log(`Server is running at ${LOCALHOST}:${PORT_ADDR}`);
    console.log(`Following routes are available: \n/\ \n/\images`)
  });