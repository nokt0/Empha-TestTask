import React, {useEffect, useState} from "react";
import {Button, Card, Col, Form, Spinner} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {changeUserTableFilter} from "../Store/actions";
import {thunkFetchUsers} from "../Store/thunks";
import {UsersFetchStatus} from "../Store/types";
import {RootState} from "../Store/store";
import ErrorMessage from "./ErrorMessage";

export function TableMenu() {

    const dispatch = useDispatch()
    const fetchStatus: UsersFetchStatus = useSelector((state: RootState) => state.users.fetchStatus)
    const usernameFilterWord: any = useSelector((state: RootState) => state.userTable.usernameFilterWord)
    const [filterWord, setFilterWord] = useState("")

    useEffect(() => {setFilterWord(usernameFilterWord)})

    return (
        <div>
            {fetchStatus === UsersFetchStatus.FETCHING_HAS_ERRORED
                ? (<ErrorMessage msg={"Fetch Error"}/>) : ""}
            <Card bg="light">
                <Card.Header>Menu</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Row className="align-items-end">
                            <Col md="auto" xs="12">
                                <Form.Label>Filter:</Form.Label>
                                <Form.Control type="text" placeholder="username" value={filterWord}
                                              onChange={event => {
                                                  setFilterWord(event.target.value)
                                                  return dispatch(changeUserTableFilter(event.target.value))
                                              }}>
                                </Form.Control>
                            </Col>
                            <Col md="auto" className="p-xs-auto" xs="4">
                                {fetchStatus === UsersFetchStatus.FETCHING_IN_PROGRESS
                                    ? (<Button variant="primary" disabled>
                                        <Spinner
                                            as="span"
                                            animation="border"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        />
                                    </Button>)
                                    : (<Button onClick={() => dispatch(thunkFetchUsers())}>Refresh</Button>)
                                }
                            </Col>
                        </Form.Row>


                    </Form>
                </Card.Body>
            </Card>

        </div>)
}
