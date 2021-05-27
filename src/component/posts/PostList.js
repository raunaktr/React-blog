import PostItem from "./PostItem";
import classes from "./PostItem.module.css";

function PostList(props) {
    return (
        <ul className={classes.list}>
            {props.posts.map((post) => (
                <PostItem
                    key={post.id}
                    id={post.id}
                    image={post.image}
                    title={post.title}
                    description={post.description}
                />
            ))}
        </ul>
    );
}

export default PostList;
