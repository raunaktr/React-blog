import { useHistory } from "react-router-dom";
import NewPostForm from "../component/posts/NewPostForm";

function NewPostPage() {
    const history = useHistory();

    function addPostHandler(postData) {
        fetch(
            "https://my-blog-ce0b4-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json",
            {
                method: "POST",
                body: JSON.stringify(postData),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then(() => {
            history.replace("/");
        });
    }

    return (
        <div>
            <h2>New Post Page</h2>
            <NewPostForm onAddPost={addPostHandler} />
        </div>
    );
}

export default NewPostPage;
