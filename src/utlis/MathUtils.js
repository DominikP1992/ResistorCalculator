export const nFormatter = (num) => {
  const G = 10 ** 9;
  const M = 10 ** 6;
  const K = 10 ** 3;
  if (num >= G) {
    return `${(num / G).toFixed(1).replace(/\.0$/, '')}G`;
  }
  if (num >= M) {
    return `${(num / M).toFixed(1).replace(/\.0$/, '')}M`;
  }
  if (num >= K) {
    return `${(num / K).toFixed(1).replace(/\.0$/, '')}k`;
  }
  return num.toFixed(1);
};

