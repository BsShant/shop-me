import { createSelector } from 'reselect';

export const menuState = state => state.menuItems;

export const menuItems = createSelector(
    [menuState],
    (menuItems) => menuItems.menuItems
)