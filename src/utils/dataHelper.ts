import {Item} from "../types";

export function mapToID<T extends {id: string}>(x: T[]): Record<string, T> {
  return Object.values(x).reduce((acc, y) => ({...acc, [y.id]: y}), {})
}

export function sortByLabel(x: Item[]) {
  return x.sort(({label: aLabel}, {label: bLabel}) =>
    aLabel < bLabel
      ? -1
      : aLabel > bLabel
        ? 1
        : 0
  )
}

function removeById(id: string){
  return <T extends {id: string}>(x: T) => x.id !== id
}

export function filterById(id: string) {
  return <T extends Item>(x: T[]) => x.filter(removeById(id))
}