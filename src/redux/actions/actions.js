export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const DATA_STORAGE = "DATA_STORAGE";
export const DATA_FAILURE = "DATA_FAILURE";

const addToFavourite = () => {
  return {
    type: REMOVE_FROM_FAVOURITE,
  };
};

const removeFromFavourite = () => {
  return {
    type: ADD_TO_FAVORITE,
  };
};

const dataFetch = (data) => {
  return {
    type: DATA_STORAGE,
    payload: data,
  };
};
const dataFetchFailure = (error) => {
  return {
    type: DATA_FAILURE,
    payload: error,
  };
};

export const thunkFetch = (job) => {
  return (dispatch) => {
    dispatch(dataFetch());
    axios
      .get("https://strive-benchmark.herokuapp.com/api/jobs?company=" + { job })
      .then((response) => {
        const data = response.data;
        dispatch(dataFetch(data));
      })
      .catch((error) => {
        dispatch();
      });
  };
};
