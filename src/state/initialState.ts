import {categories} from './data';
import {StoreService} from "../services";
import {Categories} from "../types";
import {NAMESPACE} from "../constants";

export function getInitialState(): Categories {
  const cache = StoreService.get(NAMESPACE);
  if (!!cache) {
    return cache as Categories;
  } else {
    return categories;
  }
}