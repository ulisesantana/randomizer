import {Categories, Category, Item} from "../types";
import {CategoryAction, CategoryActions, ItemPayload} from "./actions";
import {mapToID, removeById} from "../utils";
import {StoreService} from "../services";
import {NAMESPACE} from "../constants";

function reducer(state: Categories, {type, payload}: CategoryAction): Categories {
  switch (type) {
    case CategoryActions.CREATE_CATEGORY:
    case CategoryActions.UPDATE_CATEGORY:{
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
    case CategoryActions.DELETE_CATEGORY: {
      const {id} = payload as {id: string};
      return {
        ...mapToID<Category>(Object.values(state).filter(removeById(id)))
        }
    }
    case CategoryActions.CREATE_ITEM:
    case CategoryActions.UPDATE_ITEM: {
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
    case CategoryActions.DELETE_ITEM: {
      const {categoryId, id} = payload as ItemPayload;
      return {
        ...state,
        [categoryId]: {
          ...state[categoryId],
          items: mapToID<Item>(Object.values(state[categoryId].items).filter(removeById(id)))
        }
      };
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