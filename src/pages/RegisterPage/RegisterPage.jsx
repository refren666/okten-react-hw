import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { authService } from '../../services';

export const RegisterPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);

  const submit = async (userData) => {
    try {
      await authService.register(userData);
      navigate('/login')
    } catch (err) {
      setError(err.response.data?.username);
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input type="text" placeholder="Username..." {...register('username')} />
      <input type="text" placeholder="Password..." {...register('password')} />
      <button>Register</button>

      {error && <h3>{error}</h3>}
    </form>
  );
};
