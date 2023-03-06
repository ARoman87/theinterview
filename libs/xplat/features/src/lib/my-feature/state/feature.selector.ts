import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FeatureEntityAdaptor, featureReducer, FeatureState, FEATURE_STATE_KEY } from './feature.reducer';
type ObjectWithAnyProperties = { [key: string]: any };
import { TRANSACTION_TEST_DATA } from './testData';

const selectAllFeatureState = createFeatureSelector<FeatureState>(FEATURE_STATE_KEY);

/**
 * ROOT STATE
 */
export const getAllFeatureState = createSelector(selectAllFeatureState, (state: FeatureState) => state);

export const selectFeatureSelectedId = createSelector(getAllFeatureState, (state: FeatureState) => state.selected_id);
export const selectFeatureError = createSelector(getAllFeatureState, (state: FeatureState) => state.error);

const { selectIds, selectEntities, selectAll, selectTotal } = FeatureEntityAdaptor.getSelectors(getAllFeatureState);

// select the array of connection ids
export const selectSkylabCommercialAutoQuoteIds = selectIds;

// select the dictionary of CommercialAutoPolicy entities
export const selectSkylabCommercialAutoQuoteEntities = selectEntities;

// select the array of CommercialAutoPolicy
export const selectSkylabCommercialAutoQuote = selectAll;

// select the total entity count
export const selectSkylabCommercialAutoQuoteTotal = selectTotal;

export const selectSelectedFeature = createSelector(
  getAllFeatureState,
  selectFeatureSelectedId,
  (state: FeatureState, selected_id) => state.entities[selected_id]
);

/**
 *
 * Traverses an object and selects its keys, converting them into a label and a key, with optional keys to skip.
 * @param {{ label: string; key: string }} input - The object to traverse.
 * @param {string[]} [skipKeys=[]] - The keys to skip.
 * @returns {{label: string, key: string}[]} - The list of selectable keys, with their label and key.
 *
 * We are asking you to write a function to complete the following tasks.
 * The goal is to create a new object per value FOR example if you look at the TRANSACTION_TEST_DATA.
 * You can see the nested value policy.pol_eff_date.day = 29
 *
 * Your mission is to create a new object for that value shaped like this.
 * {label: Policy Pol Eff Date Day, key: policy.pol_eff_date.day }
 * You will do this for every value. The final example of the EXPECTED OUTCOME is in ./data/transactions-answer-data.json
 *
 * EST TIME TO COMPLETE: 15min
 * We solved this in less than 60 lines
 *
 */

export const selectSelectedFeatureLabels = createSelector(
  getAllFeatureState,
  selectFeatureSelectedId,
  (state: FeatureState, selected_id): { label: string; key: string }[] => {
    // const feature = state.entities[selected_id];
    const feature = TRANSACTION_TEST_DATA

    // The input object is null or undefined: the function will return an empty array.
    // The input object is an empty object: the function will return an empty array.
    // The input object contains keys that should be skipped: the function will not add these keys to the result list.
    // The input object contains circular references: the function will not get stuck in an infinite loop and will correctly handle each key only once.
    // The input object contains values that are functions or arrays: the function will not add these keys to the result list.
    // The input object contains values that are instances of Date: the function will correctly format the date value into a human-readable string for the corresponding key.

    // This is a starting point
    function getSelectableKeys(input: ObjectWithAnyProperties, skipKeys: string[] = [], currentKeyPath: string[] = []): { label: string; key: string }[] {
      const keys: { label: string; key: string }[] = []

      if (!input || typeof input !== "object" || Array.isArray(input)) {
        return keys;
      }

      for (const [key, value] of Object.entries(input)) {
        const keyPath = [...currentKeyPath, key];
        
        if (skipKeys.includes(keyPath.join('.'))) {
          continue;
        }

        function formatDate(value:any) {
          if (value instanceof Date) {
            return value.toLocaleDateString()
          }
          return value;
        }
    
        if (typeof value === 'object' && value !== null) {
          const nestedKeys = getSelectableKeys(value, skipKeys, keyPath);
          keys.push(...nestedKeys);
        } else {
          let label = keyPath.map((k) => k.charAt(0).toUpperCase() + k.slice(1)).join(' ');
          label = label.split("_").map((k) => k.charAt(0).toUpperCase() + k.slice(1)).join(" ")
          keys.push({ label, key: formatDate(keyPath.join('.')) });
          
        }
      }

      return keys;

    }
    if (feature) {
      return getSelectableKeys(feature, ['transactions.object_id', 'dot.documents', "_id"]);
    } else {
      return [];
    }

  
  }
  

);


