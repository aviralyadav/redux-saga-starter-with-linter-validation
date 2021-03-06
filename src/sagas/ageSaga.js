// import { delay } from 'redux-saga';
import { takeLatest, put, delay, fork, all } from "redux-saga/effects";
// import {receiveUsers} from '../store/actions';

function* ageUPAsync() {
  // yield delay(3000);
  yield put({ type: "AGE_UP_ASYNC", value: 1 });
}

// function* watchAgeUp(){
//    yield takeLatest('AGE_UP', ageUPAsync);
// }

// function* watchAgeDown(){
//     yield takeLatest('AGE_DOWN', ageDownAsync);
// }

function* ageDownAsync() {
  yield delay(2000);
  yield put({ type: "AGE_DOWN_ASYNC", value: 1 });
}

function* watcher() {
  yield takeLatest('AGE_UP', ageUPAsync);
  yield takeLatest('AGE_DOWN', ageDownAsync);
}

function* rootAge() {
  yield all([
    fork(watcher), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
    // fork(watchAgeDown),
    // fork(watchFetchUsers),
]);
}

export default rootAge;