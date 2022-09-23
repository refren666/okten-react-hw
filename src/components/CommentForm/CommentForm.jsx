import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { commentsService, postsService, usersService } from '../../services';
import styles from './CommentForm.module.css';

export const CommentForm = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    postsService.getAll().then((res) => setPosts(res));
    usersService.getAll().then((res) => setUsers(res));
  }, []);

  const submit = (data) => {
    console.log(data);

    commentsService.create(data).then((res) => console.log('RESPONSE >>>', res));
  };

  return (
    <form onSubmit={handleSubmit(submit)} className={styles.form}>
      <div className={styles.formSection}>
        <h2>Comment</h2>
        <select {...register('postId')} className={styles.select}>
          <option value="">-- Please select post title --</option>
          {posts?.map((postItem) => (
            <option key={postItem.id} value={postItem.id}>
              {postItem.title}
            </option>
          ))}
        </select>

        <select {...register('email')} className={styles.select}>
          <option value="">-- Please select user email --</option>
          {users?.map((userItem) => (
            <option key={userItem.id} value={userItem.email}>
              {userItem.email}
            </option>
          ))}
        </select>

        <input
          type="text"
          {...register('name')}
          placeholder="Name..."
          className={styles.input}
          required
        />

        <textarea
          type="text"
          rows={4}
          {...register('body')}
          placeholder="Body..."
          className={styles.input}
          required
        />
      </div>

      <button type="submit">Create comment</button>
    </form>
  );
};
