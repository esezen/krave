import React, { Component } from "react";
import classes from "./SearchRestaurant.css";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import { Form, Button, Icon } from "semantic-ui-react";

export class SearchRestaurant extends Component {
  /*
  
*/

  componentDidMount() {}
  state = {};

  onSignUpClick = () => {
    this.props.history.push("/auth");
  };
  render() {
    return (
      <div className={classes.SearchRestaurant}>
        <Form>
          <Form.Group widths="equal">
            <Form.Input width={3} fluid placeholder="Burger, Seafood, Burger" />
            <Form.Input width={3} fluid placeholder="Location" />
            <Form.Button width={1} color="red">
              Search!
            </Form.Button>
          </Form.Group>
        </Form>
        <Button color="green" animated onClick={this.onSignUpClick}>
          <Button.Content visible>Sign In</Button.Content>
          <Button.Content hidden>
            <Icon name="right arrow" />
          </Button.Content>
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    isAuth: state.auth.isAuth
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchRestaurant);
