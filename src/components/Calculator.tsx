import { useState } from "react"
import { Container, Display } from "../styles/components/Calculator"

export const Calculator: React.FC = () => {
  const [currentResult, setCurrentResult] = useState(0)

  return (
    <Container>
      <Display>
        <span>{currentResult}</span>
      </Display>
    </Container>
  )
}