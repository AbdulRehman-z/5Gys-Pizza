import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootStateType } from "../../store";
import { getAddress } from "../../services/apiGeocoding";

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchAddress = createAsyncThunk("user/fetchAddress", async () => {
  const positionObj = await getPosition();
  const position = {
    latitude: (positionObj as GeolocationPosition).coords.latitude,
    longitude: (positionObj as GeolocationPosition).coords.longitude,
  };

  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  return { position, address };
});

// type InitialStateType = {};

const initialState = {
  username: "",
  status: "idle",
  position: {},
  address: "",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    updateUsername: (state, action) => {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.status = "idle";
        state.address = action.payload.address;
        state.position = action.payload.position;
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = "error";
        state.error = "failed to fetch user location";
      }),
});

export const getUsername = (state: RootStateType) => state.user.username;

export const { updateUsername } = userSlice.actions;
export default userSlice.reducer;
