import React from "react";
import { connect } from "react-redux";
import { CharacterList } from "../components";
// import actions
import { getCharacter } from '../actions';

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.getCharacter();
  }

  render() {
    if (this.props.fetching) {
      return (
        <div className="loading">
          loading...
        </div>
      )
    }
    return (
      <div className="container">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => ({
  fetching: state.fetching,
  characters: state.characters
})

export default connect(
  mapStateToProps,
  { getCharacter }
)(CharacterListView);
