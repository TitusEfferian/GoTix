import { createAction } from 'redux-actions'
import { REQUEST_FEATURE_MOVIES, REQUEST_FEATURE_MOVIES_SUCCESS, REQUEST_FEATURE_MOVIES_FAILED } from './types';

export const requestFeatureMovies = createAction(REQUEST_FEATURE_MOVIES)
export const requestFeatureMoviesSuccess = createAction(REQUEST_FEATURE_MOVIES_SUCCESS)
export const requestFeatureMoviesFailed = createAction(REQUEST_FEATURE_MOVIES_FAILED)