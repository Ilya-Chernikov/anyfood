function getKeyForStorage(a, b) {
  return `${a} ${b}`;
}

export const veryDifficultCalculation = (() => {
  const storage = {
    params: [],
    value: null,
  };

  return (...args) => {
    if (args.every((value, index) => storage.params[index] === value)) {
      console.log(`return from storage for a: ${args[0]} b: ${args[1]}`);
      return storage.value;
    }

    const [a, b] = args;

    console.log(`calculate new result for a: ${a} b: ${b}`);
    const result = a * b;

    storage.params = { ...args };
    storage.value = result;

    return storage.value;
  };
})();

// export const veryDifficultCalculation = (a) => {
//   console.log("calculate new result for ", a);
//   const result = a * a;
//
//   return result;
// };
