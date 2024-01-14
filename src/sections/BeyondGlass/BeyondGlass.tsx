import React, { useState } from "react";
import { BeyondGlassStyle } from "./style";
import Model from "./Model";

const BeyondGlass = () => {
  const [instructions, setInstructions] = useState(true);

  return (
    <BeyondGlassStyle>
      <div className='max-width'>
        <Model />
        {instructions && (
          <div className='instructions' onClick={() => setInstructions(false)}>
            <h3 className='serf'>Click and drag around</h3>
          </div>
        )}

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
