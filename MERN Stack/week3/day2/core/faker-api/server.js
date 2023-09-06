const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000;
app.listen( port, () => console.log(`Listening on port: ${port}`) );
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


const createUser=()=>{
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        _id: faker.number.hex()
    }
    return newUser
}

const createCompany=()=>{
    const newCompany = {
        _id: faker.number.hex(),
        name: faker.company.name(),
        adress: {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    }
    return newCompany
}

app.get("/api/users/new",(req,res)=>{
    const newUser = createUser()

    if(newUser != null){
        console.log("creating a new user status : succeed")
        res.json(newUser)
    }else{
        res.send("creating a new user status : failed")
    }
    
})

app.get("/api/companies/new",(req,res)=>{
    const newCompany = createCompany()

    if(newCompany != null){
        console.log("creating a new company status : succeed")
        res.json(newCompany)
    }else{
        res.send("creating a new company status : failed")
    }
    
})

app.get("/api/user/company",(req,res)=>{
    const newUser = createUser()
    const newCompany = createCompany()
    if(newUser != null && newCompany != null ){
        console.log("creating a new company and a new user status : succeed")
        res.json({newUser:newUser,newCompany:newCompany})
    }else{
        res.send("creating a new company and a new user status : failed")
    }
    
})