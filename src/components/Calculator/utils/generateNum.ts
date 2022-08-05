export const generateNum = {
  removeOne: (prev: number) => Number(`${prev}`.slice(0, -1)),
  addOne: (prev: number, value: number) => Number(`${prev}${value}`)
}