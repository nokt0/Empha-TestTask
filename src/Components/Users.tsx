import React from "react";
import {RootState} from "../Store/store";
import {useDispatch, useSelector} from "react-redux";
import User from "../Store/Model/User";
import {Jumbotron, Table} from "react-bootstrap";
import {TableMenu} from "./TableMenu";

export default function Users() {

    const selectUsersArray = (state: RootState) => state.users.users
    const usersArray: any = useSelector(selectUsersArray)
    const dispatch = useDispatch()

    //dispatch(thunkFetchUsers())

    return (
        <div>
            <Jumbotron className=" min-vh-100 align-items-center">
                <TableMenu/>
                <Table variant="dark" responsive className="text-break" striped bordered hover size="sm">
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>Username</th>
                        <th>First Name</th>
                        <th className="mw-100 text-break">Last Name</th>
                        <th>Password</th>
                        <th>Is Active</th>
                        <th>Last Login</th>
                        <th>Is Superuser</th>
                    </tr>
                    </thead>
                    <tbody>
                    {usersArray.map((user: User) => {
                        return (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.first_name}</td>
                                <td className="w-25 text-break">{user.last_name}</td>
                                <td>{user.password}</td>
                                <td>{user.is_active}</td>
                                <td>{user.last_login}</td>
                                <td>{user.is_superuser}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
            </Jumbotron>

        </div>
    )
}
