export interface Info {
  seed: string
  results: number
  page: number
  version: string
}

export type Dob = {
  age: number
  date: string
}

export type UserId = {
  name: string
  value: string
}

export type Name = {
  first: string
  last: string
  title: string
}

export type PictureInformation = {
  large: string
  medium: string
  thumbnail: string
}

export interface UserInformation {
  cell: string
  dob: Dob
  email: string
  gender: keyof typeof gender
  id: UserId
  location: Record<string, any>
  login: LoginInformation
  name: Name
  nat: string
  phone: string
  picture: PictureInformation
  registered: Record<string, any>
}

export const gender = {
  MALE: 'male',
  FEMALE: 'female',
} as const

export default interface ResultResponse {
  results: UserInformation[]
  info: Info
}

export interface LoginInformation {
  md5: string
  password: string
  salt: string
  sha1: string
  sha256: string
  username: string
  uuid: string
}
