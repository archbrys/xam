import React, { useMemo } from 'react'
import Table from '../../../common/Table'
import { ITableData } from '../../../common/Table/interface'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { removeUser, selectUsers } from '../../../features/user/userSlice'
import { OtherProperties, USERS_TABLE_HEADER } from '../constant'
import Button from '../../../common/Button'
import { IUser } from '../interface'

function UserTable() {
  const users = useAppSelector(selectUsers)
  const dispatch = useAppDispatch()
  const sanitizeData = useMemo(
    (): ITableData[] =>
      users.map((user, index) => {
        const sanitizeUser: ITableData = {
          ...(user as unknown as ITableData),
          number: index + 1,
        }

        return sanitizeUser
      }),
    [users]
  )

  const handleRemove = (
    user: IUser,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
    dispatch(removeUser(user))
  }

  const sanitizeTableData = (data: ITableData, key: string) => {
    switch (key) {
      case OtherProperties.Name: {
        return `${data.firstName} ${data.middleName.charAt(0).toUpperCase()}. ${
          data.lastName
        }`
      }

      case OtherProperties.Action: {
        const user = data as unknown as IUser
        return (
          <Button
            type="submit"
            size="md"
            buttonStyle="light"
            onClick={(e) => handleRemove(user, e)}
          >
            Remove
          </Button>
        )
      }

      default:
        return data[key]
    }
  }

  return (
    <section className="bg-gray-5 flex-1">
      <Table
        dataTestId="users-table"
        data={sanitizeData}
        headers={USERS_TABLE_HEADER}
        loading={false}
      >
        {{
          [OtherProperties.Name]: (data: ITableData) =>
            sanitizeTableData(data, OtherProperties.Name),
          [OtherProperties.Action]: (data: ITableData) =>
            sanitizeTableData(data, OtherProperties.Action),
        }}
      </Table>
    </section>
  )
}

export default UserTable
