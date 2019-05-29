export const isMobile = () => window.innerWidth < 768;

export function mapToID<T extends {id: string}>(x: T[]) {
  return x.reduce((acc, y) => ({...acc, [y.id]: y}), {})
}

export function removeById(id: string){
  return <T extends {id: string}>(x: T) => x.id !== id
}