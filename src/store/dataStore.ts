import { create } from 'zustand'

const useStore = create((set) => ({
  active: false,
  changeActive: () => set((state: boolean) => ({ active: !state.active }))
}))

export default useStore
