import {Categories, Category, Item} from "../types";
import {CategoryAction, CategoriesActions, ItemPayload} from "./actions";
import {mapToID, removeById} from "../utils";
import {StoreService} from "../services";
import {NAMESPACE} from "../constants";
import {categories} from "./data";

function reducer(state: Categories, {type, payload}: CategoryAction): Categories {
  switch (type) {
    case CategoriesActions.CREATE_CATEGORY:
    case CategoriesActions.UPDATE_CATEGORY:{
      const {id, label, items} = payload as Category;
      return {
        ...state,
        [id]: {
          id,
          label,
          items: items || []
        }
      };
    }
    case CategoriesActions.DELETE_CATEGORY: {
      const {id} = payload as {id: string};
      return {
        ...mapToID<Category>(Object.values(state).filter(removeById(id)))
        }
    }
    case CategoriesActions.CREATE_ITEM:
    case CategoriesActions.UPDATE_ITEM: {
      const {categoryId, id, label} = payload as ItemPayload;
      return {
        ...state,
        [categoryId]: {
          ...state[categoryId],
          items: {
            ...state[categoryId].items,
            [id]: {id, label}
          }
        }
      };
    }
    case CategoriesActions.DELETE_ITEM: {
      const {categoryId, id} = payload as ItemPayload;
      return {
        ...state,
        [categoryId]: {
          ...state[categoryId],
          items: mapToID<Item>(Object.values(state[categoryId].items).filter(removeById(id)))
        }
      };
    }
    case CategoriesActions.REPLACE_ALL: {
      return payload as Categories;
    }
    case CategoriesActions.UPDATE_ALL: {
      return {
        ...state,
        ...payload as Categories
      };
    }
    case CategoriesActions.DELETE_ALL: {
      return {} as Categories;
    }
    case CategoriesActions.RESET: {
      return categories;
    }
    default:
      return state
  }
}

export function rootReducer(state: Categories, action: CategoryAction): Categories{
  const newState = reducer(state, action);
  StoreService.set(NAMESPACE, newState);
  return newState;
}