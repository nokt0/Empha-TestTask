import React, {useEffect, useState} from "react";
import {Button, Form, Spinner} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {changeUserTableFilter, changeUserTableSortType} from "../Store/actions";
import {thunkFetchUsers} from "../Store/thunks";
import {SortType, UsersFetchStatus} from "../Store/types";
import {RootState} from "../Store/store";

export function TableMenu() {

    const dispatch = useDispatch()
    const fetchStatus: UsersFetchStatus = useSelector((state: RootState) => state.users.fetchStatus)
    const usernameFilterWord: any = useSelector((state: RootState) => state.userTable.usernameFilterWord)
    const selectSortType: any = useSelector((state: RootState) => state.userTable.sortType)
    const [filterWord, setFilterWord] = useState("")
    const [sortingType, setSortingType] = useState("ASC")
    useEffect(() => {
        setFilterWord(usernameFilterWord)
        if (selectSortType === SortType.ASCENDING) {
            setSortingType("ASC")
        }
        if (selectSortType === SortType.DESCENDING) {
            setSortingType("DESC")
        }
    })

    function dispatchSortType(sortType: string) {
        {
            switch (sortType) {
                case "ASC":
                    return dispatch(changeUserTableSortType(SortType.ASCENDING))
                case "DESC":
                    return dispatch(changeUserTableSortType(SortType.DESCENDING))
                default:
                    return dispatch(changeUserTableSortType(SortType.ASCENDING))
            }
        }
    }

    return (
        <div>
            <Form.Group>
                <Form inline>
                    <Form.Label>Filter:</Form.Label>
                    <Form.Control type="text" placeholder="username" value={filterWord}
                                  onChange={event => {
                                      setFilterWord(event.target.value)
                                      return dispatch(changeUserTableFilter(event.target.value))
                                  }}>
                    </Form.Control>
                    <Form.Label>Sort:</Form.Label>
                    <Form.Control as="select" className="mr-sm-2" custom value={sortingType}
                                  onChange={event => {
                                      setSortingType(event.target.value)
                                      return dispatchSortType(event.target.value)
                                  }}>
                        <option value="ASC">Ascending</option>
                        <option value="DESC">Descending</option>
                    </Form.Control>
                    {fetchStatus === UsersFetchStatus.FETCHING_IN_PROGRESS
                        ? (<Button variant="primary" disabled>
                            <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            Loading...
                        </Button>)
                        : (<Button onClick={() => dispatch(thunkFetchUsers())}>Refresh</Button>)
                    }
                </Form>
            </Form.Group>
        </div>)
}
