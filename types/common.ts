export type StartWithSlash<T extends string | number = string> = `/${T}`;
export type RequireField<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type Nullable<T> = T | null;
