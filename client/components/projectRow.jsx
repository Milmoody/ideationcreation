import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import {
  Table,
} from '@devexpress/dx-react-grid-material-ui';
import { Store } from '../state/reducers/userReducer'
import { UPDATE_CURRENT_PROJECT, CURRENT_VIEW } from '../state/constants'

function ProjectRow({ row, ...restProps }){ 
    const { dispatch, state: { currentProject }} = useContext(Store);
    return (
        <Table.Row {...restProps} onClick={() => {
            dispatch({ type: CURRENT_VIEW, payload: "individualProject"})
            dispatch({ type: UPDATE_CURRENT_PROJECT, payload: row });
            //  <Link className={row["Project Name"]} to={`/${row["Project Name"]}`}></Link>
        }}>
        </Table.Row>
    )
}

export default ProjectRow;