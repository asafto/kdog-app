import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

import PageHeader from '../common/pageHeader';

import postService from '../../services/postService';
import Post from '../post/post';

import './feed.scss';

class Feed extends Component {
  state = {
    posts: [],
    filteredPosts: [],
    isLoading: true,
  };

  async componentDidMount() {
    const { data } = await postService.getAllPosts();
    if (data.length > 0) {
      this.setState({
        isLoading: false,
        posts: [...data],
      });
    } else {
      this.setState({ isLoading: false });
    }
  }

  searchPostsHandler = (event) => {
    const filteredPosts = this.state.posts.filter((post) =>
      post.tags.includes(event.target.value)
    );
    this.setState({ filteredPosts });
  };

  render() {
    const { user } = this.props;
    const { posts, filteredPosts, isLoading } = this.state;

    if (isLoading) {
      return (
        <div className="loader">
          <BeatLoader color={'#4f6e42'} size={60} sizeUnit={'px'} />
        </div>
      );
    }
    return (
      <div className="container-fluid feed">
        <PageHeader titleText="Kdog Feed" className="text-center page-header" />
        <div className="row m-auto">
          {!user && (
            <div className="col-12 mt-2 page-subHeader">
              <h4 className="text-center">
                Login or signup in order to create or like posts
              </h4>
            </div>
          )}
        </div>
        <div className="page-actions d-flex col-12 col-md-6 justify-content-center m-auto">
          {user && (
            <Link
              className="kdog-submit-button text-decoration-none"
              to="/createPost">
              Add Post
            </Link>
          )}
          <input
            className="search-box"
            type="search"
            placeholder="Search Posts by Tags"
            aria-label="Search"
            onChange={posts && this.searchPostsHandler}
          />
        </div>
        <div>
          {posts.length === 0 ? (
            <h2 className="user-message text-center">
              There are currently no posts on Kdog app
            </h2>
          ) : (
            <div className="row justify-content-center mb-2">
              {filteredPosts.length === 0
                ? posts.map((post) => {
                    return (
                      <Post key={post._id} post={post} signedInUser={user} />
                    );
                  })
                : filteredPosts.map((post) => {
                    return (
                      <Post key={post._id} post={post} signedInUser={user} />
                    );
                  })}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Feed;
