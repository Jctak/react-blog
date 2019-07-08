import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PostList = styled.ul`
    flex: 0 1 25%;
    list-style-type: none;
    text-align: left;
    margin: 0;

    li {
        padding: 4px 0;
        margin: 4px 0;
        width: 100%;
    }
`;

const PostDetails = styled.div`
    flex: 1;
    margin: 0;
`;

class ListLayout extends Component {
    state = {
        showDetails: false,
        posts: [],
        postData: null
    };

    componentDidMount() {
        const { posts } = this.props;

        this.setState({
            posts: posts.default
        });
    }

    // loadPost = post => {
    //     this.setState({
    //         showDetails: true,
    //         postData: post
    //     });
    // };

    render() {
        const { posts } = this.state;
        return (
            <PostList>
                {posts.map((post, index) => {
                    return (
                        <li key={index}>
                            <Link to={`/post/${post.id}`}>
                                {post.post_title}
                            </Link>
                        </li>
                    );
                })}
            </PostList>
        );
    }
}

export default ListLayout;

ListLayout.propTypes = {
    posts: PropTypes.object
};
