export function simulateLoading(second: number) {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve(null);
    }, second * 1000)
  );
}