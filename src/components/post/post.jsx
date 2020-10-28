import React, { Component } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import {
  FaUserCircle,
  AiFillLike,
  FaComment,
  AiFillEdit,
  MdDeleteForever,
} from 'react-icons/all';

import TagsList from '../tagList/tagList';

import userService from '../../services/userService';

import './post.scss';

class Post extends Component {
  state = {
    author: '',
  };

  async componentDidMount() {
    const { post } = this.props;
    const author = await userService.getUserNameById(post.author);
    this.setState({
      author: author,
    });
  }

  render() {
    const { post, signedInUser } = this.props;
    const { author } = this.state;
    const authorName = author && author.name.split(' ')[0];

    return (
      <div className="card col-9 col-md-5 col-lg-3 m-2">
        <div className="card-header d-flex align-items-center justify-content-between p-2">
          <div className="user-box d-flex align-items-center">
            <FaUserCircle className="user-icon" />
            {author && <span className="pl-2">{authorName}</span>}
          </div>
          <div className="date-box">
            <Moment format="MMM-DD-YYYY, HH:mm">{post.createdAt}</Moment>
          </div>
        </div>
        <div className="card-body px-2 post-text">
          <p>{post.text}</p>
        </div>
        <img
          src={post.imageLocation}
          alt={post.image}
          className="w-100 post-image"
        />
        <div className="d-flex flex-row justify-content-between align-items-center p-2">
          <div className="d-flex flex-row justify-content-center align-items-center">
            <button
              className="action-button"
              disabled={signedInUser ? false : true}>
              <Link to={`/likePost/${post._id}`}>
                {signedInUser &&
                post.likes.length > 0 &&
                post.likes.includes(signedInUser._id) ? (
                  <AiFillLike className="sm-custom-icon liked" />
                ) : (
                  <AiFillLike className="custom-icon" />
                )}
              </Link>
              <span className="ml-1">{`${post.likes.length} likes`}</span>
            </button>
          </div>
          <button
            className="action-button"
            disabled={signedInUser ? false : true}>
            <FaComment className="custom-icon" />
          </button>
          {signedInUser && signedInUser._id === post.author && (
            <button className="action-button">
              <Link to={`/editPost/${post._id}`}>
                <AiFillEdit className="sm-custom-icon" />
              </Link>
            </button>
          )}
          {signedInUser && signedInUser._id === post.author && (
            <button className="action-button">
              <Link to={`/deletePost/${post._id}`}>
                <MdDeleteForever className="sm-custom-icon" />
              </Link>
            </button>
          )}
        </div>
        <TagsList tags={post.tags} />
        <div className="card-footer">this is the comments placeholder</div>
      </div>
    );
  }
}

export default Post;
