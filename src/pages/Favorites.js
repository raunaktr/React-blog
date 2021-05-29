import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import PostList from "../component/posts/PostList";

function FavoritesPage() {
    const favoriteContext = useContext(FavoritesContext);

    let content;

    if (favoriteContext.totalFavorites === 0) {
        content = <p>You got no favorites, please add?</p>;
    } else {
        content = <PostList posts={favoriteContext.favorites} />;
    }


    return (
        <section>
            <h1>Favorites Page</h1>
            {content}
        </section>
    );
}

export default FavoritesPage;
