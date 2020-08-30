import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LoginForm() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const loginUser = (event) => {
    event.preventDefault();
    
  }

  return (
    <Card className="register-card">
      <Card.Header as="h5">Ingresar</Card.Header>
      <Card.Body>
        <Form onSubmit={loginUser}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Ingresar correo" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Ingresar contraseña" />
            <Form.Text className="text-muted">¿Olvidaste tu contraseña? <Link to="/recover-password">Haz click aquí</Link></Form.Text>
          </Form.Group>
          <Button variant="primary flask-secondary-btn" block type="submit">
            Iniciar sesión
          </Button>
          <div className="separator"></div>
          <Button variant="primary flask-facebook-btn" block type="submit">
            <i className="text-white mr-2 fab fa-facebook-f"></i>
            Iniciar sesión con Facebook
          </Button>
          <Button variant="primary flask-google-btn" block type="submit">
          <i className="text-white mr-2 fab fa-google"></i>
            Iniciar sesión con Google
          </Button>
          <div className="separator"></div>
          <Form.Text className="text-center text-muted">¿No posees una cuenta?<br /><Link to="/signup">Registrate aquí</Link></Form.Text>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default LoginForm;
