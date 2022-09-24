import { Link, Route, Routes } from 'react-router-dom';

import { AlbumsPage, CommentsPage, TodosPage } from './routes';

const App = () => {
  return (
    <>
      <nav className="bg-blue-400 text-white flex justify-center gap-x-5 py-3 mb-2">
        <Link to="/">Todos</Link>
        <Link to="/albums">Albums</Link>
        <Link to="/comments">Comments</Link>
      </nav>

      <Routes>
        <Route index element={<TodosPage />} />
        <Route path='/albums' element={<AlbumsPage />} />
        <Route path='/comments' element={<CommentsPage />} />
      </Routes>
    </>
  );
};

export default App;
