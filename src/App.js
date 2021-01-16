import React from 'react';
import './App.css';

import Stations from './Stations';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
const client = new ApolloClient({
  uri: "https://cors-anywhere.herokuapp.com/https://gbfs-graphql.vercel.app/api/graphql"
});


class App extends React.Component {
  componentDidMount() {
    //initialize datatable
    setTimeout(function(){   $('#example').DataTable(); }, 2000);
      
    
 }
 
  render() {
   
    const App = () => (
      <ApolloProvider client={client}>
        <div className="container">
        
          <div>
          <table className="table table-striped table-bordered" id="example">
            <thead>
            
            <tr id="row1">
                <th>Name</th>
                <th>Bikes available</th>
                <th>Docks available</th>
            </tr>
            </thead>
            <tbody>
            <Stations />
            </tbody>
        </table>
          </div>
        </div>
      </ApolloProvider>
    );
     
    return (
    
      <div className="maincontainer mb-5">
         <div className="top-header d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-dark border-bottom box-shadow">
            <h5 className="my-0 mr-md-auto font-weight-normal">Demo App</h5>
            <nav className="my-2 my-md-0 mr-md-3">
              <a href="#" className="p-2 text-dark" >Home</a>
            </nav>
          </div>

          <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mb-5 mx-auto text-center">
            <h1 className="display-4" id="display">Stations</h1>
            <p className="lead" id="lead">Details of stations Where Bikes and Docks availables</p>
          </div>
      
       <App />
     
      </div>
      
)
};
}

export default App;