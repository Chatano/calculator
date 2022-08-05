import { useState } from "react"
import { 
  Container, 
  Display, 
  Buttons, 
  Numbers,
  TopActions,
  RightActions
} from "../../styles/components/Calculator"
import { Button } from "../Button";
import { actions, IAction } from "./data/actions";
import { numbers } from "./data/numbers";
import { calculate } from "./utils/calculate";
import { generateNum } from "./utils/generateNum";
import { renderDisplay } from "./utils/renderDisplayValue";

export const Calculator: React.FC = () => {
  const [action, setAction] = useState<IAction | undefined>()
  const [firstNum, setFirstNum] = useState(0)
  const [secondNum, setSecondNum] = useState(0)
  const [result, setResult] = useState<number | null>(null)

  const setCurrentNum = action ? setSecondNum : setFirstNum

  const clearAll = () => {
    setSecondNum(0)
    setFirstNum(0)
    setResult(null)
    setAction(undefined)
  }

  const clearCurrentNum = () => setCurrentNum(0)

  const charClick = (v: number) => setCurrentNum(p => generateNum.addOne(p, v))

  const deleteLastChar = () => setCurrentNum(generateNum.removeOne)

  return (
    <Container>
      <Display>
        {action && <span>{renderDisplay.subtitle(firstNum, secondNum, result, action)}</span>}
        <h1>{renderDisplay.title(firstNum, secondNum, result, action)}</h1>
      </Display>

      <Buttons>
        <TopActions>
          <Button value="C" onClick={clearAll} />
          <Button value="CE" onClick={clearCurrentNum} disabled={result !== null} />
          <Button value="←" onClick={deleteLastChar} disabled={result !== null} />
        </TopActions>

        <Numbers>
          {numbers.map(num => (
            <Button 
              key={num}
              value={num.toString()} 
              onClick={() => charClick(num)}
              disabled={result !== null}
            />
          ))}
        </Numbers>
        
        <RightActions>
          {actions.map(({icon, act}) => (
            <Button 
              key={act}
              value={icon} 
              onClick={() => setAction(act)} 
              disabled={!!action || result !== null} 
            />
          ))}
          
          <Button 
            value="=" 
            onClick={() => {
              setResult(calculate(firstNum, secondNum, action))
            }} 
            disabled={result !== null}
          />
        </RightActions>
      </Buttons>
    </Container>
  )
}