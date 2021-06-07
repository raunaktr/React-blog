import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
    const favoriteContext = useContext(FavoritesContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Blog</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All Posts</Link>
                    </li>
                    <li>
                        <Link to="/new-post">Add New Post</Link>
                    </li>
                    <li>
                        <Link to="/favorites">
                            Favorites
                            <span className={classes.badge}>
                                {favoriteContext.totalFavorites}
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
