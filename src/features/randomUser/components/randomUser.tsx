import React, { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { fetchRandomUser } from '../randomUserSlice'
import Paginator from './paginator'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { UserInformation } from '../../../models/UserModel'
import { PaginateParams } from '../../../models/PaginateModel'

const RandomUserList = () => {
  const [paginate, setPaginate] = useState<PaginateParams>({
    page: 1,
    results: 10,
  })
  const { userList, isLoading } = useAppSelector((state) => state.userReducer)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRandomUser(paginate))
  }, [paginate, dispatch])

  return (
    <div className="card p-10" data-testid="random-user-list">
      <div className="card-header" />
      <div className="card-body">
        <div className="card-block">
          <DataTable
            value={userList}
            stripedRows
            responsiveLayout="scroll"
            resizableColumns
            columnResizeMode="fit"
            showGridlines
            scrollable
            loading={isLoading}
          >
            <Column
              header="Full Name"
              className="text-center"
              body={(data: UserInformation) => (
                <div className="text-primary">{`${data.name.title} ${data.name.first} ${data.name.last}`}</div>
              )}
            />
            <Column field="login.username" header="Username" sortable />
            <Column
              align="center"
              header="Thumbnail"
              alignHeader="center"
              body={(data: UserInformation) => (
                <img alt={data.name.last} src={data.picture.thumbnail} srcSet={data.picture.medium} />
              )}
            />
          </DataTable>
          <Paginator setPaginate={setPaginate} />
        </div>
      </div>
    </div>
  )
}

export default RandomUserList
