import { 
  Container, 
} from "../styles/components/Button"

type IProps = {
  value: string
  onClick?: () => void
}

export const Button: React.FC<IProps> = ({ value, onClick }) => {
  return (
    <Container type="button" onClick={onClick}>
      {value}
    </Container>
  )
}