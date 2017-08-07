# todoapp-fancy
simple todo

## URL
```
http://localhost:3000
```

## API USER

| Method        | URL           | Description  |
| ------------- |:-------------| -----|
| GET     | ```/api/users``` | show all users and their todos(admin) |
| GET     | ```/api/users/:id``` | show todos of current user (user&admin) |
| POST     | ```/api/users```      | create user|
| PUT | ```/api/users/:id``` | edit user profile|
| DELETE | ```/api/users/:id```  | delete current user profile|


## API TODO

| Method        | URL           | Description  |
| ------------- |:-------------| -----|
| GET     | ```/api/todos``` | Get all todos |
| GET     | ```/api/todos/:id``` |See one todo detail |
| POST     |```/api/todos/``` | Create todo|
| PUT |```/api/todos/:id```| Edit current todo|
| DELETE |```/api/todos/:id```| remove current todo|

## USAGE
```
npm install
npm start
```
