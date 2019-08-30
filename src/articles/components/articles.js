import React from 'react';
import { getAllArticles, deleteArticleByID } from '../api';
import Article from './article';

class Articles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    getAllArticles()
      .then((response) => {
        this.setState({ articles: response.data.articles});
      })
      .catch((err) => {
        console.log(err);
      })
  }

  deleteArticle = (id) => {
    deleteArticleByID(id)
      .then((responsose) => {
        const newArticlesList = this.state.articles.filter((article) => {
          return article._id !== id;
        });

        this.setState({ articles: newArticlesList });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    const allArticles = this.state.articles.map((article, index) => {
      return <Article key={article._id}
                      deleteArticle={this.deleteArticle}
                      id={article._id}
                      title={article.title}
                      author={article.author}
                      content={article.content} />;
    });

    return allArticles;
  }
}

export default Articles;