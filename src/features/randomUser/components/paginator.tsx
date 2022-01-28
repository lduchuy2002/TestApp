import React from 'react'
import { Button } from 'primereact/button'
import { PaginateParams } from '../../../models/PaginateModel'

export interface PaginatorProps {
  setPaginate: React.Dispatch<React.SetStateAction<PaginateParams>>
}

const Paginator: React.FC<PaginatorProps> = ({ setPaginate }) => {
  const onPrevCLick = (): void => {
    setPaginate((prevState: PaginateParams) => {
      if (prevState.page === 1) {
        return prevState
      }
      return {
        ...prevState,
        page: prevState.page - 1,
      }
    })
  }

  const onNextCLick = (): void => {
    setPaginate((prevState: PaginateParams) => ({
      ...prevState,
      page: prevState.page + 1,
    }))
  }

  return (
    <div className="table-header-container my-5 text-center" data-testid="paginator">
      <Button icon="pi pi-angle-left" onClick={onPrevCLick} />
      <Button icon="pi pi-angle-right" onClick={onNextCLick} className="ms-2" />
    </div>
  )
}

export default Paginator
