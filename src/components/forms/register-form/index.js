import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import yup from 'yup';
import Axios from 'axios';
import { SERVER_URL } from '../../../lib/endpoints';

function RegisterForm(props) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const schema = yup.object({
    name: yup.string().required(),
  });

  const registerUser = (event) => {
    event.preventDefault();
    Axios.post(SERVER_URL + '/user/signup', { name, password, email})
      .then(response => {
        props.history.push('dashboard');
      })
      .catch(err => {
        console.error('err', err);
      });
  }

  return (
    <Card className="register-card">
      <Card.Header as="h5">Crea tu cuenta</Card.Header>
      <Card.Body>
        <Formik validationSchema={schema}>
          <Form onSubmit={registerUser}>
            <Form.Group controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control 
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Ingresa tu nombre"
                isValid={name}
                isInvalid={!name}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo</Form.Label>
              <Form.Control 
                type="email" 
                value={email} 
                onChange={(event) => setEmail(event.target.value)} 
                placeholder="Ingresar correo"
                isValid={email}
                isInvalid={!email}
              />
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
        </Formik>
      </Card.Body>
    </Card>
  );
}

export default RegisterForm;
