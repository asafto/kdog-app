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
    filterStatus: false,
  };

  async componentDidMount() {
    const { data } = await postService.getAllPosts();
    if (data.length > 0) {
      this.setState({
        isLoading: false,
        posts: [...data],
        filteredPosts: [],
      });
    } else {
      this.setState({ isLoading: false });
    }
  }

  searchPostsHandler = (event) => {
    const searchText = event.target.value.trim().toLowerCase();
    const filteredPosts = this.state.posts.filter(
      (post) =>
        post.tags.map((tag) => tag.toLowerCase()).includes(searchText) ||
        post.text.toLowerCase().indexOf(searchText) !== -1
    );
    if (filteredPosts.length > 0) {
      this.setState({
        filteredPosts,
        filterStatus: true,
      });
    } else {
      this.setState({
        filteredPosts: [],
        filterStatus: true,
      });
    }
  };

  render() {
    const { user } = this.props;
    const { posts, filteredPosts, filterStatus, isLoading } = this.state;

    if (isLoading) {
      return (
        <div className="loader col-lg-4 col-12 text-center mx-auto mt-5 ">
          <BeatLoader color={'#4f6e42'} size={60} sizeUnit={'px'} />
        </div>
      );
    }
    return (
      <div className="feed">
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
        <div className="row m-auto">
          <div className="page-actions d-flex col-12 col-md-6 justify-content-center m-auto">
            {user && (
              <Link
                className="kdog-submit-button text-decoration-none"
                to="/createPost">
                Add Post
              </Link>
            )}
            {posts.length > 0 ? (
              <input
                className="search-box"
                type="search"
                placeholder="Search Posts..."
                aria-label="Search"
                onChange={posts && this.searchPostsHandler}
              />
            ) : null}
          </div>
          {posts.length === 0 ? (
            <div className="col-12 mt-2 page-subHeader">
              <h4 className="text-center">
                There are currently no posts on kdog app!
              </h4>
            </div>
          ) : null}
        </div>
        {filteredPosts.length === 0 && !filterStatus ? (
          <div className="row justify-content-center mb-2">
            {posts.map((post) => {
              return <Post key={post._id} post={post} signedInUser={user} />;
            })}
          </div>
        ) : null}
        {filteredPosts.length === 0 && filterStatus ? (
          <div className="alert alert-danger col-lg-4 col-8 mx-auto text-center mt-5" role="alert">
            No posts found...
          </div>
        ) : null}
        {filteredPosts.length > 0 && filterStatus ? (
          <div className="row justify-content-center mb-2">
            {filteredPosts.map((post) => {
              return <Post key={post._id} post={post} signedInUser={user} />;
            })}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Feed;
