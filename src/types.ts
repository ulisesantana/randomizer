export interface Item {
  id: string,
  label: string
}

export interface RawCategory extends Item {
  items: Item[]
}

export interface Category extends Item {
  items: Record<string, Item>
}

export type Categories = Record<string, Category>