import { createSelector } from 'reselect';

export const user = state =>state.user;

export const loggedUser = createSelector(
    [user],
    user => user.loggedUser
)