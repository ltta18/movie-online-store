export function callAPIMiddleware({ dispatch, getState }) {
  return (next) => (action) => {
    const { types, callAPI, shouldCallAPI = () => true, payload = {} } = action;
    if (!types) {
      // Normal action: pass it on
      return next(action);
    }

    if (typeof callAPI !== "function") {
      throw new Error("Expected callAPI to be a function.");
    }

    if (!shouldCallAPI(getState())) {
      return;
    }

    const requestType = `${types}_REQUEST`;
    const successType = `${types}_SUCCESS`;
    const failureType = `${types}_FAILURE`;

    dispatch(
      Object.assign({}, payload, {
        type: requestType,
      })
    );

    return callAPI().then(
      (response) => {
        return dispatch(
          Object.assign({}, payload, {
            data: response.data,
            type: successType,
          })
        );
      },
      (error) => {
        console.log(failureType, error);
        const err = error.response?.data;
        return dispatch(
          Object.assign({}, payload, {
            error: err ? (err.message ? err.message : err) : "",
            type: failureType,
          })
        );
      }
    );
  };
}
