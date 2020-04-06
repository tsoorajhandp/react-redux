import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
    render() {
        console.log(this.props);
        const { Props } = this.props;
        console.log(this.props.posts.length);
        return ( <
            div >
            Sooraj <
            /div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}


export default connect(mapStateToProps)(Login);