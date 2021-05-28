import NewPostForm from "../component/posts/NewPostForm";

function NewPostPage() {
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
        );
    }

    return (
        <div>
            <h2>New Post Page</h2>
            <NewPostForm onAddPost={addPostHandler} />
        </div>
    );
}

export default NewPostPage;
