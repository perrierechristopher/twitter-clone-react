import React, { useRef, useState} from 'react'
import { Form, Button, Card, Container, Alert} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'



function Login() {
const emailRef = useRef()
const passwordRef = useRef()
const {login} = useAuth()
const [error, setError] = useState('')
const [loading, setLoading] = useState('')
const history = useNavigate()

async function handleSubmit(e) {
    e.preventDefault() 

    try {
        setError("")
        setLoading(true)
        await login(emailRef.current.value, passwordRef.current.value)
        history('/')
    } catch  (e){
        console.log(e)
        setError("Failed to log in")
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
                            <h2 className="text-center mb-4">Log In</h2>
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
                                <Button disabled={loading} className="w-100 mt-4" type='submit'>Log In</Button>
                            </Form>
                            <div className="w-100 text-center mt-2">
                        Doesn't have an account ? Sign Up
                        </div>
                        </Card.Body>
                    </Card>
                </div>
                

        </Container>
    
       
    </>

  )
}

export default Login