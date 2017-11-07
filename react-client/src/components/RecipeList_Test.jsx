import React from 'react';
import RecipeEntry_Test from './RecipeEntry_Test.jsx';

export default class RecipeList_Test extends React.Component {
  constructor(props) {
    super(props);
    this.createRecipeTable = this.createRecipeTable.bind(this);
  }

  createRecipeTable() {
    var table = [];
    for (var n = 0; n < this.props.data.length; n++) {
      table.push(<RecipeEntry_Test id={n} data={this.props.data[n]} />);
    }
    return table;
  }

  render() {
    return <div className="recipe-list">{this.createRecipeTable()}</div>
  }
}
