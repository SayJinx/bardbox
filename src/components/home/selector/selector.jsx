import React from 'react';
import Dropdown from 'react-bootstrap/dropdown'
import './selector.css';

const DropdownGame = () => {

    console.log('Dropdown printing before the return');

    
    return (

       <div>
        <form>
        <label>Games and Settings</label><br />
        <select name="drop1" id="drop1">
            <option value="option 1">Dungeons and Dragons</option>
            <option value="option 2">Into the Borderwilds</option>
        </select>
        </form>
        </div>


/*        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Games and Settings
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Dungeons and Dragons</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Into the Borderwilds</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        */

    )

};

export default DropdownGame