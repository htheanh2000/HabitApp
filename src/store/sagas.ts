import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser() {
   try {
      yield put({type: "USER_FETCH_SUCCEEDED"});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED"});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}


export default mySaga;
