import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchOnePost,deletePost} from '../actions/index';
import {Link} from 'react-router-dom';

class PostsShow extends Component{

    componentWillMount(){
        this.props.fetchOnePost(this.props.match.params.id);
    }

    onDeleteClick(){
        this.props.deletePost(this.props.match.params.id).then(() => {
            this.props.history.push(`/`);
        });

    }

    render(){
        const{post} = this.props;

        if (!post) {
            return (<div>Loading...</div>)
        }
        return(
            <div>
                <Link to="/">Back to Index</Link>
                <button
                    className="btn btn-danger pull-right"
                    onClick={this.onDeleteClick.bind(this)}
                >
                    Delete Post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {post:state.posts.post}
}

export default connect(mapStateToProps, {fetchOnePost, deletePost})(PostsShow);