import styled from 'styled-components';
import { WordNameWrapper, WordNameAndNoun, WordName, WordNoun, WordDefinitionWrapper, ActionButton, SpeechWrapper, ExampleText } from '../styles/Word.styles.jsx';
import { MyVocaPagination } from './MyVocaPagination.jsx';
import { AudioComponent } from './AudioComponent.jsx';
import { useVocaStore } from '../store/vocaStore';
import { usePageStore } from '../store/pageStore.jsx';

export function MyVocabulary() {
  const { myVoca } = useVocaStore();
  return myVoca.length === 0 ? <NoVoca/> : <VocaList/>;
}

function NoVoca() {
  return(
    <NoVocaWrapper>
      <NoVocaText>
        Your vocabulary list is empty. Search and add words to build your collection.
      </NoVocaText>
    </NoVocaWrapper>
  );
}

function VocaList() {
  const { myVoca, removeWord } = useVocaStore();
  const { vocaPerPage, currentPage } = usePageStore();

  return(
    <VocaListWrapper>
      {
        myVoca.slice(vocaPerPage *(currentPage - 1), vocaPerPage * currentPage).map(function(word, i) {
          return (
            <VocaWrapper key={`${word.word}-${i}`}>
              <WordNameWrapper>
                <WordNameAndNoun>
                  <WordName>
                    <span>{ word.word }</span>
                    <AudioComponent phonetics={ word.phonetics }/>
                  </WordName>
                  <WordNoun>{ word.phonetic }</WordNoun>
                </WordNameAndNoun>
                <ActionButton $danger onClick={ ()=>{ removeWord(word.word) }}>
                  <i className="fas fa-trash"></i>
                </ActionButton>
              </WordNameWrapper>

              <WordDefinitionWrapper>
                <SpeechWrapper>{ word.meanings[0].partOfSpeech }</SpeechWrapper>
                <DefinitionWrapper>
                  { word.meanings[0].definitions[0].definition }
                  { word.meanings[0].definitions[0].example && <ExampleText>"{ word.meanings[0].definitions[0].example }"</ExampleText> }
                </DefinitionWrapper>
              </WordDefinitionWrapper>

              <AddedTimeWrapper>Added: { word.addedTime }</AddedTimeWrapper>
            </VocaWrapper>
          )
        })
      }
      <MyVocaPagination/>
    </VocaListWrapper>
  );
}

const NoVocaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 48px 0px;
`;

const NoVocaText = styled.p`
  color: #737373;
  font-size: 16px;
`;

const VocaListWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 15px;
`;

const VocaWrapper = styled.div`
  border: 1px solid #E5E5E5;
  border-radius: 4px;
`;

const DefinitionWrapper = styled.div`
  font-size: 16px;
  margin: 4px 0px 0px;
`;

const AddedTimeWrapper = styled.div`
  color: #737373;
  font-size: 12px;
  padding: 0px 24px 24px;
`;