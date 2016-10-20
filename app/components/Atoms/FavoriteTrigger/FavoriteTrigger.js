import React from 'react';

export default ({ id_str, favorited, favorite_count, requestPostFavoritesDestroy, requestPostFavoritesCreate }) => {
  const postFavorites = () => {
    if (favorited) {
      requestPostFavoritesDestroy(id_str);
    } else {
      requestPostFavoritesCreate(id_str);
    }
  }
  return (
    <span>
      <a className={favorited ? 'isActioned' : ''} href="javascript:void(0);" onClick={() => postFavorites()}>
        <svg height="12px" version="1.1" viewBox="0 0 23.218 20.776"><path d="M11.608,20.776c-22.647-12.354-6.268-27.713,0-17.369  C17.877-6.937,34.257,8.422,11.608,20.776z"/></svg>
      </a>
      <a href="javascript:void(0);" className="Tweet__actionCount">
        {favorite_count}
      </a>
    </span>
  );
};
