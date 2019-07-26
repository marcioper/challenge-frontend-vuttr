/**
 * Types
 */
export const Types = {
  GET_REQUEST: 'tools/GET_REQUEST',
  GET_SUCCESS: 'tools/GET_SUCCESS',
  GET_FAILURE: 'tools/GET_FAILURE',
  ADD_REQUEST: 'tools/ADD_REQUEST',
  ADD_SUCCESS: 'tools/ADD_SUCCESS',
  ADD_FAILURE: 'tools/ADD_FAILURE',
  REMOVE_REQUEST: 'tools/REMOVE_REQUEST',
  REMOVE_SUCCESS: 'tools/REMOVE_SUCCESS',
  REMOVE_FAILURE: 'tools/REMOVE_FAILURE',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
  successRemove: false,
};

export default function tools(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case Types.GET_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: '',
      };
    case Types.GET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload.tool],
        loading: false,
        error: '',
      };
    case Types.ADD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    case Types.REMOVE_REQUEST:
      return {
        ...state,
        loading: true,
        successRemove: false,
        error: '',
      };
    case Types.REMOVE_SUCCESS:
      return {
        ...state,
        loading: false,
        successRemove: true,
        error: '',
      };
    case Types.REMOVE_FAILURE:
      return {
        ...state,
        loading: false,
        successRemove: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
}

/**
 * Action
 */
export const Creators = {
  getRequest: (search, withTag) => ({
    type: Types.GET_REQUEST,
    payload: {
      search,
      withTag,
    },
  }),
  getSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: {
      data,
    },
  }),
  getFailure: message => ({
    type: Types.GET_FAILURE,
    payload: {
      message,
    },
  }),

  addRequest: tool => ({
    type: Types.ADD_REQUEST,
    payload: {
      tool,
    },
  }),
  addSuccess: tool => ({
    type: Types.ADD_SUCCESS,
    payload: {
      tool,
    },
  }),
  addFailure: message => ({
    type: Types.ADD_FAILURE,
    payload: {
      message,
    },
  }),

  removeRequest: id => ({
    type: Types.REMOVE_REQUEST,
    payload: {
      id,
    },
  }),
  removeSuccess: () => ({
    type: Types.REMOVE_SUCCESS,
  }),
  removeFailure: message => ({
    type: Types.REMOVE_FAILURE,
    payload: {
      message,
    },
  }),
};
