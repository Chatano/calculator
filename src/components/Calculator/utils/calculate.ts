import { IAction } from "../data/actions";

export const calculate = (
  firstNum: number,
  secondNum: number,
  action?: IAction
) => {
  if (action === 'sum') {
    return(firstNum + secondNum)
  }
  if (action === 'multiplication') {
    return(firstNum * secondNum)
  }
  if (action === 'division') {
    return(firstNum / secondNum)
  }
  if (action === 'substraction') {
    return(firstNum - secondNum)
  }
  return null
}