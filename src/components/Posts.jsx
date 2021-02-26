import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Container, Button, Spinner, Card } from 'react-bootstrap';
import Post from './Post';

const Posts = (props) => {
    let displayInfo;
    if (props.requesting.posts) {
        displayInfo = <Container style={{ textAlign: "center", marginTop: "2rem" }}>
            <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading... 
            </Button>
        </Container>
    } else if (props.requested.posts && props.posts.length === 0) {
        displayInfo = <Container style={{ textAlign: "center", marginTop: "5rem", marginBottom:"6rem"}}>
            <Card border="danger" >
                <Card.Header>No Post Available!</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Try adding some post :)
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    } else if (props.requested.posts && props.posts.length > 0) {
        displayInfo = props.posts.map((user) => {
            return <Post userInfo={user} key={user.id}
                deletePost={props.deletePost}
                editPost={props.editPost}
            />
        })
    }

    return (
        <Container>
            {displayInfo}
        </Container>
    );
}

const mapStateToProps = (state) => ({
    usersData: state.usersState.users,
    posts: state.firestore.ordered.posts,
    requesting: state.firestore.status.requesting,
    requested: state.firestore.status.requested
})

export default compose(
    connect(mapStateToProps),
    firestoreConnect(["posts"])
)(Posts);
