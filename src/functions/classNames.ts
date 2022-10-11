export default function classNames(...styles: Array<unknown>) {
  return styles.filter(item => item).join(" ");
}
