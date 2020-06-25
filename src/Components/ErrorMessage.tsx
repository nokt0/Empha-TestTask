import {Card} from "react-bootstrap";
import React from "react";

export default function ErrorMessage(props: { msg: string }) {

    return (
        <Card bg="danger" className="text-center p-0">
            <Card.Body>
                {props.msg}
            </Card.Body>
        </Card>
)
}
