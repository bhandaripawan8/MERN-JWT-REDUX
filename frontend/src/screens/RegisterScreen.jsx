import { useState  } from "react";
import {Link} from "react-router-dom"
import {Form, Button, Row, Col} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'

const RegisterScreen = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmedPassword, setConfirmedPassword] = useState('')

    const submitHandler = async (e) =>{
        e.preventDefault()
        console.log('submit')
    }
  return (
    <FormContainer>
        <h1>Register</h1>
        <Form onSubmit={submitHandler}>
                <Form.Group className="my-2" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter the name here..." value={name} onChange={e => setName(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className="my-2" controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter the email here..." value={email} onChange={e => setEmail(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className="my-2" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter the password here..." value={password} onChange={e => setPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className="my-2" controlId="confirmedPassword">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control type="password" placeholder="Enter the password here..." value={confirmedPassword} onChange={e => setConfirmedPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Button type="submit" variant="primary" className="mt-3">
                    Register
                </Button>
                <Row className="py-3">
                    <Col>
                        Already have an account ? <Link to={'/signIn'}>Sign In</Link>
                    </Col>
                </Row>
        </Form>
    </FormContainer>
  )
}

export default RegisterScreen