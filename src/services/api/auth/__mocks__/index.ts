import { ISigninData } from '../model'

export const signinMockData: ISigninData = {
  token: 'MOCK JWT',
}

export const signin = jest.fn(() => ({ data: signinMockData }))
