import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";

export function TableMenu() {

    const [usernameFilter,setUsernameFilter] = useState("")


    return (
        <div>
            <Form inline>
                <Form.Label>Filter:</Form.Label>
                <Form.Control type="text" placeholder="username" onChange={event => setUsernameFilter(event.target.value)}>
                </Form.Control>
                <Button>Refresh</Button>
            </Form>
        </div>)
}
