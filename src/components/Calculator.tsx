import { useState } from "react"
import { 
  Container, 
  Display, 
  Buttons, 
  Numbers,
  TopActions,
  RightActions
} from "../styles/components/Calculator"
import { Button } from "./Button";

type IAction = 'sum' | 'substraction' | 'multiplication' | 'division'

const actions: Array<{ act: IAction, icon: string }> = [
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

const allNumbers = [...Array.from({length: 9}, (_, i) => i + 1), 0];

export const Calculator: React.FC = () => {
  const [action, setAction] = useState<IAction | undefined>()
  const [firstNum, setFirstNum] = useState(0)
  const [secondNum, setSecondNum] = useState(0)

  const clearEverything = () => {
    setSecondNum(0)
    setFirstNum(0)
    setAction(undefined)
  }

  const clearCurrentNum = () => {
    if (action) {
      setSecondNum(0)
      return;
    }
    setFirstNum(0)
  }

  const numberButtonClick = (value: number) => {
    if (action) {
      setSecondNum(prev => Number(`${prev}${value}`))
      return;
    }
    setFirstNum(prev => Number(`${prev}${value}`))
  }

  const deleteLastChar = () => {
    const genNum = (prev: number) => {
      return Number(`${prev}`.slice(0, -1))
    }
    if (action) {
      setSecondNum(genNum)
      return;
    }
    setFirstNum(genNum)
  }

  return (
    <Container>
      <Display>
        {action && <span>{firstNum}</span>}
        <h1>
          {action ? secondNum : firstNum}
        </h1>
      </Display>

      <Buttons>
        <TopActions>
          <Button value="CE" onClick={clearCurrentNum} />
          <Button value="C" onClick={clearEverything} />
          <Button value="←" onClick={deleteLastChar} />
        </TopActions>

        <Numbers>
          {allNumbers.map(num => (
            <Button 
              key={num}
              value={num.toString()} 
              onClick={() => numberButtonClick(num)}
            />
          ))}
        </Numbers>
        
        <RightActions>
          {actions.map(({icon, act}) => (
            <Button value={icon} onClick={() => setAction(act)} disabled={!!action} />
          ))}
          <Button value="=" />
        </RightActions>
      </Buttons>
    </Container>
  )
}