function Playlist(props) {

    return (

        <div>
        
         <h2>{props.name}</h2>
         <table>
            <thead>
             <th>Vibe</th>
             <th>Playlist Link</th>
            </thead>

            <tbody>
              <tr>
                <td>Tavern</td>
                <td>{props.lists.tavern}</td>
              </tr>
              <tr>
                <td>Battle</td>
                <td>{props.lists.battle}</td>
              </tr>
              <tr>
                <td>Mystery</td>
                <td>{props.lists.mystery}</td>
              </tr>
            </tbody>
         </table>

        </div>
    );

}

export default Playlist