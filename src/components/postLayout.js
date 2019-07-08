import React from "react";
import PostData from "./postData";

const PostLayout = props => {
    const { match, posts } = props;
    const postId = parseInt(match.params.id);

    return posts.default.map(post => {
        if (post.id == match.params.id) {
            return <PostData postData={post} key={`post-id${postId}`} />;
        } else {
            return null;
        }
    });
};

export default PostLayout;
