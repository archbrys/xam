export interface ITable extends IHeader {
  dataTestId: string
  data: ITableData[] | ITableData[][]
  loading: boolean
  children?: any
  onRowClick?: (data: ITableData) => void
}

export interface ITableHeader {
  id: string
  name: string
}

export interface ITableData {
  id: string
  [key: string]: any
}

export interface IBody {
  data: ITableData[] | ITableData[][]
  headerKeys: string[]
  children?: any
  onRowClick?: (data: ITableData) => void
  loading?: boolean
}

export interface IRow {
  rowData: ITableData
  headerKeys: string[]
  children?: any
  onRowClick?: (data: ITableData) => void
}

export interface IHeader {
  headers: ITableHeader[]
}
