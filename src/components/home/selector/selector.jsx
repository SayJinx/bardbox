import React from 'react';
import './selector.css';

const DropdownGame = () => {

    return (

        <div>
        <form>
        <label>Game</label>
        <select name="drop1" id="drop1">
            <option value="option 1">Dungeons and Dragons</option>
            <option value="option 2">Into the Borderwilds</option>
        </select>
        </form>
        </div>

    )

};

export default DropdownGame