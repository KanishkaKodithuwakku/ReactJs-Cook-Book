import React, { Component } from "react";
import Layout from "./Layouts/layout";
import Header from "./Layouts/Header";
import SearchBar from "./SearchBar";
import { v4 as uuidv4 } from "uuid";
import UserList from "./UserList";
class App extends Component {
  /**
   * The constructor method in React components is used for initializing the component's state
   * and binding event handlers. In your code, the constructor is present, but the state object
   * is empty. If you want to add state variables, you can define them within the state object.
   * Here's an example:
   * this.state = {
        count: 0,
        message: "Hello, World!",
        data: [],
        };
   */
  constructor(props) {
    /**
     * In JavaScript, super(props) is used inside the constructor of a class-based component to
     * call the constructor of its parent class. In the case of React components, super(props) is
     *  necessary to correctly initialize the component by passing the props parameter to the parent
     *  class constructor.When a class extends another class, as in the case of a React component
     * extending the Component class, the child class needs to call super(props) in its constructor
     * before accessing this.props or any other properties or methods inherited from the parent class.
     * This ensures that the parent class constructor is executed properly and the child class inherits
     * the necessary properties and methods.In the context of your code, super(props) is called to invoke
     *  the constructor of the Component class from the React library and pass the props parameter to it.
     * This allows the Component class to initialize properly, setting up the necessary functionality and
     * providing access to the props object within your component Without calling super(props), the component
     * may not function correctly, and accessing this.props or calling methods inherited from the Component
     * class might lead to unexpected behavior or errors.
     */
    super(props);

    this.state = {
      searchText: "",
      users: [
        {
          id: uuidv4(),
          name: "John Doe",
          age: 25,
          email: "johndoe@example.com",
          mobile: "1234567890",
        },
        {
          id: uuidv4(),
          name: "Jane Smith",
          age: 30,
          email: "janesmith@example.com",
          mobile: "9876543210",
        },
        {
          id: uuidv4(),
          name: "Bob Johnson",
          age: 35,
          email: "bobjohnson@example.com",
          mobile: "5555555555",
        },
        {
          id: uuidv4(),
          name: "Alice Brown",
          age: 27,
          email: "alicebrown@example.com",
          mobile: "9999999999",
        },
        {
          id: uuidv4(),
          name: "Michael Davis",
          age: 32,
          email: "michaeldavis@example.com",
          mobile: "1111111111",
        },
        {
          id: uuidv4(),
          name: "Emily Wilson",
          age: 29,
          email: "emilywilson@example.com",
          mobile: "7777777777",
        },
      ],
    };
    this.handleOnchangeSearch = this.handleOnchangeSearch.bind(this);
  }

  handleOnchangeSearch = (e) => {
    this.setState({ searchText: e.target.value });

    console.log(this.state.searchText);
  };

  render() {
    const headings = {
      title: "User List",
      subTitle: "Filter Users",
    };

    const { users, searchText } = this.state;

    const filterdUsers = users.filter((user) =>user.name.toLowerCase().indexOf(searchText.toLowerCase()))

    return (
      <Layout>
        <Header {...headings} />
        <SearchBar
          value={searchText}
          handleOnchangeSearch={this.handleOnchangeSearch}
        />
        <UserList users={filterdUsers} />
      </Layout>
    );
  }
}

export default App;
