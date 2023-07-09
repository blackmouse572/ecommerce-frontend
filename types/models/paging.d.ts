export interface IWithPaging<T> {
  results: T[],
  page: number,
  limit: number,
  totalResults: number,
  totalPages: number,
}
