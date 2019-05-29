import {Category, Item} from "../types";

export enum CategoryActions {
  CREATE_ITEM = 'CREATE_ITEM',
  UPDATE_ITEM = 'UPDATE_ITEM',
  DELETE_ITEM = 'DELETE_ITEM',
  CREATE_CATEGORY = 'CREATE_CATEGORY',
  UPDATE_CATEGORY = 'UPDATE_CATEGORY',
  DELETE_CATEGORY = 'DELETE_CATEGORY',
}

export interface ItemPayload extends Item {
  categoryId: string
}

export type CategoryPayload = Partial<Category> | ItemPayload | {id: string}

export interface CategoryAction {
  type: CategoryActions,
  payload: CategoryPayload
}