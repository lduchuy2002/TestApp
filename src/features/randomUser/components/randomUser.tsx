import React, { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button'
import { fetchRandomUser } from '../randomUserSlice'
import Paginator from './paginator'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { UserInformation } from '../../../models/UserModel'
import { PaginateParams } from '../../../models/PaginateModel'
import { sortUserListAction } from '../action'

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

  const onSortClick = (): void => {
    dispatch(sortUserListAction())
  }
  return (
    <div className="card p-10" data-testid="random-user-list">
      <div className="card-header">
        <h2 className="card-title text-left fw-900 my-3">
          <Button
            icon="pi pi-sort-alpha-down"
            label="Sort Username"
            className="ml-2 p-button-success"
            onClick={onSortClick}
          />
        </h2>
      </div>
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
            scrollHeight="300px"
            loading={isLoading}
          >
            <Column
              header="Full Name"
              className="text-center"
              body={(data: UserInformation) => (
                <div className="text-primary">{`${data.name.title} ${data.name.first} ${data.name.last}`}</div>
              )}
            />
            <Column field="login.username" header="Username" />
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
