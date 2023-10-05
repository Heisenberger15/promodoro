import { isObject } from '@/utils/is';
import type { LocalStorageKey } from './ls.types';

export const ls = {
  get,
  set,
  remove,
  update,
  clearAll,
};

function get<T>(key: LocalStorageKey): T | undefined {
  try {
    const item: unknown = localStorage.getItem(key);
    return typeof item === 'string' && JSON.parse(item);
  } catch (error) {
    return undefined;
  }
}

function set(key: LocalStorageKey, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    return undefined;
  }
}

function update(key: LocalStorageKey, value: unknown): void {
  try {
    const storedValues = get(key) || {};
    if (!isObject(storedValues)) return set(key, value);

    if (isObject(value)) {
      return set(key, { ...storedValues, ...(value as object) });
    }
    return set(key, { ...storedValues, value });
  } catch (error) {
    return undefined;
  }
}

function remove(key: LocalStorageKey) {
  localStorage.removeItem(key);
}

function clearAll() {
  localStorage.clear();
}
