# Kambi GraphQL Coding Assignment
Your task, should you accept it, is to implement a GraphQL server using the skeleton code given in this example repo and connect it to the three existing microservices.

We would like to be able to query our server for users along with their `Pets` and `Cars`.

Example of queries we would like to be able to do

```js
query users([<stringOfUserIds>]){
  user{
    ...userField
    pets{
      ...petfields
    }
    cars{
      ...carFields
    }
  }
}

query user(<userId>){
  user{
    ...userField
    pets{
      ...petfields
    }
    cars{
      ...carFields
    }
  }
}
```

You aren't meant to spend more than 2-3 hours on this test.

## GQL Test services 
These are the three services that are used for the Kambi GQL take home assignment.

They consist of:
* A user service
* A cars service
* A pets service

### User service
The user service is meant to "connect" the rest of the services.
It exposes two endpoints: 
* `api/users` that fetches all registered users
* `api/users/:uid` that fetches data for a specific user

the `User` object:
```js
interface User {
  id: string;
  displayName: string;
  email: string;
}
```

Accessed at: `a1886b2b8dec04fc280e4e061d5c8215-1538521796.eu-north-1.elb.amazonaws.com`

### Pets service
The pets service handles everything related to pets.
It exposes two endpoints: 
* `api/pets` that fetches all the pets
* `api/pets/:uid` that fetches the pets for the given user

The `Pet` object
```js
interface Pet {
  id: string;
  name: string;
  type: string;
  age: number;
  userId: string
}
```

Accessed at: `a306e19d4a4a54508815008db82f8a27-85871115.eu-north-1.elb.amazonaws.com`

### Cars service
The cars service handles everything related to cars.
It exposes two endpoints: 
* `api/cars` that fetches all the cars
* `api/cars/:uid` that fetches the pets for the given user

The `Car` object
```js
interface Car {
  id: string;
  name: string;
  description: string;
  purchased: Date;
  userId: string
}
```

Accessed at: `a69343257b2dc4968b6b1e93ccc2d62f-1792816429.eu-north-1.elb.amazonaws.com`

### Commonality
The three services can all be connected via the `User` object.
The `id` of the user maps to the `userId` in the `Pets` and `Cars` services.
