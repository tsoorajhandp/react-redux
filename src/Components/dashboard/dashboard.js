import React from 'react';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
    render() {
        console.log(this.props);
        const { Props } = this.props;
        console.log(this.props.posts.length);
        return ( <
            div className = "h-full py-4" > Dashboard { this.props.posts } <
            /div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}


export default connect(mapStateToProps)(Dashboard)