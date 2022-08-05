export type IAction = 'sum' | 'substraction' | 'multiplication' | 'division'

export const actions: Array<{ act: IAction, icon: string }> = [
  {
    act: 'division',
    icon: '÷'
  },
  {
    act: 'multiplication',
    icon: 'X'
  },
  {
    act: 'substraction',
    icon: '-'
  },
  {
    act: 'sum',
    icon: '+'
  },
]