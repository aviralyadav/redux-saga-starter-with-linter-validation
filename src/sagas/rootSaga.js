import { fork, all } from "redux-saga/effects";
import ageSaga from './ageSaga';

function* root(){
    yield all([
        fork(ageSaga)
    ])
}

export default root;