// 전역 state를 만들기 위함
import { create } from "zustand";

export const useVocaStore = create((set)=>({
  myVocaList: [],

  // 단어 추가
  addWord: (word)=>
    set((state)=>({
      myVocaList: [word, ...state.myVocaList]
    })),

  // 단어 삭제
  removeWord: (word)=>
    set((state)=>({
      myVocaList: state.myVocaList.filter((voca)=>voca.word !== word)
    })),

  // 단어장 대체
  setVocaList: (newVoca)=>
    set({ myVocaList: newVoca }),
}));