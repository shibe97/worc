import { createAction } from 'redux-actions';

export const CLOSE_USER_MODAL = 'CLOSE_USER_MODAL';
export const closeUserModal = createAction(CLOSE_USER_MODAL);

export const SET_USER = 'SET_USER';
export const setUser = createAction(SET_USER);
