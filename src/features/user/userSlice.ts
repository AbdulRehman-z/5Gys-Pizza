import { createSlice } from "@reduxjs/toolkit";
import { RootStateType } from "../../store";

const initialState = {
  username: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    updateUsername: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const getUsername = (state: RootStateType) => state.user.username;

export const { updateUsername } = userSlice.actions;
export default userSlice.reducer;

// import { getAddress } from "../../services/apiGeocoding";

// function getPosition() {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }

// async function fetchAddress() {
//   const positionObj = await getPosition();
//   const position = {
//     latitude: (positionObj as GeolocationPosition).coords.latitude,
//     longitude: (positionObj as GeolocationPosition).coords.longitude,
//   };

//   const addressObj = await getAddress(position);
//   const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

//   return { position, address };
// }
