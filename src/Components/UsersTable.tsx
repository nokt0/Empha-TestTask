import User from "../Store/Model/User";
import {Table} from "react-bootstrap";
import React from "react";
import {RootState} from "../Store/store";
import {useDispatch, useSelector} from "react-redux";
import {SortType} from "../Store/types";
import {css, StyleSheet} from 'aphrodite';
import {changeUserTableSortType} from "../Store/actions";

export default function UsersTable() {
    const usersArray: any = useSelector((state: RootState) => state.users.users)
    const selectSortType: any = useSelector((state: RootState) => state.userTable.sortType)
    const usernameFilterWord: any = useSelector((state: RootState) => state.userTable.usernameFilterWord)
    const dispatch = useDispatch();

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

        switch (selectSortType) {
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

    function toggleSortType() {
        switch (selectSortType) {
            case SortType.ASCENDING:
                dispatch(changeUserTableSortType(SortType.DESCENDING));
                break;
            case SortType.DESCENDING:
                dispatch(changeUserTableSortType(SortType.ASCENDING))
                break;
        }
    }

    function showArrow() {
        switch (selectSortType) {
            case SortType.ASCENDING:
                return String.fromCharCode(9650) // ▲ - char
            case SortType.DESCENDING:
                return String.fromCharCode(9660) // ▼ - char
        }
    }

    return (
        <Table variant="dark" className={css(styles.wordWrap)} responsive bordered hover size="sm">
            <thead className={css(styles.noWrap)}>
            <tr>
                <th onClick={() => toggleSortType()}>
                    id {showArrow()}
                </th>
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
                        <td style={{'minWidth': '40px'}}>{user.id}</td>
                        <td style={{'minWidth': '120px'}}>{user.username}</td>
                        <td style={{'minWidth': '120px'}}>{user.first_name}</td>
                        <td style={{'minWidth': '150px'}}>{user.last_name}</td>
                        <td style={{'minWidth': '50px'}}>{user.password}</td>
                        <td style={{'minWidth': '74px'}}>{user.is_active ? "true" : "false"}</td>
                        <td style={{'minWidth': '100px'}}>{user.last_login}</td>
                        <td style={{'minWidth': '74px'}}>{user.is_superuser ? "true" : "false"}</td>
                    </tr>
                )
            })}
            </tbody>
        </Table>
    )
}

const styles = StyleSheet.create({
    wordWrap: {
        wordBreak: 'break-all'
    },
    noWrap: {
        whiteSpace: 'nowrap'
    }
})
