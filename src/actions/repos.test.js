import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchRepos, fetchReadme } from './repos';
import { getAction, getError } from '../utils/getAction';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('async actions', () => {
  it('should successfully fetch 10 repo results sorted by best match', async () => {
    const store = mockStore({});
    store.dispatch(fetchRepos('github', '', 'Best Match', 1));
    expect(await getAction(store, 'FETCH_REPOS_REQUEST')).toEqual({ type: 'FETCH_REPOS_REQUEST' });
    expect((await getAction(store, 'FETCH_REPOS_SUCCESS')).type).toEqual('FETCH_REPOS_SUCCESS');
    expect(
      (await getAction(store, 'FETCH_REPOS_SUCCESS')).data.items[0].score >=
        (await getAction(store, 'FETCH_REPOS_SUCCESS')).data.items[1].score,
    ).toBeTruthy();
  });

  it('should fail to fetch results due to missing search', async () => {
    const store = mockStore({});
    store.dispatch(fetchRepos('', '', 'Best Match', 1));
    expect(await getAction(store, 'FETCH_REPOS_REQUEST')).toEqual({ type: 'FETCH_REPOS_REQUEST' });
    expect((await getError(store, 'FETCH_REPOS_FAILURE')).error).toEqual('Validation Failed');
  });

  it('should fetch repo results sorted by stars', async () => {
    const store = mockStore({});
    store.dispatch(fetchRepos('github', '', 'Stars', 1));
    expect(await getAction(store, 'FETCH_REPOS_REQUEST')).toEqual({ type: 'FETCH_REPOS_REQUEST' });
    expect(
      (await getAction(store, 'FETCH_REPOS_SUCCESS')).data.items[0].stargazers_count >=
        (await getAction(store, 'FETCH_REPOS_SUCCESS')).data.items[1].stargazers_count,
    ).toBeTruthy();
  });

  it('should fetch repo results in JavaScript language', async () => {
    const store = mockStore({});
    store.dispatch(fetchRepos('github', 'JavaScript', 'Best Match', 1));
    expect(await getAction(store, 'FETCH_REPOS_REQUEST')).toEqual({ type: 'FETCH_REPOS_REQUEST' });
    expect((await getAction(store, 'FETCH_REPOS_SUCCESS')).type).toEqual('FETCH_REPOS_SUCCESS');
  });

  it('should fetch README of repository', async () => {
    const store = mockStore({});
    store.dispatch(fetchReadme('keroserene', 'rickrollrc'));
    expect(await getAction(store, 'FETCH_README_REQUEST')).toEqual({ type: 'FETCH_README_REQUEST' });
    expect((await getAction(store, 'FETCH_README_SUCCESS')).type).toEqual('FETCH_README_SUCCESS');
    expect((await getAction(store, 'FETCH_README_SUCCESS')).data).toBeTruthy();
  });
});
