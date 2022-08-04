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

type IAction = 'sum'

const actions = {
  sum: '+',
  substraction: '-',
  multiplication: 'X',
  division: '÷',
}

const allNumbers = [...Array.from({length: 9}, (_, i) => i + 1), 0];

export const Calculator: React.FC = () => {
  const [action, setAction] = useState<IAction | undefined>()
  const [firstNum, setFirstNum] = useState(0)
  const [secondNum, setSecondNum] = useState(0)

  const numberButtonClick = (value: number) => {
    if (action) {
      setSecondNum(prev => Number(`${prev}${value}`))
      return;
    }
    setFirstNum(prev => Number(`${prev}${value}`))
  }

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
          <Button value="←" />
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
          <Button value="÷" disabled={!!action} />
          <Button value="X" disabled={!!action} />
          <Button value="-" disabled={!!action} />
          <Button value="+" disabled={!!action} onClick={() => setAction('sum')} />
          <Button value="=" />
        </RightActions>
      </Buttons>
    </Container>
  )
}