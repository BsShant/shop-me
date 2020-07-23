import { createSelector } from 'reselect';

export const shopState = state => state.shopData;

export const shopData = createSelector(
    [shopState],
    (shopData) => shopData.shopData
)