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
          <table class="table table-striped table-bordered" id="example">
            <thead>
            
            <tr>
                <th>Name</th>
                <th>Docks available</th>
                <th>Bikes available</th>
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
         <div class="top-header d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-dark border-bottom box-shadow">
            <h5 class="my-0 mr-md-auto font-weight-normal">Demo App</h5>
            <nav class="my-2 my-md-0 mr-md-3">
              <a class="p-2 text-dark" href="#">Home</a>
            </nav>
          </div>

          <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mb-5 mx-auto text-center">
            <h1 class="display-4">Stations</h1>
            <p class="lead">Here we are getting stations details and num docks availables and num docks availables</p>
          </div>
      
       <App />
     
      </div>
      
)
};
}

export default App;