import { ReactNode } from "react";

interface Timestamp {
  createdAt: string;
  updatedAt: string;
}
export interface IPropertyOption {
  id: string;
  value: string;
  label: string;
}
export interface IProperty extends Timestamp {
  id: string;
  name: string;
  type: string;
  label: string;
  options?: IPropertyOption[];
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
export interface ICategory extends Timestamp {
  titleEn: string;
  titleFa: string;
  slug: string;
  returnReasonAlert: string;
  properties: IProperty[];

  parent: ICategory;
  id: string;
}
export interface IBrand extends Timestamp {
  titleFa: string;
  titleEn: string;
  slug: string;
  logo: string;
  id: string;
}
export interface IBadge extends Timestamp {
  icon: string;
  title: string;
  id: string;
}
