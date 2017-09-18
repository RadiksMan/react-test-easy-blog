import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

import { createPost } from '../actions/index';

import {Link} from 'react-router-dom';

class PostsNew extends Component {

    onSubmit(props){
        this.props.createPost(props).then(()=>{
            //blogpost has been created, navigate the user to the index
            //we navigate by callng this.props.history.push
            this.props.history.push(`/`)
        });
    }

    render(){

        const {fields:{title,categories,content},handleSubmit} = this.props;

        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Create A New Post</h3>
                <div className={`form-group ${title.touched && title.invalid ? 'text-danger' : ''}`}>
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                    <div className="text-help">
                        {title.touched ? title.error : ''}
                    </div>
                </div>
                <div className={`form-group ${categories.touched && categories.invalid ? 'text-danger' : ''}`}>
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories} />
                    <div className="text-help">
                        {categories.touched ? categories.error : ''}
                    </div>
                </div>
                <div className={`form-group ${content.touched && content.invalid ? 'text-danger' : ''}`}>
                    <label>Content</label>
                    <textarea type="text" className="form-control" {...content} />
                    <div className="text-help">
                        {content.touched ? content.error : ''}
                    </div>
                </div>
                <button className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        )
    }
}

function validate(values){
    const errors = {};

    if (!values.title) {
        errors.title = 'Enter a username'
    }
    if (!values.categories) {
        errors.categories = 'Enter a categories'
    }
    if (!values.content) {
        errors.content = 'Enter a content'
    }

    return errors;
}

//connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: 1st s form  config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
    form: 'PostsNewForm',
    fields:['title','categories','content'],
    validate
}, null , {createPost})(PostsNew);