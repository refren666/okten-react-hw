import { useEffect, useState } from 'react';

import { jsonPlaceholderService } from '../../services/jsonPlaceholder.service';

export const AlbumsPage = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    jsonPlaceholderService.getAllAlbums().then((res) => setAlbums(res));
  }, []);

  return (
    <div>
      <h2>ALBUMS: </h2>
      {albums?.map((album) => (
        <h3 key={album.id}>
          #{album.id} {album.title}
        </h3>
      ))}
    </div>
  );
};
