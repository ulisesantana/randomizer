export * from './dataHelper';
export * from './sectionHandler';

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

export function apply(initialData: any, ...rest: Function[]) {
  return rest.reduce((acc, fn) => fn(acc), initialData)
}

export function shuffle<T>(arr: T[]): T {
  return arr[
    Math.round(Math.random() * (arr.length - 1))
    ];
}