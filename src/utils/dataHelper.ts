import {Item} from "../types";

export function mapToID<T extends {id: string}>(x: T[]): Record<string, T> {
  return Object.fromEntries(x.map(y => [y.id, y]));
}

export function sortByLabel(x: Item[]) {
  return x.sort((a, b) => a.label > b.label ? 1 : a.label < b.label ? -1 : 0)
}

function removeById(id: string){
  return <T extends {id: string}>(x: T) => x.id !== id
}

export function filterById(id: string) {
  return <T extends Item>(x: T[]) => x.filter(removeById(id))
}