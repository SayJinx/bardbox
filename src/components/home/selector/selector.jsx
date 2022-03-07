/* eslint-disable react-hooks/exhaustive-deps */
import { React, useState, useEffect } from 'react';
import Select from 'react-select';
import { Card, } from 'react-bootstrap';
import './selector.css';

const game = {
  'camp1': {
        set1: 'PLkfbiMuK-mUinblYEf_fgfhWgvDZSSo52',
        set2: 'PL_YVtQT52tCe-0x0fiyXE7060LlsG8CFx',
        set3: 'PLk8P9Zfq6_boJJaCx-MGHAl5ZJsx-setH',
        set4: 'PLccmC0-jXVkiQF1uMehdwqSlpXafNAe_e'
    },
  'camp2': {
        set1: 'PL_YVtQT52tCd4QVH2MdU5ry47inusGaVV',
        set2: 'PL_YVtQT52tCfSU-nRuRJcbrPMnFFV6lPS',
        set3: 'PL_YVtQT52tCc_eAHX0NpRTNUfYRP9AGId',
        set4: 'PL_YVtQT52tCdid93V1emfyFahL9a4cj2g'
    },
  }

const optionsCamp = [
    {value: 'camp1', label: 'Dungeons & Dragons'},
    {value: 'camp2', label: 'Into the Border Wilds'}
];

const optionsVibe = [
    {value: 'set1', label: 'Tavern/Relax'},
    {value: 'set2', label: 'Battle'},
    {value: 'set3', label: 'Mystery'},
    {value: 'set4', label: 'Ambient',}
];

const DropdownGame = ({setPid}) => {

  const [campaign, setCamp] = useState({value: null});
  const [vibe, setVibe] = useState({value : null});

  useEffect(() => {
    if(campaign.value && vibe.value) {setPid(game[campaign.value][vibe.value])}
  }, 
  [campaign, vibe]);

    return (
      <Card className='h-100 shadow-sm bg-white rounded'>
        <div class="card-body">
          <table>
            <tbody>
              <tr>
                <Card.Title ClassName='m-auto p-20 font-weight-bold'>Campaign</Card.Title>
                <td>
                  <Select 
                    placeHolder='Select Campaign'
                    options={optionsCamp} 
                    autoFocus
                    onChange={setCamp}
                  />
                </td>
              </tr>
              <tr>
              <Card.Title ClassName='mb-0 font-weight-bold'>Vibe</Card.Title>
                <td>
                  <Select 
                        placeHolder='Select Vibe'
                        options={optionsVibe} 
                      autoFocus
                      onChange={setVibe}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    );


/*    constructor(props) {
        super(props);
        this.state={campaign: 'campNull',
         vibe: 'setNull'   };
    };

//    console.log('Dropdown printing before the return');
// NOTE 10/19 add background-color: to the css as soon as you figure out new color scheme??

    
    return (

        <table>
            <tbody>
                <tr>
                <th>Campaign</th>
                <td>
                    <select className="campaign">
                        <option value='campNull'>Select</option>
                        <option value='camp2'>Dungeons and Dragons</option>
                        <option value='camp1'>Into the Border Wilds</option>
                    </select>
                </td>
                </tr>
                <tr>
                    <th>Vibe</th>
                    <select className="vibe">
                        <option value='setNull'>Select</option>
                        <option value="set1">Tavern/Relax</option>
                        <option value='set2'>Battle</option>
                        <option value='set3'>Mystery</option>
                    </select>
                </tr>
            </tbody>
        </table>

/*       <div class='sidebar'>
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



};

export default DropdownGame