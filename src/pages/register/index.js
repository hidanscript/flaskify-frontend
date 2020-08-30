import React from 'react';
import RegisterForm from '../../components/forms/register-form';

function Register() {

  return (
    <div className="register-screen">
        <div className="logo-title">
          <i className="icon-Flask text-white fas fa-flask"></i>
          <h3 className="text-white">Flaskitt</h3>
        </div>
        <RegisterForm />
    </div>
  );
}

export default Register;
