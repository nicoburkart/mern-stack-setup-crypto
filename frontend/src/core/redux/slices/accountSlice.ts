import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface AccountState {
  name: string;
  publicAddress: string;
}

const initialState: AccountState = {
  name: '',
  publicAddress: '',
};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccountPublicAddress: (state, action: PayloadAction<string>) => {
      state.publicAddress = action.payload;
    },
    setAccountName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    resetAccount: (state) => {
      state.name = state.publicAddress = initialState.publicAddress;
    },
  },
});

export const { setAccountPublicAddress, setAccountName, resetAccount } =
  accountSlice.actions;

export const selectAccount = (state: RootState) => state.account.publicAddress;

export default accountSlice.reducer;
