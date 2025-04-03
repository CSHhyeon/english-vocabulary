import { create } from "zustand";

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