# User
## Create user
`curl -X POST http://localhost:8080/register -H 'Content-Type: application/json' -d '{"name":"User One", "email":"user@one.de", "password": "123qwe"}'`

## Read User (insert {ID})
`curl -X GET http://localhost:8080/user/{ID} -H 'Content-Type: application/json'`

## Update User (insert {ID})
`curl -X PUT http://localhost:8080/user/{ID} -H 'Content-Type: application/json' -d '{"name":"User One (Updated)", "email":"user@one.de", "password": "123qwe"}'`

## Delete User (insert {ID})
`curl -X DELETE http://localhost:8080/user/{ID} -H 'Content-Type: application/json'`

## Login User
`curl -X POST http://localhost:8080/register -H 'Content-Type: application/json' -d '{"email":"user@one.de", "password": "123qwe"}'`