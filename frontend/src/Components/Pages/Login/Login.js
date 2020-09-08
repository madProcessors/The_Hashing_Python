import React,{useState} from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import './login.css';

const Login = () => {
  const[email , setEmail] = useState("");
  const[password , setPassword] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("Email: " , email , "password " , hashPassword);
  }

  return (
    <Container>
      <div className="loginForm">
        <Form onSubmit={handleSubmit}>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleEmail" className="mr-sm-2">
              Email
            </Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="something@idk.cool"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="examplePassword" className="mr-sm-2">
              Password
            </Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="don't tell!"
              className="mb-4"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    </Container>
  );
};
export default Login;
