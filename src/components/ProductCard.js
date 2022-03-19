import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaTruck } from 'react-icons/fa';
import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 40%;
  margin: 5px;
  background-color: #B7B734;
  border: 10px solid beige;
  border-radius: 10px;

  &:hover {
    opacity: 0.7;
  }
`;

const Title = styled.h1`
  color: #E04DB0;
  cursor: pointer;
`;

const ImageDiv = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  background-size: cover;
`;

const Button = styled.button`
  cursor: pointer;
  border-radius: 10px;
  background-color: orange;
  height: 40px;
  width: 150px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

class ProductCards extends React.Component {
  render() {
    const { title, thumbnail, price, id, saveProduct, freeShipping } = this.props;
    return (
      <StyledCard data-testid="product">
        <Link
          to={ `/products/${id}` }
          style={ { textDecoration: 'none' } }
          data-testid="product-detail-link"
        >
          <Title text-decoration="none!important">{title}</Title>
        </Link>
        {freeShipping
        && (
          <span data-testid="free-shipping">
            <FaTruck />
            Frete Grátis
          </span>
        )}
        <ImageDiv className="img-product-card">
          <img height="200" src={ thumbnail } alt={ title } />
        </ImageDiv>
        <Wrapper>
          <p style={ { color: '#E04DB0' } }>
            R$
            {price}
          </p>
        </Wrapper>
        <Wrapper>
          <Button
            type="button"
            name={ id }
            data-testid="product-add-to-cart"
            onClick={ (e) => saveProduct(e) }
          >
            Adicionar ao carrinho
          </Button>
        </Wrapper>
      </StyledCard>
    );
  }
}

ProductCards.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
}.isRequired;

export default ProductCards;
