import thunkMiddleware from 'redux-thunk'

export interface IService {
  exampleService: {}
}

export const middleware = [
  thunkMiddleware.withExtraArgument<IService>({
    exampleService: {},
  }),
]
