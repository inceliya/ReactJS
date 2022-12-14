import { useDispatch, useSelector } from "react-redux";
import { addUsers, fetchUsers, removeUser } from "../../store/slices/users";

const Users = () => {
    const dispatch = useDispatch();
    const list = useSelector(state => state.users.list);

    const generateUser = () => {
        return {
            name: `Petya ${Date.now()}`,
            id: Date.now()
        }
    }

    const handleAddUser = () => dispatch(addUsers([generateUser()]));
    const handleFetchUsers = () => dispatch(fetchUsers());
    const handleRemoveUser = (id) => dispatch(removeUser(id));

    return (
        <>
            <button onClick={handleAddUser}>Add user</button>
            <button onClick={handleFetchUsers}>Add users from fakeAPI</button>

            {list.length ?
                <>
                    <h3>Users</h3>
                    {list.map(user =>
                        <div key={user.id}>
                            <p href='#' onClick={() => handleRemoveUser(user.id)}>
                                {user.name}
                            </p>
                        </div>
                    )}
                </>
                :
                <p>Нікого немає вдома</p>
            }
        </>
    );
}

export default Users;