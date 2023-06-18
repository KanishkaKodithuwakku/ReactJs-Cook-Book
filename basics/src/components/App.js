import React, { Component } from "react";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
    };
    this.getUsersData = this.getUsersData.bind(this);
  }

  async getUsersData() {
    try {
      this.setState({ loading: true });
      const response = await axios.get("https://www.melivecode.com/api/users");
      this.setState({ users: response.data });
      this.setState({ loading: false });
    } catch (error) {
      console.error("Error retrieving user data:", error);
      throw error;
    }
  }

  componentDidMount() {
    this.getUsersData();
  }

  render() {
    const { users, loading } = this.state;
    return (
      <div>
        <h1>User List</h1>
        {loading === true ? "Loading..." : ""}
        {loading && "Loading..."}
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <img src={user.avatar} alt="avatar" width="25" />
              {"  "+user.fname + " " + user.lname}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
