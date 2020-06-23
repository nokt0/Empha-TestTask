import {Redirect} from 'react-router'
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {thunkLogout} from "../Store/thunks";

export function Logout() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(thunkLogout())
    })
    return (
        <Redirect exact to="/"/>
    )
}
