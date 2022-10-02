import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { authService } from '../../services';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useSearchParams();
  const { register, handleSubmit } = useForm();

  const submit = async (userData) => {
    try {
      const response = await authService.login(userData); // response =  {access: tokenData, refresh: tokenData}
      authService.setTokens(response);
      navigate('/cars');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {query?.has('expiredSession') && (
        <div>
          <h2>Your session has expired!</h2>
          <button onClick={() => setQuery('')}>Ok</button>
        </div>
      )}

      <form onSubmit={handleSubmit(submit)}>
        <input
          type="text"
          placeholder="Username..."
          {...register('username')}
        />
        <input
          type="text"
          placeholder="Password..."
          {...register('password')}
        />
        <button>Login</button>
      </form>
    </div>
  );
};
