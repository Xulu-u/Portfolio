import styled from 'styled-components';

export const LayoutContainer = styled.div`
  margin: 40px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
`;

export const NewsContainer = styled.div`
  margin: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const NewsArticle = styled.div`
  border-bottom: 1px solid black;
  padding: 20px;
`;

export const FavoritesContainer = styled.div`
  margin: 40px;
  border: 1px solid black;
`;

export const FavoriteArticle = styled(NewsArticle)`
  border-bottom: 1px solid black;
`;

export const Button = styled.button`
  background-color: #eb621a;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;