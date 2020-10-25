import { Component } from 'react';
import postService from '../../services/postService';

class LikePost extends Component {
    state = {}
    async componentDidMount() {
        await postService.likeUnlikePost(this.props.match.params.post_id);
        this.props.history.replace('/feed');
    }
    render() {
        return null;
    }
}
 
export default LikePost;