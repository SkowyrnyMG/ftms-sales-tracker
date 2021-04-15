// * Format number to a string and adds empty space as thousand separator
export const format = (num: number): string =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ');

// * Filter CSV data after some key value and creates new array of objects
export const filterRows = <T extends unknown>(
  filterData: T,
  filterTarget: string,
  filter: string,
): T[] | [] => {
  if (filterData instanceof Array) {
    return filterData.filter((pos) => pos[filterTarget] === filter);
  }
  return [];
};

// * Sum all values of keys which matches provided column name
export const sumColumn = <T extends unknown>(
  counterData: T,
  columnName: string,
): number => {
  if (counterData instanceof Array) {
    return counterData.reduce((acc, cur) => {
      Object.keys(cur).forEach((key) => {
        if (key !== columnName) return;
        acc += Number(cur[columnName]); // eslint-disable-line no-param-reassign
      });
      return acc;
    }, 0);
  }
  return 0;
};

//* Length of CSV array
export const countPositions = <T extends unknown>(counterData: T): number => {
  if (counterData instanceof Array) {
    return counterData.length;
  }
  return 0;
};
