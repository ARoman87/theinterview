import { createAction } from '@ngrx/store';
import { IFeature } from '@theinterview/core-types';

export const init = createAction('[@theinterview/feature] init');
// example with optional payload
export const getFeature = createAction('[@theinterview/feature] load');
export const getFeatureSuccess = createAction('[@theinterview/featureSuccess] load', (data: IFeature) => data);
export const getFeatureFailure = createAction(
  '[@theinterview/featureFailure] load',
  (error: { statusCode?: string; error: string; message: string }) => error
);

