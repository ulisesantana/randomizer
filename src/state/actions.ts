import {Categories, Category, Item} from "../types";
import {ChangeEvent} from "react";

export enum CategoriesActions {
  CREATE_ITEM = 'CREATE_ITEM',
  UPDATE_ITEM = 'UPDATE_ITEM',
  DELETE_ITEM = 'DELETE_ITEM',
  CREATE_CATEGORY = 'CREATE_CATEGORY',
  UPDATE_CATEGORY = 'UPDATE_CATEGORY',
  DELETE_CATEGORY = 'DELETE_CATEGORY',
  UPDATE_ALL = 'UPDATE_ALL',
  REPLACE_ALL = 'REPLACE_ALL',
  DELETE_ALL = 'DELETE_ALL',
  RESET = 'RESET'
}

export interface ItemPayload extends Item {
  categoryId: string
}

export type CategoriesPayload =
  Partial<Category> |
  ItemPayload |
  {id: string} |
  Categories

export interface CategoryAction {
  type: CategoriesActions,
  payload?: CategoriesPayload
}

export const updaterCreator = (action: CategoriesActions, dispatch: Function) =>
  (payload: CategoriesPayload) =>
    ({target: {value: label}}: ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: action,
        payload: {...payload, label}
      })
    };

export const creatorCreator = (action: CategoriesActions, dispatch: Function) =>
  (payload: CategoriesPayload) =>
    (label: string) => {
      dispatch({
        type: action,
        payload: {...payload, label}
      })
    };

export const eraserCreator = (action: CategoriesActions, dispatch: Function) =>
  (payload: CategoriesPayload) =>
    () => {
      dispatch({
        type: action,
        payload
      })
    };
