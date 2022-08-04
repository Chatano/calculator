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

const allNumbers = [...Array.from({length: 9}, (_, i) => i + 1), 0];

export const Calculator: React.FC = () => {
  const [firstNum, setFirstNum] = useState(0)
  
  const numberButtonClick = (value: number) => {
    setFirstNum(prev => Number(`${prev}${value}`))
  }

  return (
    <Container>
      <Display>
        <span>
          {firstNum}
        </span>
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
          <Button value="+" />
          <Button value="=" />
        </RightActions>
      </Buttons>
    </Container>
  )
}