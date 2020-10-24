import { Component } from 'react';
import { toast } from 'react-toastify';
import postService from '../../services/postService';

class DeletePost extends Component {
  async componentDidMount() {
    await postService.deletePost(this.props.match.params.post_id);
    toast('Your post was deleted! cheers!', {
      position: 'top-center',
      type: 'success',
    });
    this.props.history.replace('/feed');
  }

  render() {
    return null;
  }
}

export default DeletePost;
