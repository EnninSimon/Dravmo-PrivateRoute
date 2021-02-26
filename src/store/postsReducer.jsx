const initialState = {
    users: [
        {
            Name: "Maxwell Darko",
            ProjectName: "Construction",
            ProjectDescription: "Construction work going on in the Lower West Akim in the Eastern Reagion of Ghana.",
            ProjectLocation: "Asamankese",
            Date: "2020-12-15",
            Condition: "Ongoing",
            Picture: "",
            id: "bksdsdw-cjsc-cj"
        }
    ]
};


const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_POST":
            const newPost = {
                Name: action.payload.Name,
                ProjectName: action.payload.ProjectName,
                ProjectDescription: action.payload.ProjectDescription,
                ProjectLocation: action.payload.ProjectLocation,
                Date: action.payload.Date,
                Condition: action.payload.Condition,
                Picture: action.payload.Picture,
                id: action.payload.id 
            };
            return { ...state, users: [...state.users, newPost] }
        case "DELETE_POST":
            const filteredPosts = state.users.filter(user => user.id !== action.payload);
            return {...state, users: filteredPosts}
            case "EDIT_POST":
                const editedPosts = state.users.map(user => {
                    if (user.id === action.user_id) {
                        return {...state, ...action.updated_info}
                    } else {
                        return user;
                    }
                });
                return {...state, users: editedPosts}
        default:
            return state;
    }
}


export default postsReducer;