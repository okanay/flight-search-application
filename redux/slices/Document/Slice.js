import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
   id: 0,
   posts: [],
   loading: false,
   error: {
      status: false,
      message: '',
   },
}
export const DummyURL = 'https://dummyjson.com/products'
export const asyncSliceFetch = createAsyncThunk('slice/asyncSliceFetch', (_, thunkAPI) => {
   console.log(thunkAPI.getState())

   return fetch(DummyURL)
      .then(resp => resp.json())
      .catch(error => console.log(error))
})
export const Slice = createSlice({
   name: 'slice',
   initialState,
   reducers: {
      toggleSlice: state => {
         state.loading = !state.loading
      },
      setSlice: (state, action) => {
         state.loading = action.payload
      },
      setPayload: {
         reducer: (state, action) => {
            return { ...action.payload }
         },
         prepare() {
            return {
               payload: {
                  id: nanoid(),
                  posts: [],
                  loading: false,
                  error: {
                     status: false,
                     message: '',
                  },
               },
            }
         },
      },
   },
   extraReducers: builder => {
      builder
         .addCase(asyncSliceFetch.pending, state => {
            state.loading = true
         })
         .addCase(asyncSliceFetch.rejected, state => {
            state.error = {
               status: true,
               message: 'Fetch fail.',
            }
         })
         .addCase(asyncSliceFetch.fulfilled, (state, action) => {
            state.posts = action.payload
            state.loading = false
            state.error = {
               status: false,
               message: '',
            }
         })
   },
})

export const getSlice = state => state.slice
export const getSlicePosts = state => state.slice.posts
export const getSliceLoading = state => state.slice.loading
export const getSliceError = state => state.slice.error.status
export const getSliceErrorMessage = state => state.slice.error.message
export const { toggleSlice, setSlice, setPayload } = Slice.actions
export default Slice.reducer
