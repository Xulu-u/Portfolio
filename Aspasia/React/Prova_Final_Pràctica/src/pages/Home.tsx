import { useEffect, useState } from 'react';
import { NewsContainer, NewsArticle, Button, FavoritesContainer, FavoriteArticle, LayoutContainer } from '../styles/News';

interface Article {
  id: number;
  title: {
    rendered: string;
  };
  jetpack_featured_media_url?: string;
}

const Home: React.FC = () => {
  const [news, setNews] = useState<Article[]>([]);
  const [favorites, setFavorites] = useState<Article[]>([]);

  useEffect(() => {
    fetch('https://www.elmundotoday.com/wp-json/wp/v2/posts')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setNews(data);
      })
      .catch(error => {
        console.error('Error fetching the news:', error);
      });
  }, []);
  
  const addToFavorites = (article: Article) => {
    setFavorites([...favorites, article]);
  };

  const removeFromFavorites = (id: number) => {
    const updatedFavorites = favorites.filter(article => article.id !== id);
    setFavorites(updatedFavorites);
  };

  return (
    <div>
      <h1>Últimas Noticias</h1>
      <LayoutContainer>
        <NewsContainer>
            {news.map(article => (
            <NewsArticle key={article.id}>
                <h2>{article.title.rendered}</h2>
                <Button onClick={() => addToFavorites(article)}>Add to Favorites</Button>
            </NewsArticle>
            ))}
        </NewsContainer>

        
        <FavoritesContainer>
        <h2>Favorites</h2>
        {favorites.map(article => (
            <FavoriteArticle key={article.id}>
            <h2>{article.title.rendered}</h2>
            <Button onClick={() => removeFromFavorites(article.id)}>Remove from Favorites</Button>
            </FavoriteArticle>
        ))}
        </FavoritesContainer>
        
    </LayoutContainer>
    </div>
  );
}

export default Home;
