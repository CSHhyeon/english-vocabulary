
import styled from 'styled-components';
import { use, useEffect, useState } from 'react'
import { WordMeaningAndDefinition } from './WordDefinition';
import { useVocaStore } from '../store/vocaStore';
import {
  WordWrapper, WordNameAndNoun, WordName, WordNoun, WordDefinitionWrapper, ActionButton
} from '../styles/Word.styles.jsx'

export function Word({ word }) {  
  const { myVoca, addWord } = useVocaStore();

  const addToVocabulary = async (word)=>{
    if(myVoca.some(voca => voca.word === word.word)) return alert('이미 저장된 단어입니다.');

    const today = new Date();
    const addedTime = `${today.getFullYear()}. ${String(today.getMonth() + 1).padStart(2, '0')}. ${String(today.getDate()).padStart(2, '0')}`;

    // 단어 추가
    addWord({...word, addedTime});
  };

  return (
    <WordWrapper>
      {/* 단어 이름, 발음 기호 */}
      <WordNameWrapper>
        <WordNameAndNoun>
          <WordName>{ word.word }</WordName>
          <WordNoun>{ word.phonetic }</WordNoun>
        </WordNameAndNoun>
        <ActionButton onClick={()=>{ addToVocabulary(word) }}>+  Add to Vocabulary</ActionButton>
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