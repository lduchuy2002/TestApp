import { PayloadAction } from '@reduxjs/toolkit'
import { UserInformation } from '../../models/UserModel'

export interface RandomUserState {
  userList: UserInformation[]
  isLoading: boolean
}

export type GetRandomUserAction = PayloadAction<UserInformation[]>
