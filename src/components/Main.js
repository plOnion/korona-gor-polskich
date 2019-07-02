import React from "react";
import Mountain from "./Mountain";

class Main extends React.Component {
  state = {
    list: [],
    value: ""
  };

  componentDidMount() {
    fetch("./api.json")
      .then(response => response.json())
      .then(data =>{
        this.setState({
          list: data
        })}
      )
      .catch(error => console.log("Błąd: " + error));
  }

  render() {
    const list = this.state.list.map(mountain => <Mountain key={mountain.id} list={mountain} />);
    return (
      <>
        <h2> Korona gór polskich </h2>
        <div>
          <table
            style={{
              textAlign: "center",
              margin: "0 auto",
              border: "1px solid black",
              width: "80vw"
            }}
          >
            <thead>
              <tr>
                <th>Lp.</th>
                <th>Szczyt</th>
                <th>Wysokość</th>
                <th>Pasmo</th>
                <th>Współrzędne</th>
              </tr>
            </thead>
            <tbody>{list}</tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Main;
