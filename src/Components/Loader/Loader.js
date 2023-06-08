import React, { useState } from 'react'
import '../../html/assets/css/global.css';
import '../../html/assets/css/buttons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Loader.css';
import BeatLoader from "react-spinners/BeatLoader";
const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "green",
  };
const Loader = () => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#36d7b7");
    return (
        <div className="modal custom-modal" id="invalidMatchDialog" role="dialog">
        <BeatLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={40}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
        </div>
      )
}

export default Loader