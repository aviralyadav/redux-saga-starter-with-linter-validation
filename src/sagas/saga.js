// import { delay } from 'redux-saga';
import { takeLatest, put, delay, fork, all } from "redux-saga/effects";

function* ageUPAsync() {
  yield delay(3000);
  yield put({ type: "AGE_UP_ASYNC", value: 1 });
}

function* watchAgeUp(){
   yield takeLatest('AGE_UP', ageUPAsync);
}

function* watchAgeDown(){
    yield takeLatest('AGE_DOWN', ageDownAsync);
}

function* ageDownAsync() {
  yield delay(2000);
  yield put({ type: "AGE_DOWN_ASYNC", value: 1 });
}

function* root() {
  yield all([
    fork(watchAgeUp), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
    fork(watchAgeDown),
]);
}

export default root;