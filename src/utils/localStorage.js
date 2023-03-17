// export const getLocalStorage = (data, setData, localStorageOutput) => {
//   if (!JSON.parse(localStorage.getItem(localStorageOutput))) {
//     setData(JSON.parse(localStorage.getItem(data)));
//   }
// };
export const getLocalStorage = localStorageOutput => {
  // if (!JSON.parse(localStorage.getItem(localStorageOutput))) {
  //   setData(JSON.parse(localStorage.getItem(data)));
  // }

  return JSON.parse(localStorage.getItem(localStorageOutput));
};

export const setLocalStorage = (data, localStorageInput) =>
  localStorage.setItem(localStorageInput, JSON.stringify(data));
