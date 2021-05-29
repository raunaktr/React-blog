import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoritesPost) => {},
    removeFavorite: (postId) => {},
    itemIsFavorite: (postId) => {},
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoritesPost) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoritesPost);
        });
    }

    function removeFavoriteHandler(postId) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter((post) => post.id !== postId);
        });
    }

    function itemIsFavoriteHandler(postId) {
        return userFavorites.some((post) => post.id === postId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,
    };
    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContext;
