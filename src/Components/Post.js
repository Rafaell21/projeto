import React from 'react';
import Comment from './Comment';
import App from './App'


export default class Post extends React.Component{

    constructor(props)
        {
            super(props);

            this.state = 
                {
                    Comments:[],
                    newCommentText: ''

                };

                this.handleSubimit = this.handleSubimit.bind(this);
                this.handleTextChange = this.handleTextChange.bind(this);
               
            }
            handleSubimit(e){
                
               this.setState({
                   Comments: [
                       ...this.state.Comments,
                       { text: this.state.newCommentText }
                   ]
               })

                this.setState({newCommentText:''});
                e.preventDefault();

            }
            handleTextChange(e){
                this.setState({ newCommentText: e.target.value})
            }


    render() {
        return(
            <div>
                <h2>{ this.props.title }</h2>
                <form onSubmit={this.handleSubimit}>
                    <input 
                    
                    value={this.state.newCommentText}

                    onChange={this.handleTextChange} 
                    />

                 <button type="submit">Comentar</button>
                </form>
                { this.state.Comments.map((comment, index) => {
                    return <Comment key={index} text={comment.text}/>
                })}
            </div>
        )
    }
}