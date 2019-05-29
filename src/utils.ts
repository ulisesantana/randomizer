export const isMobile = () => window.innerWidth < 768;

export function mapToID<T extends {id: string}>(x: T[]) {
  return x.reduce((acc, y) => ({...acc, [y.id]: y}), {})
}

export function removeById(id: string){
  return <T extends {id: string}>(x: T) => x.id !== id
}

export const copyToClipboard = (str: string) => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected =
    document.getSelection()!.rangeCount > 0
      ? document.getSelection()!.getRangeAt(0)
      : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection()!.removeAllRanges();
    document.getSelection()!.addRange(selected);
  }
};