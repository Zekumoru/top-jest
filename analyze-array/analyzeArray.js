function analyzeArray(array) {
  return {
    average: getAverage(array),
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}

function getAverage(array) {
  if (!array.length) return;

  const sum = array.reduce((prev, cur) => prev + cur, 0);
  return sum / array.length;
}

export default analyzeArray;
