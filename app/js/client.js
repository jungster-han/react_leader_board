import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import MDSpinner from 'react-md-spinner';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Table from './components/Table';

const app = document.getElementById('app');

class Layout extends React.Component {
  constructor () {
    super();
    this.state = {
    recentCampers: [],
    allTimeCampers: [],
    currentView: 'recentCampers'
    };
  }

  componentWillMount() {
    axios
    .all([this.fetchRecentCampers(), this.fetchAllTimeCampers()])
    .then(axios.spread((recentCampers, allTimeCampers) => {
      this.setState({
        recentCampers: recentCampers.data,
        allTimeCampers: allTimeCampers.data
      });
    }));
  }

  fetchRecentCampers(){
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
  }
  fetchAllTimeCampers() {
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
  }
  ChangeView(currentView) {
    this.setState({ currentView});
  }
  render() {
    //0 as false
    if(!this.state.recentCampers.length && !this.state.allTimeCampers.length){
      return <MDSpinner className="spinner" size={100} />
    }
    return (
      <div className="container">
        <Nav />
        <h2>{`Viewing Top ${this.state.currentView}`}</h2>
        <button onClick={()=> this.ChangeView('recentCampers')} className="btn btn-default">Show Recent</button>
        <button onClick={()=> this.ChangeView('allTimeCampers')} className="btn btn-default">Show All-Time</button>
        <Table campers={this.state[this.state.currentView]}/>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Layout/>, app);
