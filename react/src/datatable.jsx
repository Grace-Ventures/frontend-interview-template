import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

import {useEffect, useState} from 'react'


function actionCellRenderer(params) {
    /* This function is used to render the edit/update/cancel buttons 
    for inline row editing in our data table
    */
    let editingCells = params.api.getEditingCells();
    // checks if the rowIndex matches in at least one of the editing cells
    let isCurrentRowEditing = editingCells.some((cell) => {
        return cell.rowIndex === params.node.rowIndex;
    });

    if (isCurrentRowEditing) {
        return (
            <div>
                <button className="action-button update" data-action="update"> update  </button>
                <button className="action-button cancel" data-action="cancel" > cancel </button>
            </div>)
    } else {
        return (
            <div><button className="action-button edit" data-action="edit" > edit  </button></div>
        )
    }
}

function onCellClicked(params) {
    /*
    Click handler logic for edit/update/cancle buttons for inline editing
    */
    if (params.column.colId === "actions" && params.event.target.dataset.action) {

        let action = params.event.target.dataset.action;
        if (action === "edit") {
            params.api.startEditingCell({
                rowIndex: params.node.rowIndex,
                // gets the first columnKey
                colKey: params.columnApi.getDisplayedCenterColumns()[0].colId
            });
        }

        if (action === "update") {
            //This is where we would connect validations and server-side updates for 
            // row editing
            params.api.stopEditing(false);
        }

        if (action === "cancel") {
            params.api.stopEditing(true);
        }
    }
}


function refreshActionButtons(params) {
    /* helper method to refresh action buttons when toggling between edit & update modes*/
    params.api.refreshCells({
        columns: ["actions"],
        rowNodes: [params.node],
        force: true
    });
}


const addressStringRegExp = new RegExp('^[a-zA-Z ]+,\\s[A-Z]{2}\\s[0-9]{5}$');

function isAddressValid(address) {
    
    if (typeof address !== "string") {
        return false
    }

    

    return addressStringRegExp.test(address)
}

function isDescriptionValid(description) {
    if (typeof description !== "string") {
        return false
    }
    if (description.length < 1 || description.length > 128) {
        return false
    }

    return true
}


function addressValueGetter(params) {
    /*
    This function parses the addrses object returned from the data api call and formats it 
    into a string. Also handles inline row editing which returns the address as a string.
    */
    if (typeof params.data.address === "string" || params.data.address instanceof String) {
        return params.data.address
    }
    return `${params.data.address.city}, ${params.data.address.state} ${params.data.address.zipCode}`
}

function addressValueSetter(params) {
    /*
        This function performs a validation check for inline editing before
        allowing the update to take effect. If validation fails the field will 
        not update.
    */
    if (isAddressValid(params.newValue)) {
        params.data.address = params.newValue
        return true
    }
    console.log("Address Validation Failed, not updating")
    return false
}

function descriptionValueSetter(params) {
     /*
        This function performs a validation check for inline editing before
        allowing the update to take effect. If validation fails the field will 
        not update.
    */
    if (isDescriptionValid(params.newValue)) {
        params.data.description = params.newValue
        return true
    }

    console.log("Validation failed for updated description. not updating")
    return false
}

function AGTable(props) {
    /* Column settings for the AG Grid data  
    */
    const [colDefs, setColDefs] = useState([
        { field: "name", filter: true, rowDrag: true },  //rowDrag allows us to custom sort rows.
        { field: "id", filter: true },
        {
            field: "description", filter: true, 
            editable: true,
            suppressKeyboardEvent: () => true,    //Prevents enter key from saving inline edits.
            valueSetter: descriptionValueSetter
        },
        {
            field: "address", filter: true,
            editable: true,
            valueGetter: addressValueGetter,
            valueSetter: addressValueSetter,
            suppressKeyboardEvent: () => true
        },
        { field: "actions", cellRenderer: actionCellRenderer }
    ])

    const [gridOptions, setGridOptions] = useState({
        rowDragManaged: true,
        suppressMoveWhenRowDragging: true,
        editType: 'fullRow'
    })

    return (
        <div className="ag-theme-quartz" // applying the grid theme
            style={{ height: 500 }} // the grid will fill the size of the parent container
        >
            <AgGridReact
                onCellClicked={onCellClicked}
                onRowEditingStopped={refreshActionButtons}
                onRowEditingStarted={refreshActionButtons}
                gridOptions={gridOptions}
                rowData={props.rowData}
                columnDefs={colDefs}
            />
        </div>
    )
}

export default AGTable