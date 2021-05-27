import PostList from "../component/posts/PostList";

const DUMMY_DATA = [
    {
        id: "t1",
        title: "This is first title",
        image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        description: "This is first description",
    },
    {
        id: "t2",
        title: "This is second title",
        image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        description: "This is second description",
    },
];

function AllPostsPage() {
    return (
        <div>
            <h1>All Posts Page</h1>
            <PostList posts={DUMMY_DATA} />
        </div>
    );
}
export default AllPostsPage;
