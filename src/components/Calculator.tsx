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

const allNumbers = [...Array.from({length: 9}, (_, i) => i + 1), 0];

export const Calculator: React.FC = () => {
  const [action, setAction] = useState<IAction>()
  const [firstNum, setFirstNum] = useState(0)
  const [secondNum, setSecondNum] = useState(0)

  const numberButtonClick = (value: number) => {
    if (action) {
      setSecondNum(prev => Number(`${prev}${value}`))
      return;
    }
    setFirstNum(prev => Number(`${prev}${value}`))
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
          <Button value="CE" />
          <Button value="C" />
          <Button value="←" />
          <Button value="÷" />
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
          <Button value="X" />
          <Button value="-" />
          <Button value="+" onClick={() => setAction('sum')} />
          <Button value="=" />
        </RightActions>
      </Buttons>
    </Container>
  )
}