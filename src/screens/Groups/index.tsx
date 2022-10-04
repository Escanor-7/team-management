import * as S from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";

export function Groups() {
  return (
    <S.Container >
      <Header showBackButton />
      <Highlight title='Turmas' subtitle='Jogue com sua turma' />
      <GroupCard title='Galera do Ignite' />
    </S.Container>
  )
}