import React from 'react';
import { NavLink } from "react-router-dom";

import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import SeparForm from "./SeparForm";
import Linked from "./Linked";

const SignUpForm = () => {
    return (
        <Form>
            <h1>Join Gamovore</h1>
            <p>Sign up to find other gamovores</p>
            <label htmlFor="pseudoAdd"></label>
            <Input type="text" id="pseudoAdd" name="pseudo" placeholder="Your pseudo here" required />
            <label htmlFor="mail"></label>
            <Input type="email" id="mail" name="e-mail" placeholder="Your e-mail here"required />
            <label htmlFor="passAdd"></label>
            <Input type="password" id="passAdd" name="password" minLength="8" placeholder="Your password here" required />
            <input type="checkbox" /> I agree to your Terms and Conditions
            <Button type="submit">Create your free account</Button>
            <SeparForm/>
            <p>Already registered?  <Linked to="/sign-in">Sign in</Linked></p>
        </Form>
    )
}

export default SignUpForm;