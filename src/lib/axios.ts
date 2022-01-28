import axios, { AxiosResponse } from 'axios'

export const ResponseMessage = {
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
} as const

type MessageKey = keyof typeof ResponseMessage

export type MessageType = typeof ResponseMessage[MessageKey]

export class ApiResponse<T = any> {
  public type?: MessageType

  public data: T | undefined
}

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data) {
      return {
        data: response.data,
        type: ResponseMessage.SUCCESS,
      }
    }
    /*eslint-disable */
    return Promise.reject({
      type: ResponseMessage.ERROR,
      data: null,
    })
  },

  () =>
    Promise.reject({
      type: ResponseMessage.ERROR,
      data: null,
    }),
  /* eslint-enable */
)

export default axiosClient
