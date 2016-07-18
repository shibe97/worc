import { createAction } from 'redux-actions';

export const REQUEST_POST_FAVORITES_CREATE = 'REQUEST_POST_FAVORITES_CREATE';
export const SUCCESS_POST_FAVORITES_CREATE = 'SUCCESS_POST_FAVORITES_CREATE';
export const FAILURE_POST_FAVORITES_CREATE = 'FAILURE_POST_FAVORITES_CREATE';
export const requestPostFavoritesCreate = createAction(REQUEST_POST_FAVORITES_CREATE);
export const successPostFavoritesCreate = createAction(SUCCESS_POST_FAVORITES_CREATE);
export const failurePostFavoritesCreate = createAction(FAILURE_POST_FAVORITES_CREATE);

export const REQUEST_POST_FAVORITES_DESTROY = 'REQUEST_POST_FAVORITES_DESTROY';
export const SUCCESS_POST_FAVORITES_DESTROY = 'SUCCESS_POST_FAVORITES_DESTROY';
export const FAILURE_POST_FAVORITES_DESTROY = 'FAILURE_POST_FAVORITES_DESTROY';
export const requestPostFavoritesDestroy = createAction(REQUEST_POST_FAVORITES_DESTROY);
export const successPostFavoritesDestroy = createAction(SUCCESS_POST_FAVORITES_DESTROY);
export const failurePostFavoritesDestroy = createAction(FAILURE_POST_FAVORITES_DESTROY);

export const INPUT_FAVORITES_CREATE = 'INPUT_FAVORITES_CREATE';
export const inputFavoritesCreate = createAction(INPUT_FAVORITES_CREATE);
