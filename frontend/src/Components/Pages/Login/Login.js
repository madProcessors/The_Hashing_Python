import React, { useState } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./login.css";

const Login = ({history}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Email: ", username, "password ", password);
    const dataUser = {username , password}
    // const email = email.trim();
    // const password = password.trim();
    // if(email === "" && password === ""){
    //   alert("This inputs are required");
    //   return;
    // }
    
    try {
      let response = await fetch('http://localhost:8000/api/token',{
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(dataUser)
      });

      let data = await response.json()
      if(!data.refresh){
        alert("Bad credentials");
        return;
      }
      console.log("data: " , data);

      window.localStorage.setItem("token_refresh", data.refresh);
      window.localStorage.setItem("token_access", data.access);
      
        return history.push('/hashing');
        // return data || && data.non_field_errors[0] !== "Incorrect credentials";
        //console.log("Bad credentials");
      
       

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <div className="loginForm">
        <Form onSubmit={handleSubmit}>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleEmail" className="mr-sm-2">
              Email
            </Label>
            <Input
              type="text"
              name={username}
              id="exampleEmail"
              placeholder="something@idk.cool"
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="examplePassword" className="mr-sm-2">
              Password
            </Label>
            <Input
              type="password"
              name={password}
              id="examplePassword"
              placeholder="don't tell!"
              className="mb-4"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    </Container>
  );
};
export default Login;
