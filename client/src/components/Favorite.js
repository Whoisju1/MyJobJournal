import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faStar as StarUnfav } from '@fortawesome/fontawesome-free-regular';
import { faStar as StarFav } from '@fortawesome/fontawesome-free-solid';
import PropTypes from 'prop-types';

class Favorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favorite: false };
  }

  componentDidMount() {
    const { id } = this.props;
    const query = `{ 
      application (id: "${id}") {
        favorite
      } 
    }`;

    axios.post('/graphql', { query })
      .then((response) => {
        const { favorite } = response.data.data.application;
        this.setState({ favorite });
      })
      .catch(err => console.log('Error --axios: ', err));
  }

  toggleFavorite(id) {
    const query = `mutation ToggleFavorite {
      ToggleFavorite (id: "${id}") {
        favorite
      }
    }
    `;

    axios.post('/graphql', { query })
      .then((response) => {
        const { favorite } = response.data.data.ToggleFavorite;
        this.setState({ favorite });
      })
      .catch(err => console.log('Error --axios: ', err));
  }


  render() {
    const FavoriteStar = styled(FontAwesomeIcon).attrs({
      icon: props => (props.fav === 'true' ? StarFav : StarUnfav),
    })`
      transform: scale(1.2);
      transition: all .5s ease;
      fill: none;
      color: gray;
      border-radius: 3px;
      transform-origin: 50% 50%;
      cursor: pointer;
      &:hover {
        transform: scale(1.6);
        color: #ffd32a;
      }
    `;

    return (
      <FavoriteStar
        fav={this.state.favorite.toString()}
        onClick={() => this.toggleFavorite(this.props.id)}
      />
    );
  }
}

Favorite.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Favorite;
