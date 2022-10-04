import { useState } from "react";
import { FlatList } from "react-native";
import * as S from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Delta', 'Bravos', 'Alpha']);

  return (
    <S.Container >
      <Header showBackButton />
      <Highlight title='Turmas' subtitle='Jogue com sua turma' />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard title={item} />
        )}
      />
    </S.Container>
  )
}