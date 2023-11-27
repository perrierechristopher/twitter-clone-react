import React, { useRef, useState} from 'react'
import { Form, Button, Card, Container, Alert} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./SignInUp.css"
import { useAuth } from '../../contexts/AuthContext'
import {useNavigate} from "react-router-dom"


function SignInUp() {
const emailRef = useRef()
const passwordRef = useRef()
const passwordConfirmRef = useRef()
const {SignUp} = useAuth()
const [error, setError] = useState('')
const [loading, setLoading] = useState('')
const history = useNavigate()

async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError('Passwords do not match')
    }

    try {
        console.log(SignUp)
        setError("")
        setLoading(true)
        await SignUp(emailRef.current.value, passwordRef.current.value)
        history("/")
    } catch  (e){
        console.log(e)
        setError("Failed to create an account")
    }

    setLoading(false)
    
}
  return (
    <>
        <Container className='d-flex align-items-center justify-content-center' style={{
                minHeight: "100vh",
            }}>
                <div className='w-100' style={{
                    maxWidth: "400px",
                }}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Sign Up</h2>
                            { error && <Alert variant="danger">{error}</Alert> }
                    
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required />
                                </Form.Group>
                                <Form.Group id="passwordConfirm">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" ref={passwordConfirmRef} required />
                                </Form.Group>
                                <Button disabled={loading} className="w-100 mt-4" type='submit'>Sign Up</Button>
                            </Form>
                            <div className="w-100 text-center mt-2">
                        Already have an account? Log in
                        </div>
                        </Card.Body>
                    </Card>
                </div>
                

        </Container>
    
       
    </>

  )
}

export default SignInUp