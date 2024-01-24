import React from 'react'
import { ITable } from '../interface'
import Header from './Header'
import Body from './Body'

function Table({
  dataTestId,
  data,
  headers,
  loading,
  onRowClick,
  children,
}: ITable) {
  const headerKeys = headers.map((header) => header.id)

  const renderLoadingState = () => {
    if (loading) {
      if (Array.isArray(data) && data.length === 0) {
        return <span data-testid="loading">Loading</span>
      }
      return <span data-testid="no-data">No data found</span>
    }
    return null
  }

  return (
    <div data-testid={dataTestId} className="flex flex-col">
      <div className="overflow-x-auto scroll-smooth relative shadow-md sm:rounded-lg h-auto">
        <table className="w-full scroll-smooth text-sm text-left text-gray-500">
          <Header headers={headers} />
          <Body
            data={data}
            headerKeys={headerKeys}
            onRowClick={onRowClick}
            loading={loading}
          >
            {children}
          </Body>
        </table>

        {renderLoadingState()}
      </div>
    </div>
  )
}

Table.defaultProps = {
  children: null,
  loading: null,
  data: [],
  headers: [],
}

export default Table
