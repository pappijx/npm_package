# Response Generator

#### Description

A simple library that helps developers to make quick api responses from multiple responses.

#### How to use

The package is created to simply make merging multiple api's together easier so that devs don't have to waste time creating their own functions and do a repeatative process.

Below are steps to make the library work

1. import generateResponse from 'jx-response-generator'
2. The function generateResponse takes **2** parameters
   - First parameter is an object of your api responses
   - Second parameters is the items required from the merge object of both.

Thats it.

#### Example

```
import { generateResponse } from "jx-response-generator";
const userData = {
    firstname: 'John',
    lastname: 'Doe',
    Address: {
        city: 'Noida',
        state: 'Uttarpradesh',
        country: 'India',
        pincode: '201209'
    }
}

const hobbies = {
    type: ['football', 'gaming', 'reading']
}

consoel.log(generateResponse({...userData, ...hobbies}, ['firstname', 'lastname', 'city', 'type']))


--> Output
    {
        firstname: 'John',
        lastname: 'Doe',
        city: 'Noida',
        type: ['football', 'gaming', 'reading']
    }
```

###### Issues right now

1. Right now there is no solution for 2 response with same key
2. Arrays inside an object won't be parsed.
