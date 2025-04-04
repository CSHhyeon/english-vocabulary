export const useLocalStorage = () => {
  const save = (key, item) => {
    localStorage.setItem(key, JSON.stringify(item));
  };

  const load = (key) => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : '';
  }

  return { save, load };
};