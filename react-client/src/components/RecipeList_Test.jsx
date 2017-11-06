import React from 'react';
import RecipeRow_Test from './RecipeRow_Test.jsx';

export default class RecipeList_Test extends React.Component {
  constructor(props) {
    super(props);
    this.createRecipeTable = this.createRecipeTable.bind(this);
  }

  createRecipeTable() {
    var table = [];
    for (var n = 0; n <= Math.floor(this.props.data.length / 3); n++) {
      table.push(<RecipeRow_Test data={this.props.data} row={n} />)
    }
    return table;
  }

  render() {
    return <div style={{"border": "2px solid pink"}}><table className="recipe-list"><tbody>{this.createRecipeTable()}</tbody></table></div>
  }
}
