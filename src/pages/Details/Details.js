import React, { Component, Fragment } from 'react';
import Loader from 'react-loader-spinner';
import ReactMarkdown from 'react-markdown';
import { Container, MarkdownContainer, SpinnerContainer, Warning } from './styles';
import Card from '../../components/Card';
import { fetchReadme } from '../../actions/repos';
import { connect } from 'react-redux';

class Details extends Component {
  async componentDidMount() {
    if (!this.props.location.query) {
      window.location.href = '../';
      return;
    }

    await this.props.fetchReadme(this.props.location.query.owner, this.props.location.query.title);
    // axios
    //   .get(
    //     `https://api.github.com/repos/${this.props.location.query.owner}/${this.props.location.query.title}/contents/README.md`,
    //     {
    //       headers: {
    //         Accept: 'application/json',
    //       },
    //     },
    //   )
    //   .then((result) => {
    //     this.setState({ markdown: atob(result.data.content), loading: false });
    //   })
    //   .catch((error) => {
    //     let message;
    //     if (error.response.status === 404) {
    //       message = 'README Not Found';
    //     }
    //     if (error.response.status === 403) {
    //       message = 'API Rate Limit Exceeded';
    //     }
    //
    //     this.setState({ loading: false, error: message });
    //   });
  }

  render() {
    return this.props.repos.loading ? (
      <SpinnerContainer>
        <Loader type="TailSpin" color="#00BFFF" height={200} width={200} timeout={5000} />
      </SpinnerContainer>
    ) : (
      <Fragment>
        <Container>
          <Card {...this.props.location.query} />
        </Container>
        {!!this.props.repos.markdown.length && (
          <MarkdownContainer>
            <ReactMarkdown source={this.props.repos.markdown} />
          </MarkdownContainer>
        )}
        {!!this.props.repos.error.length && <Warning>{this.props.repos.error}</Warning>}
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
  fetchReadme,
};

const DetailsContainer = connect(mapStateToProps, mapDispatchToProps)(Details);

export default DetailsContainer;
