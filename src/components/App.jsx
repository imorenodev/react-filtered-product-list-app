import React from 'react';

class ProductCategoryRow extends React.Component {
  render() {
    return (
      <tr>
        <th colSpan="2">{this.props.category}</th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    var name = this.props.product.stocked ?
      this.props.product.name :
        <span style={{color: 'red'}}>
          {this.props.product.name}
        </span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    )
  }
}

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  } 
}

class ProductTable extends React.Component {
  render() {
    let rows = []; 
    let lastCategory = null;
    this.props.products.forEach(p => {
      if (p.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={p.category} key={p.category} />);
      }
      rows.push(<ProductRow product={p} key={p.name} />);
      lastCategory = p.category;
    }); 
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  } 
}

export default React.createClass({
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    )
  }
});
