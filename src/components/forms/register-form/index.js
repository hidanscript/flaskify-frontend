import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RegisterForm() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const registerUser = (event) => {
    event.preventDefault();
    
  }

  return (
    <Card className="register-card">
      <Card.Header as="h5">Crea tu cuenta</Card.Header>
      <Card.Body>
        <Form onSubmit={registerUser}>
          <Form.Group controlId="formName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Ingresa tu nombre" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Ingresar correo" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Ingresar contraseña" />
          </Form.Group>
          <Button variant="primary flask-secondary-btn" block type="submit">
            Registrarse
          </Button>
          <div className="separator"></div>
          <Button variant="primary flask-facebook-btn" block type="submit">
            <i className="text-white mr-2 fab fa-facebook-f"></i>
            Registrarse con Facebook
          </Button>
          <Button variant="primary flask-google-btn" block type="submit">
          <i className="text-white mr-2 fab fa-google"></i>
            Registrarse con Google
          </Button>
          <div className="separator"></div>
          <Form.Text className="text-center text-muted">¿Ya posees una cuenta?<br /><Link to="/login">Inicia sesión aquí</Link></Form.Text>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default RegisterForm;
