import React from 'react'
import { IHeader, ITableHeader } from '../interface'

function Header({ headers }: IHeader) {
  const renderHeaderCell = (key: string, headerCell: ITableHeader) => (
    <th scope="col" className="px-6 py-3" key={key}>
      <span>{headerCell.name}</span>
    </th>
  )

  return (
    <thead
      data-testid="table-header"
      className="text-xs text-gray-700 uppercase bg-gray-50 sticky top-0"
    >
      <tr>
        {headers.map((headerCell) =>
          renderHeaderCell(headerCell.id, headerCell)
        )}
      </tr>
    </thead>
  )
}

Header.defaultProps = {
  headers: [],
}

export default Header
