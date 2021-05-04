import { combineReducers } from 'redux';

import { report } from '../modules/report/reducer';
import { user } from '../modules/user/reducer';

export default combineReducers({ report, user });
