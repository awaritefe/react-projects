import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning!</h4>
                <p>Are you sure you want to do this?</p>
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail 
                    author="Danny Boi" 
                    timeStamp="Today at 4:30PM" 
                    tweet="Learning React BABY!"
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard >
            <ApprovalCard>
                <CommentDetail 
                    author="Kevie Kev" 
                    timeStamp="Yesterday at 1:22PM" 
                    tweet="Chilling with the funky bunch!" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Mr Mojojojo" 
                    timeStamp="Today 3:50AM" 
                    tweet="Early bird takes over the world..." 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));