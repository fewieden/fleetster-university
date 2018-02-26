# User
## Create user
`curl -X POST http://localhost:8080/register -H 'Content-Type: application/json' -d '{"name":"User One", "email":"user@one.de", "password": "123qwe"}'`

## Read User (insert {ID})
`curl -X GET http://localhost:8080/user/{ID} -H 'Content-Type: application/json'`

## Update User  (insert {ID} and {TOKEN})
`curl -X PUT http://localhost:8080/user/{ID} -H 'Content-Type: application/json' -H 'Authorization: {TOKEN}' -d '{"name":"User One (Updated)", "email":"user@one.de", "password": "123qwe"}'`

## Delete User  (insert {ID} and {TOKEN})
`curl -X DELETE http://localhost:8080/user/{ID} -H 'Content-Type: application/json' -H 'Authorization: {TOKEN}'`

## Login User (insert {ID})
`curl -X POST http://localhost:8080/login -H 'Content-Type: application/json' -d '{"_id":"{ID}", "password": "123qwe"}'`

# Booking
## Create Booking (insert {ID} and {TOKEN})
`curl -X POST http://localhost:8080/booking -H 'Content-Type: application/json' -H 'Authorization: {TOKEN}' -d '{"type":"private", "userId":"{ID}", "startDate": "2018-03-01T09:00:00.000Z", "endDate": "2018-03-01T11:00:00.000Z", "costs": 5.0}'`

## Read Booking (insert {ID} and {TOKEN})
`curl -X GET http://localhost:8080/booking/{ID} -H 'Content-Type: application/json' -H 'Authorization: {TOKEN}'`

## Update Booking (insert {ID} and {TOKEN})
`curl -X PUT http://localhost:8080/booking/{ID} -H 'Content-Type: application/json' -H 'Authorization: {TOKEN}' -d '{"name":"User One (Updated)", "email":"user@one.de", "password": "123qwe"}'`

## Delete Booking (insert {ID} and {TOKEN})
`curl -X DELETE http://localhost:8080/booking/{ID} -H 'Content-Type: application/json' -H 'Authorization: {TOKEN}'`