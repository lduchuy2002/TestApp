import axiosClient, { ApiResponse } from '../lib/axios'
import { PaginateParams } from '../models/PaginateModel'
import ResultResponse from '../models/UserModel'

const getRandomUser = async ({ page, results }: PaginateParams): Promise<ApiResponse<ResultResponse>> =>
  axiosClient.get(`/api/?page=${page}&results=${results}`)

export default getRandomUser
