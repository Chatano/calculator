import { Calculator } from "../components/Calculator";
import { Container } from "../styles/pages/Home";

export const Home = () => {
  return (
    <Container>
      <h1>Calculator App</h1>
      <Calculator />
    </Container>
  );
}
