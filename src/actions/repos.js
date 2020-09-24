import axios from 'axios';

export const FETCH_REPOS_REQUEST = 'FETCH_REPOS_REQUEST';
export const FETCH_REPOS_SUCCESS = 'FETCH_REPOS_SUCCESS';
export const FETCH_REPOS_FAILURE = 'FETCH_REPOS_FAILURE';
export const SET_PAGE = 'SET_PAGE';
export const SET_LANGUAGE = 'SET_LANGUAGE';
export const SET_SORT = 'SET_SORT';
export const SET_SEARCH = 'SET_SEARCH';
export const SET_ERROR = 'SET_ERROR';
export const FETCH_README_REQUEST = 'FETCH_README_REQUEST';
export const FETCH_README_SUCCESS = 'FETCH_README_SUCCESS';
export const FETCH_README_FAILURE = 'FETCH_README_FAILURE';

const fetchReposRequest = () => ({
  type: FETCH_REPOS_REQUEST,
});

const fetchReposSuccess = (data, language, sort, page) => ({
  type: FETCH_REPOS_SUCCESS,
  data,
  language,
  sort,
  page,
});

const fetchReposFailure = (error) => ({
  type: FETCH_REPOS_FAILURE,
  error,
});

function getQueryUrl(keyword, language, sort, page) {
  let url = `https://api.github.com/search/repositories?q=${keyword}`;
  if (!!language.length) {
    url += `+language:${language}`;
  }
  if (sort === 'Stars') {
    url += '&sort=stars';
  }
  url += '&per_page=10';
  url += `&page=${page}`;

  return encodeURI(url);
}

export const fetchRepos = (keyword, language, sort, page) => (dispatch) => {
  dispatch(fetchReposRequest());

  const url = getQueryUrl(keyword, language, sort, page);
  console.log(url);
  axios
    .get(url)
    .then((result) => {
      dispatch(fetchReposSuccess(result.data, language, sort, page));
      return result;
    })
    .catch((error) => {
      dispatch(fetchReposFailure(error));
      return error;
    });
};

export const setPage = (page) => ({
  type: SET_PAGE,
  data: page,
});

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  data: language,
});

export const setSearch = (search) => ({
  type: SET_SEARCH,
  data: search,
});

export const setSort = (sort) => ({
  type: SET_SORT,
  data: sort,
});

export const setError = (error) => ({
  type: SET_ERROR,
  data: error,
});

const fetchReadmeRequest = () => ({
  type: FETCH_README_REQUEST,
});

const fetchReadmeSuccess = (data) => ({
  type: FETCH_README_SUCCESS,
  data,
});

const fetchReadmeFailure = (error) => ({
  type: FETCH_README_FAILURE,
  error,
});

export const fetchReadme = (owner, title) => (dispatch) => {
  dispatch(fetchReadmeRequest());

  axios
    .get(`https://api.github.com/repos/${owner}/${title}/contents/README.md`)
    .then((result) => {
      dispatch(fetchReadmeSuccess(atob(result.data.content)));
      return result;
    })
    .catch((error) => {
      dispatch(fetchReadmeFailure(error));
      return error;
    });
};
