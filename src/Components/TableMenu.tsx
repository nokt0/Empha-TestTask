import React from "react";
import {Button, Form, Spinner} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {changeUserTableFilter, changeUserTableSortType} from "../Store/actions";
import {thunkFetchUsers} from "../Store/thunks";
import {SortType, UsersFetchStatus} from "../Store/types";
import {RootState} from "../Store/store";

export function TableMenu() {

    const dispatch = useDispatch()
    const fetchStatus: UsersFetchStatus = useSelector((state: RootState) => state.users.fetchStatus)
    dispatch(changeUserTableSortType(SortType.ASCENDING))
    dispatch(changeUserTableFilter(""))

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
                    <Form.Control type="text" placeholder="username"
                                  onChange={event => dispatch(changeUserTableFilter(event.target.value))}>
                    </Form.Control>
                    <Form.Label>Sort:</Form.Label>
                    <Form.Control as="select" className="mr-sm-2" custom
                                  onChange={event => dispatchSortType(event.target.value)}>
                        <option selected value="ASC">Ascending</option>
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
