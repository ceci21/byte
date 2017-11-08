import React from 'react';
import RecipeEntry from './RecipeEntry.jsx';

export default class RecipeList extends React.Component {
  constructor(props) {
    super(props);
    this.createRecipeTable = this.createRecipeTable.bind(this);
  }

  createRecipeTable() {
    var table = [];
    for (var n = 0; n < 9; n++) {
      if (this.props.data[n] !== undefined) {
        table.push(<RecipeEntry id={n} data={this.props.data[n]} />);
      }
    }
    return table;
  }

  render() {
    return <div className="recipe-list">{this.createRecipeTable()}</div>
  }
}
