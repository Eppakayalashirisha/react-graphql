import React from 'react';
import Station from './Station';
import { Query } from "react-apollo";
import gql from "graphql-tag";
const Stations = () => (
  <Query
    query={gql`
      {
        stations
        {
            
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
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return data.stations.map((station) => (
        <tr key='${station.id}'>
          <td>{`${station.name}`}</td>
          <td>{`${station.availability.num_docks_available}`}</td>
          <td>{`${station.availability.num_bikes_available}`}</td>
        </tr>
      ));
    }}
  </Query>
);
export default Stations;