import { ReqisterRequestInterface } from '../../types/registerRequest.interface';
import { ActionTypes } from '../actionTypes';
import { createAction, props } from '@ngrx/store';

export const registerAction = createAction(ActionTypes.REGISTER, props<ReqisterRequestInterface>());
