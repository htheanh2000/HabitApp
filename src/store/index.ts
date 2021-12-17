import createSagaMiddleware from '@redux-saga/core';
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import mySaga from './sagas';
// ...
const rootReducer = combineReducers({})

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware] as const,
})

sagaMiddleware.run(mySaga)

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof rootReducer>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
