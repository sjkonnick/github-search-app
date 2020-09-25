import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import ReactMarkdown from 'react-markdown';
import { Container, MarkdownContainer, SpinnerContainer, Warning, Page } from './styles';
import Card from '../../components/Card';
import { fetchReadme } from '../../actions/repos';
import { connect } from 'react-redux';

class Details extends Component {
  async componentDidMount() {
    await this.props.fetchReadme(this.props.location.query.owner, this.props.location.query.title);
  }

  render() {
    if (!this.props.location.query) {
      window.location.href = '../';
      return;
    }
    return this.props.repos.loading ? (
      <SpinnerContainer>
        <Loader type="TailSpin" color="#00BFFF" height={200} width={200} timeout={5000} />
      </SpinnerContainer>
    ) : (
      <Page>
        <Container>
          <Card {...this.props.location.query} />
        </Container>
        {!!this.props.repos.markdown.length && (
          <MarkdownContainer>
            <ReactMarkdown source={this.props.repos.markdown} />
          </MarkdownContainer>
        )}
        {!!this.props.repos.error.length && <Warning>{this.props.repos.error}</Warning>}
      </Page>
    );
  }
}

function mapStateToProps(state) {
  return {
    repos: state.repos || {},
  };
}

const mapDispatchToProps = {
  fetchReadme,
};

const DetailsContainer = connect(mapStateToProps, mapDispatchToProps)(Details);

export default DetailsContainer;
