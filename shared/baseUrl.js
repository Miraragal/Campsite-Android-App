export const baseUrl= 'http://10.0.2.2:3001/'

//why do we use 10.0.2.2 to connect to local web server instead of using computer ip address in android client
//If you are running both server and emulator in you computer 127.0.0.1:(port) will refer to the emulator itself and not to the server.
//The 10.0.2.2 is the solution to that problem :)

// comand to star json-server: json-server --watch db.json -p 3001 -d 2000
//json-server -H 0.0.0.0 --watch db.json -p 3001 -d 2000

//command frontend expo start
