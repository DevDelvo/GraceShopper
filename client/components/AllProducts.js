import React, {Component} from 'react'
import {connect} from 'react-redux'
import {thunkGetAllHouses, addToCartThunk} from '../store'
import Treehouse from './TreeHouse'

class AllProducts extends Component {
  componentDidMount() {
    this.props.getTreeHouses()
  }

  renderTreeHouses = treeHouses => {
    const {user: {id}, isLoggedIn, addToCart} = this.props
    return treeHouses.map(house => (
      <Treehouse
        key={house.id}
        userId={id}
        isLoggedIn={isLoggedIn}
        house={house}
        addToCart={addToCart}
      />
    ))
  }

  render() {
    const {treeHouses} = this.props
    return (
      <div className="tree-houses-container">
        {this.renderTreeHouses(treeHouses)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    treeHouses: state.treeHouses,
    cart: state.cart,
    isLoggedIn: !!state.user.id,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTreeHouses: () => dispatch(thunkGetAllHouses()),
    addToCart: (house, userId) => dispatch(addToCartThunk(house, userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
