export default function classNames(styles: Array<string>) {
  return styles.filter(item => item).join(' ');
}