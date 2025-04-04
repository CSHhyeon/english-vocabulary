import { create } from "zustand";  // 전역 state를 만들기 위함 (redux 사용하지 않기 위해서 zustand 사용함)
import { persist } from "zustand/middleware";  // localStorage에 저장하기 위함! 이거 안 쓰면 App.jsx에서 useEffect 구현 필요
import { updatePageAfterAdd, updatePageAfterDelete } from "./pageStore";

// 단어를 저장하기 위한 전역 state
// persist 사용할 경우
export const useVocaStore = create(
  persist(
    (set, get) => ({
      myVoca: [],

      // 단어 추가
      addWord: (word) => {
        const newVoca = [word, ...get().myVoca];
        set({ myVoca: newVoca });
        updatePageAfterAdd(newVoca.length);
      },

      // 단어 삭제
      removeWord: (word)=> {
        const newVoca = get().myVoca.filter((voca)=>voca.word !== word);
        set({ myVoca: newVoca });
        updatePageAfterDelete(newVoca.length);
      },
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