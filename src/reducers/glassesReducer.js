import {
  GET_GLASSES_REQUEST,
  GET_GLASSES_SUCCESS,
  GET_GLASSES_FAIL,
} from '../constants/glassesConstants';

export const glassesReducer = (
  state = { glasses: [], total_count: 0, loading: false, error: null },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case GET_GLASSES_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_GLASSES_SUCCESS:
      const { glasses, total_count, areFiltersChanged } = payload;
      const data = areFiltersChanged
        ? glasses
        : [...state.glasses, ...payload.glasses];
      return {
        loading: false,
        glasses: data,
        total_count: total_count,
        error: null,
      };
    case GET_GLASSES_FAIL:
      return { loading: false, error: payload };

    default:
      return state;
  }
};
