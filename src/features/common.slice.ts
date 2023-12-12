import { createSlice, isFulfilled, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../app/store';
import { getEpubFile } from './common.api';
import { CommonState } from './common.types';


const initialState: CommonState = {
  // Elements of the state and their default values
  filePath: '',
  text: ''
}

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    // Synchronous actions to directly update state without api calls
    // updateViewState: (state, action: PayloadAction<ViewState>) => {
    //   state.currentView = action.payload;
    // },
    
  },
  extraReducers: (builder) => {
    // Asynchronous actions which have to ping the server
    builder.addCase(getEpubFile.fulfilled, (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    });

  }
});

// Export the selector so we don't have to import RootState in our components
export const commonSelector = (state: RootState) => state.common;

// Export the reducer actions
export const {  } = commonSlice.actions;

// Export the reducer
export default commonSlice.reducer;