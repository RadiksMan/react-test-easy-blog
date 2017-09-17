import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'


import {fetchPosts} from '../actions/index';

class PostsIndex extends Component {

    componentWillMount(){
        this.props.fetchPosts();
    }

    render(){
        return(
            <div>
                <div className="text-right">
                    <Link to="/posts/new" className="btn btn-primary" >Add a post</Link>
                </div>
                List of blog posts
            </div>
        )
    }
}

export default connect(null,{fetchPosts})(PostsIndex);