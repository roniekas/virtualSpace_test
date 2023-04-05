export const getSize = (size) => {
  let fixedSize;

  if (size === 'xs') {
    fixedSize = 50
  } else if (size === 'sm') {
    fixedSize = 100
  } else if (size === 'md') {
    fixedSize = 150
  } else if (size === 'lg') {
    fixedSize = 200
  } else {
    fixedSize = 100
  }
  return fixedSize;
}