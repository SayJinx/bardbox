import React from 'react';
import './selector.css';

const DropdownGame = () => {

//    console.log('Dropdown printing before the return');
// NOTE 10/19 add background-color: to the css as soon as you figure out new color scheme??

    
    return (

       <div class='sidebar'>
        <form>
        <label><h3>Games and Settings</h3></label>
        <select name="drop1" id="drop1">
            <option value="option 1">Dungeons and Dragons</option>
            <option value="option 2">Into the Borderwilds</option>
        </select>
        <label><h3>Vibes</h3></label>
        <select name='drop2' id='drop2'>
            <option value='option 1'>Tavern</option>
            <option value='option 2'>Battle</option>
            <option value='option 3'>Mystery</option>
        </select>
        <div>
        <button>Let's go!</button>
        </div>
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