import { Container, Content, Icon } from "./styles";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";

export function NewGroup() {

  return (
    <Container>
      <Header />
      <Content>
        <Icon />
        <Highlight
          title='Nova turma'
          subtitle='Crie turma para adicionar as pessoas'
        />
        <Button title='Criar' />
      </Content>
    </Container>
  )
}