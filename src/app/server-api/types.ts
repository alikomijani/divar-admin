import { ReactNode } from "react";

export interface IPropertyOption {
  id: string;
  value: string;
  label: string;
}
export interface IProperty {
  id: string;
  name: string;
  type: string;
  label: string;
  options?: IPropertyOption[];
  createdAt: Date;
  updatedAt: Date;
}

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
export type ServerPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export interface Column<T extends { id: string }> {
  title: string;
  render: (row: T) => ReactNode;
}
