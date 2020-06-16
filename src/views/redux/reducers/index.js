import { combineReducers } from 'redux';
import { items, itemsHaveError, itemsAreLoading } from './items';
import {favoriteHaveError, favoriteAreLoading, favorite, favoriteSMP, favoriteSMA} from './favorite';

export default combineReducers({
    items,
    itemsHaveError,
    itemsAreLoading,
    favoriteHaveError,
    favoriteAreLoading,
    favorite,
    favoriteSMP,
    favoriteSMA
});
