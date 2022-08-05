import { actions, IAction } from "../data/actions";

type IResult = number | null

export const renderDisplay = {
  subtitle: (fst: number, scnd: number, result: IResult, act?: IAction) => {
    return `
      ${fst} ${actions.find(({act: _act}) => _act === act)?.icon} ${result !== null ? scnd : ''}
    `;
  },

  title: (fst: number, scnd: number, result: IResult, act?: IAction) => {
    if (result)
      return result.toString()
    
    return act ? scnd.toString() : fst.toString()
  }
}