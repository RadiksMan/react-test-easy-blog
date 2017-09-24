import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

import _ from 'lodash';

import { createPost } from '../actions/index';

import {Link} from 'react-router-dom';

const FIELDS = {
    title:{
        type:'input',
        label: 'Title for Post'
    },
    categories:{
        type:'input',
        label: 'Enter some categories for this post'
    },
    content:{
        type:'textarea',
        label: 'Post Contents'
    }
}
//['title','categories','content'];

class PostsNew extends Component {

    onSubmit(props){
        this.props.createPost(props).then(()=>{
            //blogpost has been created, navigate the user to the index
            //we navigate by callng this.props.history.push
            this.props.history.push(`/`)
        });
    }

    renderField(fieldConfig, field){
        const fieldHelper = this.props.fields[field];
        //console.log('field',field)
        return (
            <div key={Math.random()} className={`form-group ${fieldHelper.touched && fieldHelper.invalid ? 'text-danger' : ''}`}>
                <label>{fieldConfig.label}</label>
                <fieldConfig.type type="text" className="form-control" {...fieldHelper} />
                <div className="text-help">
                    {fieldHelper.touched ? fieldHelper.error : ''}
                </div>
            </div>
        )
    }

    render(){

        const {handleSubmit} = this.props;

        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Create A New Post</h3>

                {_.map(FIELDS, this.renderField.bind(this) )}

                <button className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        )
    }
}

function validate(values){
    const errors = {};

    //console.log('values',values)
    _.each(FIELDS, (type,fieldName) => {
        //console.log('type',type,'            field',fieldName)
        if (!values[fieldName]) {
            errors[fieldName] = `Enter a ${fieldName}`
        }
    })

    return errors;
}

//connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: 1st s form  config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
    form: 'PostsNewForm',
    fields:_.keys(FIELDS),
    validate
}, null , {createPost})(PostsNew);