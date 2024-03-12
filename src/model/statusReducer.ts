interface IStatus {
  loading: boolean;
  error: string | null;
}

const SET_ERROR = 'SET_ERROR';
const SET_LOADING = 'SET_LOADING';

interface SetErrorAction {
  type: 'SET_ERROR';
  payload: string | null;
}

interface SetLoadingAction {
  type: 'SET_LOADING';
  payload: boolean;
}

const setError = (error: string | null): SetErrorAction => ({
  type: SET_ERROR,
  payload: error,
});

const setLoading = (loading: boolean): SetLoadingAction => ({
  type: SET_LOADING,
  payload: loading,
});

type StatusAction = SetLoadingAction | SetErrorAction;

const initialStatusState: IStatus = {
  loading: false,
  error: null,
};

const statusReducer = (
  state: IStatus = initialStatusState,
  action: StatusAction
): IStatus => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { statusReducer, setError, setLoading };
