import React from "react";
import { BeyondGlassStyle } from "./style";
import Model from "./Model";

const BeyondGlass = () => {
  return (
    <BeyondGlassStyle>
      <div className='max-width'>
        <Model />
        <div className='text'>
          <h2>
            Mona Lisa: <br /> Beyond the Glass{" "}
          </h2>
          <p>
            <span className='accent'>Highlight of the exhibition</span> is the
            first VR experience presented to the public by the Louvre Museum.
          </p>
          <p>
            It incorporates scientific research to reveal details within the
            painting otherwise invisible to the naked eye
          </p>
        </div>
      </div>
    </BeyondGlassStyle>
  );
};

export default BeyondGlass;
