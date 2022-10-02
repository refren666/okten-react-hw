import { useForm } from 'react-hook-form';

export const CarForm = ({ carHandler }) => {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit(carHandler)}>
        <div>
          <input type="text" {...register('model')} placeholder="Model..." />
          <input type="number" {...register('price')} placeholder="Price..." />
          <input type="number" {...register('year')} placeholder="Year..." />
          <button type="submit">Create</button>
        </div>
      </form>
    </>
  );
};
