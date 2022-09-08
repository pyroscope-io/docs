import React from "react";
import '@pyroscope/flamegraph/dist/index.css';
import { FlamegraphRenderer, Box } from '@pyroscope/flamegraph';

export const Flamegraph = ({profileData}) => {
  console.log('testing...', profileData) // this is the data from the API call')
  return (
    <FlamegraphRenderer
      profile={profileData}
      onlyDisplay="flamegraph"
      showToolbar={true}
    />
  );
};

// export default Flamegraph;
