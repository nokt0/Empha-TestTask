import User from "../Store/Model/User";
import {Table} from "react-bootstrap";
import React from "react";
import {RootState} from "../Store/store";
import {useSelector} from "react-redux";
import {SortType} from "../Store/types";

export default function UsersTable() {
    const usersArray: any = useSelector((state: RootState) => state.users.users)
    const sortType: any = useSelector((state: RootState) => state.userTable.sortType)
    const usernameFilterWord: any = useSelector((state: RootState) => state.userTable.usernameFilterWord)


    function sortUsers(user1: User, user2: User) {
        const sort = (u1: User, u2: User) => {
            if (u1.id > u2.id) {
                return 1
            }
            if (u1.id < u2.id) {
                return -1
            }
            return 0
        }

        switch (sortType) {
            case SortType.ASCENDING:
                return sort(user1, user2)
            case SortType.DESCENDING:
                return sort(user1, user2) * -1
        }
    }

    function filterUsers(user: User) {
        const regexp = new RegExp(`.*${usernameFilterWord}.*`)
        const filter = (u: User) => regexp.test(u.username)

        return filter(user);
    }

    return (
        <Table variant="dark" responsive className="text-break" striped bordered hover size="sm">
            <thead>
            <tr>
                <th>id</th>
                <th>Username</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Password</th>
                <th>Is Active</th>
                <th>Last Login</th>
                <th>Is Superuser</th>
            </tr>
            </thead>
            <tbody>
            {usersArray.sort(sortUsers).filter(filterUsers).map((user: User) => {
                return (
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.password}</td>
                        <td>{user.is_active ? "true" : "false"}</td>
                        <td>{user.last_login}</td>
                        <td>{user.is_superuser ? "true" : "false"}</td>
                    </tr>
                )
            })}
            </tbody>
        </Table>
    )
}
