export interface Item {
  id: string,
  label: string
}

export interface RawCategory extends Item {
  items: Item[]
}

export interface Category extends Item {
  items: {[key: string]: Item}
}

export interface Categories {
  [p: string]: Category
}