import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'


import {fetchPosts} from '../actions/index';

class PostsIndex extends Component {

    componentWillMount(){
        this.props.fetchPosts();
    }

    renderPosts(){
        return this.props.posts.map((post)=>{
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={"posts/"+post.id}>
                        <span className="pull-right">{post.categories}</span>
                        <strong>{post.title}</strong>
                    </Link>
                </li>
            )
        })
    }

    render(){
        return(
            <div>
                <div className="text-right">
                    <Link to="/posts/new" className="btn btn-primary" >Add a post</Link>
                </div>
                <h3>posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {posts:state.posts.all}
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);