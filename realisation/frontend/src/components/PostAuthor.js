import { useSelector } from "react-redux";
import { selecteAllUsers } from "../features/users/usersSlice";


const PostAuthor = ({ userId }) => {
    const users = useSelector(selecteAllUsers);
    const author = users.find(user => user.id === userId)
    return (
        <span>by { author ? author.name : "Unknown author" }</span>
    )
}

export default PostAuthor;