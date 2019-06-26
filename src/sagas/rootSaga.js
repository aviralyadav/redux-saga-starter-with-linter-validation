import { fork, all } from "redux-saga/effects";
import ageSaga from './ageSaga';
import userSaga from './userSaga';

function* root(){
    yield all([
        fork(ageSaga),
        fork(userSaga)
    ])
}

export default root;