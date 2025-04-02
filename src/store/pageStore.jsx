import { create } from "zustand";

export const usePageStore = create((set)=>({
  page: 0,

  // 입력값으로 페이지 변경
  setPage: (inputPage)=>
    set({ page: inputPage }),

  // 페이지 변경
  changePage: ()=>
    set((state)=>({
      page: state.page === 0 ? 1 : 0
    })),
}));