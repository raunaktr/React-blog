import { useState, useEffect } from "react";
import PostList from "../component/posts/PostList";

function AllPostsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedPosts, setLoadedPosts] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            "https://my-blog-ce0b4-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json"
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const posts = [];
                for (const key in data) {
                    const post = {
                        id: key,
                        ...data[key],
                    };
                    posts.push(post);
                }
                setIsLoading(false);
                setLoadedPosts(posts);
            });
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <section>
            <h1>All Posts Page</h1>
            <PostList posts={loadedPosts} />
        </section>
    );
}
export default AllPostsPage;
