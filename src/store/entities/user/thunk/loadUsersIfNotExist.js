import { selectLoadingStatus, selectUserIds } from "../selectors";
import { userActions } from "../index";

export const loadUsersIfNotExist = () => (dispatch, getState) => {
  if (
    selectUserIds(getState())?.length !== 0 ||
    selectLoadingStatus(getState()) === "inProgress"
  ) {
    return;
  }

  dispatch(userActions.startLoading());

  fetch("http://localhost:3001/api/users/")
    .then((res) => res.json())
    .then((users) => {
      dispatch(userActions.finishLoading(users));
    })
    .catch(() => {
      dispatch(userActions.failedLoading());
    });
};
