/* eslint-disable unicorn/no-array-reduce */
export type DirtyFieldsType =
  | boolean
  | null
  | {
      [key: string]: DirtyFieldsType;
    }
  | DirtyFieldsType[];

export function getDirtyValues<T extends Record<string, any>>(
  dirtyFields: Partial<Record<keyof T, DirtyFieldsType>>,
  values: T
): Partial<T> {
  const dirtyValues = Object.keys(dirtyFields).reduce((prev, key) => {
    const value = dirtyFields[key];
    if (!value) {
      return prev;
    }
    const isObject = typeof value === 'object';
    const isArray = Array.isArray(value);
    const nestedValue =
      isObject && !isArray
        ? getDirtyValues(value as Record<string, any>, values[key])
        : values[key];
    return { ...prev, [key]: isArray ? values[key] : nestedValue };
  }, {} as Partial<T>);
  return dirtyValues;
}

export function clearEmpties(o: { [x: string]: any }) {
  for (const k in o) {
    if (!o[k] || typeof o[k] !== 'object') {
      continue; // If null or not an object, skip to the next iteration
    }

    // The property is an object
    clearEmpties(o[k]); // <-- Make a recursive call on the nested object
    if (Object.keys(o[k]).length === 0) {
      delete o[k]; // The object had no properties, so delete that property
    }
  }
  return o;
}
