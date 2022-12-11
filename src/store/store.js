// import { configureStore } from '@reduxjs/toolkit'
// import userReducer from './user'

// const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// })

// export default store

import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'user',
  storage,
}

const reducers = combineReducers({ user: userReducer })
const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  // facilite la gestion des fcts asynchrones
  middleware: [thunk],
})

export default store
