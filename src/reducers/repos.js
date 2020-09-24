import {
  FETCH_REPOS_REQUEST,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAILURE,
  SET_PAGE,
  SET_LANGUAGE,
  SET_SEARCH,
  SET_SORT,
  SET_ERROR,
  FETCH_README_REQUEST,
  FETCH_README_SUCCESS,
  FETCH_README_FAILURE,
} from '../actions/repos';

function getTotalPages(count) {
  return Math.ceil(count / 10);
}

export default function repos(
  state = {
    repos: [],
    error: '',
    loading: false,
    totalCount: 0,
    page: 1,
    sort: 'Best Match',
    search: 'rickroll',
    language: '',
    markdown: '',
  },
  action,
) {
  switch (action.type) {
    case FETCH_REPOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_REPOS_SUCCESS:
      return {
        ...state,
        repos: action.data.items,
        totalCount: action.data.total_count,
        totalPages: getTotalPages(action.data.total_count),
        page: action.page,
        language: action.language,
        sort: action.sort,
        loading: false,
        error: '',
      };
    case FETCH_REPOS_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case SET_PAGE:
      return {
        ...state,
        page: action.data,
      };
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.data,
      };
    case SET_SEARCH:
      return {
        ...state,
        search: action.data,
      };
    case SET_SORT:
      return {
        ...state,
        sort: action.data,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.data,
        repos: [],
      };
    case FETCH_README_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_README_SUCCESS:
      return {
        ...state,
        markdown: action.data,
        error: '',
        loading: false,
      };
    case FETCH_README_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
}
