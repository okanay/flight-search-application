import { configureStore } from '@reduxjs/toolkit'
import SliceReducer from './slices/Document/Slice'

export default configureStore({
   reducer: {
      slice: SliceReducer,
   },
})
