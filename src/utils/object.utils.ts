//eslint-disable-next-line
export const isEmpty = (obj: any) =>
  obj === null ||
  obj === '' ||
  obj === undefined ||
  obj.length === 0 ||
  (Object.keys(obj).length === 0 && obj.constructor === Object);

//eslint-disable-next-line
export const getVal = (obj: any, defaultValue: any, ...args: any) => {
  //eslint-disable-next-line
  return args.reduce((obj1: any, level: any) => obj1 && obj1[level], obj) || defaultValue;
};
