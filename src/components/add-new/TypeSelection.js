import React from 'react';
const TypeSelection = (props) => {
    return (

        <div onChange={props.onChangeValue}>
            <input defaultChecked type="radio" value="user" name="gender" /> User
            <input type="radio" value="repos" name="gender" /> Repositories
        </div>
    )
}

export default TypeSelection;