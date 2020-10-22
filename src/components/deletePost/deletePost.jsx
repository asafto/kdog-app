import { Component } from "react";
import postService from "../../services/postService";

class DeletePost extends Component {
  async componentDidMount() {
    await postService.deletePost(this.props.match.params.post_id);
    this.props.history.replace("/feed");
  }
  render() {
    return null;
  }
}

export default DeletePost;