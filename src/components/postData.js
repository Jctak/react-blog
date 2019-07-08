import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./postData.css";

const PostData = props => {
    const { postData } = props;
    return (
        <>
            <h1>{postData.post_title}</h1>
            <p>{postData.post}</p>
            <Link className="home-redirect" to={`/`}>
                <p>Go back</p>
            </Link>
        </>
    );
};

export default PostData;

PostData.propTypes = {
    postData: PropTypes.object
};
