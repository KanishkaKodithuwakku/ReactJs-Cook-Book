import React, { Component } from "react";
import axios from "axios";
import Layout from "./Layout/Layout";
import ListBody from "./ListGroup/ListBody";
import UserForm from "./Form/UserForm";
import SearchBar from "./Form/SearchBar";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
      searchText: "",
    };
    this.getUsersData = this.getUsersData.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnChangeSearch = this.handleOnChangeSearch.bind(this);
    this.handleAddUserData = this.handleAddUserData.bind(this);
  }

  handleOnChangeSearch(e) {
    this.setState({ searchText: e.target.value });
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

  handleOnClick(userId) {
    // const userId = e.target.getAttribute("data-user-id");
    //const userId = parseInt(e.target.getAttribute("data-user-id"));
    // alert("Button clicked " + userId);
    this.setState((prevState) => ({
      users: prevState.users.filter((user) => user.id !== userId),
    }));
  }

  // handleAddUserData(user) {
  //   this.setState((prevState) => ({
  //     users: [...prevState.users, user],
  //   }));
  // }

  handleAddUserData(user) {
    this.setState({ users: this.state.users.concat(user) });
  }

  componentDidMount() {
    this.getUsersData();
  }

  render() {
    const { users, searchText } = this.state;
    const filterdUsers = users.filter(
      (user) => user.fname.toLowerCase().indexOf(searchText.toLowerCase()) > -1
    );
    return (
      <Layout>
        <UserForm handleAddUserData={this.handleAddUserData} />

        <SearchBar
          value={searchText}
          handleOnChangeSearch={this.handleOnChangeSearch}
        />
        <ListBody users={filterdUsers} handleOnClick={this.handleOnClick} />
      </Layout>
    );
  }
}

export default App;
