import React from 'react';
import LoginForm from '../../components/forms/login-form';

function Login() {
  return (
    <div className="login-screen">
        <div className="logo-title">
          <i className="icon-Flask text-white fas fa-flask"></i>
          <h3 className="text-white">Flaskitt</h3>
        </div>
        <LoginForm />
    </div>
  );
}

export default Login;
