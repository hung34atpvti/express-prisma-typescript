export const isEmpty = (obj: any) =>
  obj === null ||
  obj === "" ||
  obj === undefined ||
  obj.length === 0 ||
  (Object.keys(obj).length === 0 && obj.constructor === Object);

export const getVal = (obj: any, defaultValue: any, ...args: any) =>
  args.reduce((obj1: any, level: any) => obj1 && obj1[level], obj) ||
  defaultValue;
