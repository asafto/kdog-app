import React, { Component } from 'react';
import Moment from 'react-moment';
import { toast } from 'react-toastify';
import {
  FaUserCircle,
  AiFillLike,
  FaComment,
  AiFillEdit,
  AiFillDelete,
} from 'react-icons/all';
import userService from '../../services/userService';
import postService from '../../services/postService';

import { imageUrl } from '../../config.json';

import './post.scss';
import TagsList from '../tagList/tagList';
import { Link } from 'react-router-dom';

class Post extends Component {
  state = {};

  async componentDidMount() {
    const { post } = this.props;
    const author = await userService.getUserById(post.author);
    this.setState({ author });
  }

  // postDeleteHandler = async () => {
  //   const { post, history } = this.props;
  //   try {
  //     await postService.deletePost(post._id);
  //     history.push('/feed');
  //     toast('Your post was deleted! hope to see a new one soon!', {
  //       position: 'top-center',
  //       type: 'success',
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  render() {
    const { post, signedInUser } = this.props;
    const { author } = this.state;
    return (
      <div className="card col-11 col-md-5 col-lg-3 m-3">
        <div className="card-header d-flex align-items-center justify-content-between p-2">
          <div className="user-box d-flex align-items-center">
            <FaUserCircle className="user-icon" />
            {author && <span className="pl-2">{author.name}</span>}
          </div>
          <div className="date-box">
            <Moment format="MMM-DD-YYYY, HH:mm">{post.createdAt}</Moment>
          </div>
        </div>
        <div className="card-body px-2 post-text">
          <p>{post.text}</p>
        </div>
        <img
          src={`${imageUrl}/${post.image}`}
          alt={post.image}
          className="w-100 post-image"
        />
        <div className="d-flex flex-row justify-content-between align-items-center p-2">
          <div className="d-flex flex-row justify-content-center align-items-center">
            <button
              className="action-button"
              disabled={signedInUser ? false : true}>
              <AiFillLike className="custom-icon" />
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
              <AiFillEdit className="custom-icon" />
            </button>
          )}
          {signedInUser && signedInUser._id === post.author && (
            <button className="action-button">
              <Link to={`/deletePost/${post._id}`}>
                <AiFillDelete className="custom-icon" />
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
