import axios from 'axios';
import {
  GET_GLASSES_FAIL,
  GET_GLASSES_REQUEST,
  GET_GLASSES_SUCCESS,
} from '../constants/glassesConstants';
import { formulateLinkParametersAndValue } from '../utils/utils';
import { coloursParam, shapesParam } from '../constants/filterConstants';

export const getGlasses =
  (
    collectionType,
    page,
    colours = [],
    shapes = [],
    areFiltersChanged = false
  ) =>
  async dispatch => {
    try {
      dispatch({
        type: GET_GLASSES_REQUEST,
      });
      let link = `https://api-staging.bloobloom.com/user/v1/sales_channels/website/collections/${collectionType}/glasses?&page[number]=${page}&page[limit]=12&filters[lens_variant_prescriptions][]=fashion&filters[lens_variant_types][]=classic&filters[frame_variant_home_trial_available]=false`;

      const coloursParams = formulateLinkParametersAndValue(
        coloursParam,
        colours
      );
      const shapesParams = formulateLinkParametersAndValue(shapesParam, shapes);
      link += coloursParams + shapesParams;

      const {
        data: {
          glasses,
          meta: { total_count },
        },
      } = await axios.get(link);
      dispatch({
        type: GET_GLASSES_SUCCESS,
        payload: { glasses, total_count, areFiltersChanged },
      });
    } catch (error) {
      dispatch({ type: GET_GLASSES_FAIL, payload: error });
    }
  };
