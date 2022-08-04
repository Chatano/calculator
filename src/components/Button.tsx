import { 
  Container, 
} from "../styles/components/Button"

type IProps = {
  value: string
  onClick?: () => void
  disabled?: boolean;
}

export const Button: React.FC<IProps> = ({ value, onClick, disabled }) => {
  return (
    <Container type="button" onClick={onClick} disabled={disabled}>
      {value}
    </Container>
  )
}