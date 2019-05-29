import {Categories, Category, Item} from "../types";

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
  RESET = 'RESET',
}

export interface ItemPayload extends Item {
  categoryId: string
}

export type CategoriesPayload = Partial<Category> | ItemPayload | {id: string} | Categories

export interface CategoryAction {
  type: CategoriesActions,
  payload?: CategoriesPayload
}