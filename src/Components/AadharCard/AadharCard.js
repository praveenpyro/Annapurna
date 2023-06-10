import React, {useState} from 'react'

const AadharCard = () => {
    const [activeTab, setActiveTab] = useState(1);
    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };
    return (
        <>
        <div id="primaryAadharContent">
            <div className="adhar-option-list mt-30">
                <div className={`single-aadhar-option open-adhar-oc ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>
                    <h3>Aadhar OCR</h3>
                </div>
                <div  className={`single-aadhar-option open-ekyc ${activeTab === 2 ? 'active' : ''}`}  onClick={() => handleTabClick(2)}>
                    <h3>Aadhar EKYC</h3>
                </div>
            </div>
            {   activeTab === 2 && 
                <div className="ekyc-thumb-wrap" style={{display:'block'}}> 
                    <figure className="thumb-dummy-img">
                        <img src={require('../../html/assets/images/thumb-print-dummy.svg').default}  alt=""/>
                    </figure>
                    <button className="btn btn-primary w-350">Proceed</button>
                </div>
            }
        </div>
        {   activeTab === 1 && 
            <div id="aadharOcrContent">
                <div className="row">
                    <div className="col-5 mb-30">
                        <div className="mb-20">
                            <label className="custom-radio" for="singleSide">
                                <input type="radio" id="singleSide" name="adhar-side" value="singleSide"></input>
                                <span className="radio-mark"></span>
                                &nbsp; <span>Single Side</span>
                            </label>
                        </div>
                        <img src={require('../../html/assets/images/single-side-aadhar.svg').default}  alt=""></img>
                    </div>
                    <div className="col-7 mb-30">
                        <div className="mb-20">
                            <label className="custom-radio" for="doubleSide">
                                <input type="radio" id="doubleSide" name="adhar-side" value="doubleSide"></input>
                                <span className="radio-mark"></span>
                                &nbsp; <span>Double Side</span>
                            </label>
                        </div>
                        <img src={require('../../html/assets/images/front-aadhar.svg').default}  className="mb-20" alt=""></img>

                        <img src={require('../../html/assets/images/back-aadhar.svg').default}   alt=""/>
                    </div>
                </div>
                <button className="btn btn-primary w-350 mt-30 mb-30">Proceed</button>
                {/* <button className="btn btn-primary w-350 mt-30 mb-30" data-toggle="modal"
                    data-target="#openCameraForSingleSideAadhar">Open Camera single-side</button>
                <button className="btn btn-primary w-350 mb-30" data-toggle="modal"
                    data-target="#openCameraForFrontAadhar">Open Camera double-side</button>  */}
            </div>
        }
        </>
    )
}

export default AadharCard