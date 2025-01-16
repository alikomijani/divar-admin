export interface ICity {
  name: string;
  code: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface PaginatedResultApi<T> {
  results: Array<T>;
  total: number;
  totalPages: number;
  page: number;
  pageSize: number;
}
