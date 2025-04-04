import { create } from "zustand";

// Search Words와 My Vocabulary 페이지 이동을 위한 전역 state
export const useTabStore = create((set)=>({
  tab: 0,

  // 입력값으로 페이지 변경
  setTab: (inputTab)=>
    set({ tab: inputTab }),

  // 페이지 변경
  changeTab: ()=>
    set((state)=>({
      tab: state.tab === 0 ? 1 : 0
    })),
}));