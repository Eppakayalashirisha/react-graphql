import React from 'react';

import { Query } from "react-apollo";
import gql from "graphql-tag";
const Stations = () => (
  <Query
    query={gql`
      {
        stations
        {
            station_id
            name
            availability{
            num_docks_available
            num_bikes_available
            
            }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      
      if (loading) return <tr><td><p>Loading...</p></td></tr>
      if (error) return <tr><td><p>Error :</p></td></tr>
      return data.stations.map((station) => (
        <tr key={station.station_id}>
          <td>{`${station.name}`}</td>
          <td>{`${station.availability.num_bikes_available}`}</td>
          <td>{`${station.availability.num_docks_available}`}</td>
        </tr>
      ));
    }}
  </Query>
);
export default Stations;