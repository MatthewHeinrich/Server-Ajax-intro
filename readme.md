

Stage 1: Setup
---

- git init
- npm init --y
- npm install express
- set up folders (server, server/public, ect...)
- more over JQuery 
- create html (server/public)
- create client.js ^
- create server.js (server)

Stage 2: spin up server
---

edit server.js:

- require express
- create app
- app.use express.static on server/public
- spin up server on port:5000
- add start script to package.json

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server/server.js"
  },

```