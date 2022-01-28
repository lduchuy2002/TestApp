import React from 'react'
import { Paginator, PaginatorPageState } from 'primereact/paginator'
import { PaginateParams } from '../../../models/PaginateModel'

export interface PaginatorProps {
  setPaginate: React.Dispatch<React.SetStateAction<PaginateParams>>
}

const CustomPaginator: React.FC<PaginatorProps> = ({ setPaginate }) => {
  const [first, setFirst] = React.useState<number>(1)
  const [rows, setRows] = React.useState<number>(10)
  const onBasicPageChange = (event: PaginatorPageState) => {
    setFirst(event.first)
    setRows(event.rows)
    setPaginate((prevState: PaginateParams) => ({ ...prevState, page: event.page + 1 }))
  }
  return (
    <div className="table-header-container my-5 text-center jumbotron" data-testid="paginator">
      <Paginator first={first} rows={rows} totalRecords={100} onPageChange={onBasicPageChange} />
    </div>
  )
}

export default CustomPaginator
