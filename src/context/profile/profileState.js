import React, { useReducer, useState } from "react";
import ProfileContext from "./profileContext";
import ProfileReducer from "./profileReducer";

const ProfileState = (props) => {
  const initialState = {
    profile: {},
    loading: true,
    error: null,
  };

  const [search, setSearch] = useState(null);

  const [state, dispatch] = useReducer(ProfileReducer, initialState);

  // local dispatcher
  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };

  // functions to be used into components that will trigger dispatch
  const getProfile = async (username = "Neosliver") => {
    setLoading();

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_TFT_API}/summoners/profile/${username}`,
        requestOptions
      );
      if (response.status === 400) {
        return dispatch({ type: "SET_ERROR", code: 400 });
      }
      if (response.status === 404) {
        return dispatch({ type: "SET_ERROR", code: 404 });
      }
      const profile = await response.json();
      dispatch({ type: "SET_PROFILE", profile });
    } catch (error) {
      dispatch({ type: "SET_ERROR", code: 400 });
    }
  };

  // renewProfile
  const renewProfile = async (name = "Neosliver") => {
    setLoading();
    await fetch(`${process.env.REACT_APP_TFT_API}/summoners/update/${name}`)
      .then((res) => res.json())
      .catch(() => {
        return "Error, unable to get info";
      });
    const profile = await fetch(
      `${process.env.REACT_APP_TFT_API}/summoners/profile/${name}`
    )
      .then((res) => res.json())
      .catch(() => {
        return "Error, unable to get info";
      });
    dispatch({ type: "SET_PROFILE", profile });
  };

  //clearState
  const clearState = () => {
    dispatch({ type: "CLEAR_STATE", initialState });
  };

  return (
    <ProfileContext.Provider
      value={{ state, getProfile, renewProfile, clearState, search, setSearch }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileState;
