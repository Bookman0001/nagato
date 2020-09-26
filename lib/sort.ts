export const sortWithProp = (name: 'published', reversed: boolean) => (
  a,
  b
) => {
  if (reversed) {
    return a[name] < b[name] ? 1 : -1
  } else {
    return a[name] < b[name] ? -1 : 1
  }
}
