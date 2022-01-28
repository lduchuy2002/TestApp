import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import getRandomUser from '../../api/userApi'
import { PaginateParams } from '../../models/PaginateModel'
import { UserInformation } from '../../models/UserModel'
import { RandomUserState } from './type'

const initialRandomUserState: RandomUserState = {
  userList: [],
  isLoading: false,
}

export const fetchRandomUser = createAsyncThunk('user/fetchRandom', async (params: PaginateParams) => {
  const response = await getRandomUser(params)
  return response.data?.results
})

const randomUserSlice = createSlice({
  name: 'RandomUserState',
  initialState: initialRandomUserState,
  reducers: {
    sortUserListAction: (state: RandomUserState) => {
      const userListSorted = state.userList.sort((a: UserInformation, b: UserInformation) => {
        if (a.login.username < b.login.username) {
          return -1
        }
        if (a.login.username > b.login.username) {
          return 1
        }
        return 0
      })
      state.userList = [...userListSorted]
      return state
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<RandomUserState>): void => {
    builder
      .addCase(fetchRandomUser.pending, (state: RandomUserState) => {
        state.isLoading = true
        return state
      })
      .addCase(fetchRandomUser.fulfilled, (state: RandomUserState, action) => {
        state.userList = action.payload || []
        state.isLoading = false
        return state
      })
      .addCase(fetchRandomUser.rejected, (state: RandomUserState) => {
        state.isLoading = false
        return state
      })
  },
})

export default randomUserSlice
