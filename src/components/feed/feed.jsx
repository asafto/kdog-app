import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../common/pageHeader';

import postService from '../../services/postService';
import Post from '../post/post';

import './feed.scss';

class Feed extends Component {
  state = {
    posts: [],
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

  render() {
    const { user } = this.props;
    const { posts } = this.state;
    return (
      <div className="container-fluid feed">
        <PageHeader titleText="Kdog Feed" className="text-center" />
        <div className="row m-auto">
          {!user && (
            <div className="col-12 mt-2">
              <h4 className="text-center">
                Login or signup in order to create or like posts
              </h4>
            </div>
          )}
        </div>
        <div className="d-flex col-md-6 justify-content-center m-auto">
          {user && (
            <Link className="kdog-submit-button text-decoration-none" to="/createPost">
              + Add Post
            </Link>
          )}
          <div className="border border-success rounded px-5 ml-3">
            Search box placeholder
          </div>
        </div>
        <div className="">
          {posts.length === 0 ? (
            <h2 className="user-message">There are currently no posts on Kdog app</h2>
          ) : (
            <div className="row justify-content-center mb-2">
              {posts.map((post) => {
                return <Post key={post._id} post={post} signedInUser={user} />;
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Feed;
