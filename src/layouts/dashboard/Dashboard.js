import React, { Component } from 'react'
import Web3 from 'web3'
var provider = new Web3.providers.HttpProvider("http://localhost:9545");
var contract = require("truffle-contract");
// var contractJson = require('../../../build/contracts/SimpleStorage.json');
// var SimpleStorage = contract(contractJson);
// var simpleStorageInstance;
// SimpleStorage.setProvider(provider);

var contractJson = require('../../../build/contracts/ERC20Basic.json');
var ERCtoken = contract(contractJson);
var ERCtokenInstance;
ERCtoken.setProvider(provider);

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
    this.state = {
      countNumber: 12
    }

    this.incrementFunc = this.incrementFunc.bind(this)
  }

  // componentDidMount() {
  //   SimpleStorage.deployed().then(function(instance) {
  //     simpleStorageInstance = instance;
  //
  //     return simpleStorageInstance.get()
  //     }).then((count) => {
  //       console.log(count.toString());
  //       this.setState({ countNumber: count.toString() })
  //     }).catch(function(err) {
  //         console.log(err.message);
  //   });
  // }

  componentDidMount() {
    ERCtoken.deployed().then(function(instance) {
      ERCtokenInstance = instance;
      console.log("I am " + ERCtokenInstance.address);
      ERCtokenInstance.transfer(ERCtokenInstance.address, "2");

      return ERCtokenInstance.balanceOf(0x6330a553fc93768f612722bb8c2ec78ac90b3bbc)
      }).then((count) => {
        console.log(count.toString());
        this.setState({ countNumber: count.toString() })
      }).catch(function(err) {
          console.log(err.message);
    });
  }

  incrementFunc() {
    console.log("func working");
    // SimpleStorage.deployed().then(function(instance) {
    //   simpleStorageInstance = instance;
    //
    //   return simpleStorageInstance.increment()
    //   }).then((count) => {
    //     console.log(count.toString());
    //     this.setState({ countNumber: count.toString() })
    //   }).catch(function(err) {
    //       console.log(err.message);
    // });
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Dashboard</h1>
            <p><strong>Congratulations {this.props.authData.name}!</strong> If you're seeing this page, you've logged in with UPort successfully.</p>
            <p> Count is {this.state.countNumber} </p>
            <button onClick={this.incrementFunc}> Click Me! </button>
          </div>
        </div>
      </main>
    )
  }
 }

export default Dashboard
