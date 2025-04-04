
import styled from 'styled-components';
import { WordWrapper, WordNameAndNoun, WordName, WordNoun, WordDefinitionWrapper, ActionButton, SpeechWrapper, ExampleText } from '../styles/Word.styles.jsx'
import { AudioComponent } from './AudioComponent.jsx';
import { useVocaStore } from '../store/vocaStore';
import { useTabStore } from '../store/tabStore.jsx';

// 검색된 단어 정보 컴포넌트
export function Word({ word }) {  
  const { changeTab } = useTabStore();
  const { myVoca, addWord } = useVocaStore();

  const addToVocabulary = async (word)=>{
    if(myVoca.some(voca => voca.word === word.word)) return alert('이미 저장된 단어입니다.');

    const today = new Date();
    const addedTime = `${today.getFullYear()}. ${String(today.getMonth() + 1).padStart(2, '0')}. ${String(today.getDate()).padStart(2, '0')}`;

    // 단어 추가
    addWord({...word, addedTime});

    // 단어장으로 페이지 변경
    changeTab();
  };

  return (
    <WordWrapper>
      {/* 단어 이름, 발음 기호 */}
      <WordNameWrapper>
        <WordNameAndNoun>
          <WordName>
            <span>{ word.word }</span>
            <AudioComponent phonetics={ word.phonetics }/>
          </WordName>
          <WordNoun>{ word.phonetic }</WordNoun>
        </WordNameAndNoun>
        <ActionButton onClick={()=>{ addToVocabulary(word) }}>
          <i className="fas fa-plus white-icon"></i>
          <span>Add to Vocabulary</span>
        </ActionButton>
      </WordNameWrapper>

      {/* 단어 품사별 뜻 */}
      <WordDefinitionWrapper> 
        {
          word.meanings.map(function(meaning, i) {
            return (
              <WordMeaningAndDefinition meaning={meaning} i={i} key={i}/>
            );
          })
        }
      </WordDefinitionWrapper>
    </WordWrapper>
  );
}

// 단어 품사별 뜻 & 예문 컴포넌트
function WordMeaningAndDefinition({ meaning, i }) {
  return (
    <MeaningBlock $isNotFirst={i > 0}>
      <SpeechWrapper>{ meaning.partOfSpeech }</SpeechWrapper>
      <DefinitionWrapper>
        {meaning.definitions.slice(0, 3).map((def, i) => (
          <li key={i}>
            { def.definition }
            { def.example && <ExampleText>"{ def.example }"</ExampleText> }
          </li>
        ))}
      </DefinitionWrapper>
    </MeaningBlock>
  );
}

const WordNameWrapper = styled.div`
  height: 100px;
  padding: 24px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MeaningBlock = styled.div`
  margin-top: ${(props) => (props.$isNotFirst ? '16px' : '0px')};
`;

const DefinitionWrapper = styled.ol`
  margin: 8px 0px 0px;
  padding: 0px 0px 0px 20px;

  li {
    margin-top: 8px;
  }
`;