export const addPost = (user) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection("posts").add(user).then(res => {
            console.log(" post added successfully");
        }).catch(err => {
            console.log("post was not added successfully");
        })
    }
}


export const deletePost = (user_id) => {
    return (dispatch, getState, {getFirestore}) =>{
        const firestore = getFirestore();
        firestore.collection("posts").doc(user_id).delete()
        .then(res => {
            console.log("deleted")
        })
        .catch(err => {
            console.log("error")
        })
    }
};


export const editPost = (user_id, updated_info) => {
    return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection("posts").doc(user_id).set(updated_info)
    .then(res => {
        console.log("post sucessfully updated" )
    })
    .catch(err =>{
        console.log("Error updating post")
    })
}
}