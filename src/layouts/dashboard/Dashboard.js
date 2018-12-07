import React, { Component } from 'react'
import Web3 from 'web3'
var provider = new Web3.providers.HttpProvider("http://localhost:9545");
var contract = require("truffle-contract");
var contractJson = require("/Users/anushajain/Documents/Every/build/contracts/SimpleStorage.json");
var SimpleStorage = contract(contractJson);

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
    this.state = {
      countNumber: 0
    }
  }

  componentDidMount() {
    SimpleStorage.setProvider(provider);
    SimpleStorage.deployed().then(function(instance) {
      console.log(instance);
      var simpleStorageInstance = instance;

      return simpleStorageInstance.increment();
    }).then((count) => {
      console.log(count.s);
      this.setState({ countNumber: count.s })
    });
  }

  // updateState() {
  //
  //   console.log(this.state.ContractInstance);
  //   this.state.ContractInstance.count((err, result) => {
  //     if(result!= null){
  //       this.setState({
  //         count: result
  //       })
  //     }
  //   });

    // SimpleStorage.deployed().then(function(instance) {
    //      var simpleStorageInstance = instance;
    //      console.log("trans");
    //    })
    //   .then(function(result) {
    //     // If this callback is called, the transaction was successfully processed.
    //     console.log("Transaction successful!")
    //   })
    //   .catch(function(e) {
    //     // There was an error! Handle it.
    //   });

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Dashboard</h1>
            <p><strong>Congratulations {this.props.authData.name}!</strong> If you're seeing this page, you've logged in with UPort successfully.</p>
            <p> Count is {this.state.countNumber} </p>
          </div>
        </div>
      </main>
    )
  }
 }

export default Dashboard
