import styled from 'styled-components'
import { TitleWrapper, TabWrapper, SectionWrapper, TabButton } from './styles/Header.styles'
import { MyVocabulary } from './components/MyVocabulary'
import { SearchWords } from './components/SearchWords'
import { useVocaStore } from './store/vocaStore'
import { use, useState } from 'react'
import './App.css'

function App() {
  const [page, setPage] = useState(0);
  const { myVoca } = useVocaStore();

  return (
    <>
      <TitleWrapper>English Vocabulary Notebook</TitleWrapper>
      <TabWrapper>
        <TabButton $active={page === 0} onClick={ ()=>{ setPage(0) }}>Search Words</TabButton>
        <TabButton $active={page === 1} onClick={ ()=>{ setPage(1) }}>My Vocabulary ({myVoca.length})</TabButton>
      </TabWrapper>

      <SectionWrapper>
        {
          page === 0 ? <SearchWords/> : <MyVocabulary/>
        }
      </SectionWrapper>
    </>
  );
}

export default App
