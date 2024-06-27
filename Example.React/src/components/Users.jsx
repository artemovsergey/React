import {useNavigate} from 'react-router-dom'
function Users() {

    const nav = useNavigate();
    const id = 3;
    return (
        <>
            <div>

                <h1> Каталог пользователей новых еще каталог </h1> 

                <button onClick={() => nav(`/user/${id}`)}>
                  Пользователь 1
                </button>

            </div>
        </>
    )

}

export default Users