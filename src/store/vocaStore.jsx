import { create } from "zustand";  // 전역 state를 만들기 위함
import { persist } from "zustand/middleware";  // localStorage에 저장하기 위함! 이거 안 쓰면 App.jsx에서 useEffect 구현 필요

// persist 사용할 경우
export const useVocaStore = create(
  persist(
    (set) => ({
      myVoca: [],

      // 단어 추가
      addWord: (word)=>
        set((state)=>({
          myVoca: [word, ...state.myVoca]
        })),

      // 단어 삭제
      removeWord: (word)=>
        set((state)=>({
          myVoca: state.myVoca.filter((voca)=>voca.word !== word)
        })),

      // 단어장 대체
      setVocaList: (newVoca)=>
        set({ myVoca: newVoca }),
    }),
    {
      name: 'myVocabulary',  // localStorage Key 이름,
      getStorage: () => localStorage,
    }
  )
);

/* persist 사용하지 않은 경우 App.jsx에 구현

import { useRef } from 'react'

const { myVoca, setVocaList } = useVocaStore();
const isRestored = useRef(false); // 복원 완료 여부 체크 (타이밍 이슈 때문에 필요)
  
// 1. 먼저 localStorage에서 복원
useEffect(() => {
  const saved = localStorage.getItem('testing');
  if (saved) setVocaList(JSON.parse(saved));
}, []);
  
// 2. 복원이 완료되었을 떄만 저장
useEffect(() => {
  if (!isRestored.current) {
    isRestored.current = true;
    return; // 첫 myVoca 변경은 복원 직후 → 저장하지 말고 return (아니면 빈 값이 저장되어버림)
  }
  localStorage.setItem('testing', JSON.stringify(myVoca));
}, [myVoca]);

*/