import { Route, Switch } from "react-router-dom";
import MainNavigation from "./component/layout/MainNavigation";
import AllPostsPage from "./pages/AllPosts";
import FavoritesPage from "./pages/Favorites";
import NewPostPage from "./pages/NewPost";

function App() {
    return (
        <div>
            <MainNavigation />
            <Switch>
                <Route path="/" exact>
                    <AllPostsPage />
                </Route>
                <Route path="/new-post">
                    <NewPostPage />
                </Route>
                <Route path="/favorites">
                    <FavoritesPage />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
