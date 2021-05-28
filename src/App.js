import { Route, Switch } from "react-router-dom";
import AllPostsPage from "./pages/AllPosts";
import FavoritesPage from "./pages/Favorites";
import NewPostPage from "./pages/NewPost";
import Layout from "./component/layout/Layout";

function App() {
    return (
        <Layout>
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
        </Layout>
    );
}

export default App;
