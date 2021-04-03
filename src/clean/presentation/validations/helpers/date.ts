export const transform = (value = '') => {
  if (!value) return undefined
  const date = value?.split('/').reverse().join('-')
  return new Date(date)
}
