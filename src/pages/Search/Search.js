import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { Container, SpinnerContainer, Warning, FilterRow, LinkContainer, LinkButton } from './styles';
import { fetchRepos, setLanguage, setPage, setSort, setSearch, setError } from '../../actions/repos';
import SearchInput from '../../components/SearchInput';
import SearchableDropDown from '../../components/SearchableDropDown';
import SortDropDown from '../../components/SortDropDown';
import CardList from '../../components/CardList';
import { languages } from '../../utils/languages';

class Search extends Component {
  async componentDidMount() {
    await this.searchRepos('rickroll');
  }

  searchRepos = async (keyword) => {
    if (!this.props.repos.search) {
      this.props.setError('Please enter a repository name');
      return;
    }
    if (!languages.includes(this.props.repos.language) && !!this.props.repos.language.length) {
      this.props.setError(`${this.props.repos.language} is not a valid GitHub language.`);
      return;
    }
    await this.props.fetchRepos(keyword, this.props.repos.language, this.props.repos.sort, this.props.repos.page);
  };

  setLanguage = async (language) => {
    await this.props.setLanguage(language);
  };

  setSort = async (sort) => {
    await this.props.setSort(sort);
  };

  setSearch = async (search) => {
    await this.props.setSearch(search);
  };

  setPage = async (page) => {
    await this.props.setPage(page);
    await this.searchRepos(this.props.repos.search);
  };

  render() {
    // Maximum call stack will be exceeded if you have a button for every page with a million results
    // Pagination shows 10 pages to select centered around selected page
    const pageArray = [];
    const startIndex = this.props.repos.page > 5 ? this.props.repos.page - 5 : 1;
    for (let i = startIndex; i < startIndex + 10 && i < this.props.repos.totalPages + 1; i++) {
      pageArray.push(i);
    }

    return (
      <Fragment>
        {this.props.repos.loading ? (
          <SpinnerContainer>
            <Loader type="TailSpin" color="#00BFFF" height={200} width={200} timeout={5000} />
          </SpinnerContainer>
        ) : (
          <Container>
            <FilterRow>
              <SortDropDown setSort={this.setSort} sort={this.props.repos.sort} />
              <SearchableDropDown setLanguage={this.setLanguage} language={this.props.repos.language} />
              <SearchInput searchRepos={this.searchRepos} setSearch={this.setSearch} search={this.props.repos.search} />
            </FilterRow>
            {this.props.repos.error.length ? (
              <Warning>{this.props.repos.error}</Warning>
            ) : this.props.repos.repos.length ? (
              <CardList items={this.props.repos.repos} />
            ) : (
              <Warning>No Results Found</Warning>
            )}
            <LinkContainer>
              {!!this.props.repos.repos.length &&
                pageArray.map((page) => (
                  <LinkButton
                    key={page}
                    onClick={async () => await this.setPage(page)}
                    style={{
                      backgroundColor: this.props.repos.page === page ? '#28a745' : 'white',
                      color: this.props.repos.page === page ? 'white' : 'black',
                    }}
                  >
                    {page}
                  </LinkButton>
                ))}
            </LinkContainer>
          </Container>
        )}
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    repos: state.repos || {},
  };
}

const mapDispatchToProps = {
  fetchRepos,
  setSort,
  setSearch,
  setLanguage,
  setPage,
  setError,
};

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;
