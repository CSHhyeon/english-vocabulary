
import styled from 'styled-components';
import { WordWrapper, WordNameAndNoun, WordName, WordNoun, WordDefinitionWrapper, ActionButton } from '../styles/Word.styles.jsx'
import { WordMeaningAndDefinition } from './WordDefinition';
import { AudioComponent } from './AudioComponent.jsx';
import { useVocaStore } from '../store/vocaStore';
import { usePageStore } from '../store/pageStore.jsx';
import { useTabStore } from '../store/tabStore.jsx';

export function Word({ word }) {  
  const { changeTab } = useTabStore();
  const { myVoca, addWord } = useVocaStore();
  const { setTotalPage } = usePageStore();

  const addToVocabulary = async (word)=>{
    if(myVoca.some(voca => voca.word === word.word)) return alert('이미 저장된 단어입니다.');

    const today = new Date();
    const addedTime = `${today.getFullYear()}. ${String(today.getMonth() + 1).padStart(2, '0')}. ${String(today.getDate()).padStart(2, '0')}`;

    // 단어 추가
    addWord({...word, addedTime});
    setTotalPage(myVoca.length);

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

const WordNameWrapper = styled.div`
  height: 100px;
  padding: 24px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;