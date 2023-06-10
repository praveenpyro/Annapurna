import React, {useState} from 'react'

const OkycProfileReview = () => {
    const [existinDataAcc, setExistingDataAcc] = useState(false);
    const [voterOCRDataAcc, setVoterOCRDataAcc] = useState(false);
    const [voterEditedDataAcc, setVoterEditedDataAcc] = useState(false);
    const [voterVerifiedDataAcc, setVoterVerifiedDataAcc] = useState(false);
    const [aadharOCRData, setAadharOCRData] = useState(false);
    const [aadharEditedData, setAadharEditedData] = useState(false);
  return (
    <>
    <div className="accordian mt-20">
        <div className="accordian-heading" onClick={() => setExistingDataAcc(!existinDataAcc)}>
            <h3 className="bold">Existing Data</h3>
            <img src={require('../../html/assets/images/down-circle-arrow.svg').default}  alt="upper circle image" />
        </div>
        <div  className={`accordian-content ${existinDataAcc === true ? 'active' : ''}`}>
            <div className="row detail-wrapper">
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Customer ID</label>
                    <p>123</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Applicant’s Name</label>
                    <p>Jai Prakash</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Gender</label>
                    <p>Male</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Spouse</label>
                    <p>Lata Kumari</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Father</label>
                    <p>Ranjit Kumar</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>DOB</label>
                    <p>05 April 1991</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Voter No.</label>
                    <p>234234</p>
                </div>
                <div className="col-8 col-md-12">
                    <label>Address</label>
                    <p>Village/Locality - Dakarangia G. Pitown - Greesingia P.S. G.Udayagiri</p>
                </div>
            </div>
        </div>
    </div>
    <div className="accordian">
        <div className="accordian-heading" onClick={() => setVoterOCRDataAcc(!voterOCRDataAcc)}>
            <h3 className="bold">Voter OCR Data</h3>
            <img src={require('../../html/assets/images/down-circle-arrow.svg').default}   alt="down circle image" />
        </div>
        <div className={`accordian-content ${voterOCRDataAcc === true ? 'active' : ''}`}>
            <div className="row detail-wrapper">
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Customer ID</label>
                    <p>123</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Applicant’s Name</label>
                    <p>Jai Prakash</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Gender</label>
                    <p>Male</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Spouse</label>
                    <p>Lata Kumari</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Father</label>
                    <p>Ranjit Kumar</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>DOB</label>
                    <p>05 April 1991</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Voter No.</label>
                    <p>234234</p>
                </div>
                <div className="col-8 col-md-12">
                    <label>Address</label>
                    <p>Village/Locality - Dakarangia G. Pitown - Greesingia P.S. G.Udayagiri</p>
                </div>
            </div>
        </div>
    </div>
    <div className="accordian">
        <div className="accordian-heading" onClick={() => setVoterEditedDataAcc(!voterEditedDataAcc)}>
            <h3 className="bold">Voter Edited Data</h3>
            <img src={require('../../html/assets/images/down-circle-arrow.svg').default}  alt="down circle image" />
        </div>
        <div className={`accordian-content ${voterEditedDataAcc === true ? 'active' : ''}`}>
            <div className="row detail-wrapper">
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Customer ID</label>
                    <p>123</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Applicant’s Name</label>
                    <p>Jai Prakash</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Gender</label>
                    <p>Male</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Spouse</label>
                    <p>Lata Kumari</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Father</label>
                    <p>Ranjit Kumar</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>DOB</label>
                    <p>05 April 1991</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Voter No.</label>
                    <p>234234</p>
                </div>
                <div className="col-8 col-md-12">
                    <label>Address</label>
                    <p>Village/Locality - Dakarangia G. Pitown - Greesingia P.S. G.Udayagiri</p>
                </div>
            </div>
        </div>
    </div>
    <div className="accordian">
        <div className="accordian-heading" onClick={() => setVoterVerifiedDataAcc(!voterVerifiedDataAcc)}>
            <h3 className="bold">Voter Verified Data</h3>
            <img src={require('../../html/assets/images/down-circle-arrow.svg').default}  alt="down circle image" />
        </div>
        <div className={`accordian-content ${voterVerifiedDataAcc === true ? 'active' : ''}`}>
            <div className="row detail-wrapper">
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Customer ID</label>
                    <p>123</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Applicant’s Name</label>
                    <p>Jai Prakash</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Gender</label>
                    <p>Male</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Spouse</label>
                    <p>Lata Kumari</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Father</label>
                    <p>Ranjit Kumar</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>DOB</label>
                    <p>05 April 1991</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Voter No.</label>
                    <p>234234</p>
                </div>
                <div className="col-8 col-md-12">
                    <label>Address</label>
                    <p>Village/Locality - Dakarangia G. Pitown - Greesingia P.S. G.Udayagiri</p>
                </div>
            </div>
        </div>
    </div>
    <div className="accordian">
        <div className="accordian-heading" onClick={() => setAadharOCRData(!aadharOCRData)}>
            <h3 className="bold">Aadhar OCR Data</h3>
            <img src={require('../../html/assets/images/down-circle-arrow.svg').default}  alt="down circle image" />
        </div>
        <div className={`accordian-content ${aadharOCRData === true ? 'active' : ''}`}>
            <div className="row detail-wrapper">
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Customer ID</label>
                    <p>123</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Applicant’s Name</label>
                    <p>Jai Prakash</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Gender</label>
                    <p>Male</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Spouse</label>
                    <p>Lata Kumari</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Father</label>
                    <p>Ranjit Kumar</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>DOB</label>
                    <p>05 April 1991</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Aadhar No.</label>
                    <p>********3473</p>
                </div>
                <div className="col-8 col-md-12">
                    <label>Address</label>
                    <p>Village/Locality - Dakarangia G. Pitown - Greesingia P.S. G.Udayagiri</p>
                </div>
            </div>
        </div>
    </div>
    <div className="accordian">
        <div className="accordian-heading" onClick={() => setAadharEditedData(!aadharEditedData)}>
            <h3 className="bold">Aadhar Edited Data</h3>
            <img src={require('../../html/assets/images/down-circle-arrow.svg').default}  alt="down circle image" />
        </div>
        <div className={`accordian-content ${aadharEditedData === true ? 'active' : ''}`}>
            <div className="row detail-wrapper">
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Customer ID</label>
                    <p>123</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Applicant’s Name</label>
                    <p>Jai Prakash</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Gender</label>
                    <p>Male</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Spouse</label>
                    <p>Lata Kumari</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Father</label>
                    <p>Ranjit Kumar</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>DOB</label>
                    <p>05 April 1991</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Aadhar No.</label>
                    <p>********3473</p>
                </div>
                <div className="col-8 col-md-12">
                    <label>Address</label>
                    <p>Village/Locality - Dakarangia G. Pitown - Greesingia P.S. G.Udayagiri</p>
                </div>
            </div>
        </div>
    </div>
    <form>
        <div className="row mt-20">
            <div className="col-6 col-sm-12">
                <label className="form-label">POI Type</label>
                <div className="form-group">
                    <select className="form-control" aria-placeholder="Select">
                        <option value="">Select</option>
                        <option value="lorem">lorem</option>
                        <option value="lorem2">lorem2</option>
                        <option value="lorem3">lorem3</option>
                    </select>
                </div>
            </div>
            <div className="col-6 col-sm-12">
                <label className="form-label">POI No.</label>
                <div className="form-group">
                    <input type="number" placeholder="Enter" value="0" default className="form-control" disabled/>
                </div>
            </div>
            <div className="col-6 col-sm-12">
                <label className="form-label">POA Type</label>
                <div className="form-group">
                    <select className="form-control" aria-placeholder="Select">
                        <option value="">Select</option>
                        <option value="lorem">lorem</option>
                        <option value="lorem2">lorem2</option>
                        <option value="lorem3">lorem3</option>
                    </select>
                </div>
            </div>
            <div className="col-6 col-sm-12">
                <label className="form-label">POA No.</label>
                <div className="form-group">
                    <input type="number" placeholder="Enter" value="0" default className="form-control" disabled/>
                </div>
            </div>
            <div className="col-6 col-sm-12">
                <label className="form-label">Alternate KYC Type</label>
                <div className="form-group">
                    <select className="form-control" aria-placeholder="Select">
                        <option value="">Select</option>
                        <option value="lorem">lorem</option>
                        <option value="lorem2">lorem2</option>
                        <option value="lorem3">lorem3</option>
                    </select>
                </div>
            </div>
            <div className="col-6 col-sm-12">
                <label className="form-label">Alternate KYC No.</label>
                <div className="form-group">
                    <input type="text" placeholder="Enter" value="2434" default className="form-control" disabled/>
                </div>
            </div>
            <div className="col-6 col-sm-12">
                <label className="form-label">Marital Status</label>
                <div className="form-group">
                    <select className="form-control" aria-placeholder="Select">
                        <option value="">Select</option>
                        <option value="lorem">lorem</option>
                        <option value="lorem2">lorem2</option>
                        <option value="lorem3">lorem3</option>
                    </select>
                </div>
            </div>
            <div className="col-6 col-sm-12">
                <label className="form-label">Permanent Address</label>
                <div className="form-group">
                    <select className="form-control" aria-placeholder="Select">
                        <option value="">Select</option>
                        <option value="lorem">lorem</option>
                        <option value="lorem2">lorem2</option>
                        <option value="lorem3">lorem3</option>
                    </select>
                </div>
            </div>
            <div className="col-6 col-sm-12">
                <label className="form-label">Inquiry Purpose</label>
                <div className="form-group">
                    <select className="form-control" aria-placeholder="Select">
                        <option value="">Select</option>
                        <option value="lorem">lorem</option>
                        <option value="lorem2">lorem2</option>
                        <option value="lorem3">lorem3</option>
                    </select>
                </div>
            </div>
            <div className="col-6 col-sm-12">
                <label className="form-label">Applied Amount</label>
                <div className="form-group">
                    <input type="text" placeholder="Enter" className="form-control" />
                </div>
            </div>
        </div>
        <div className="white-card mt-0">
            <div className="row detail-wrapper present-address">
                <div className="col-12">
                    <label>Present Address</label>
                    <p className="bold">Village/Locality - Dakarangia G. Pitown - Greesingia P.S.
                        G.Udayagiri</p>
                </div>
            </div>
        </div>

        <div className="images-data-cover">
            <h3 className="bold">Images Data</h3>
            <p>Click on the thumbnail for full image preview</p>
            <ul className="images-list">
                <li>
                    <figure className="pointer" data-toggle="modal" data-target="#imageViewerDialog">
                        <img src={require('../../html/assets/images/client-image.svg').default}  alt="Client Image"/>
                    </figure>
                    <p>Client</p>
                </li>
                <li>
                    <figure className="pointer" data-toggle="modal" data-target="#imageViewerDialog">
                        <img src={require('../../html/assets/images/POI.svg').default} alt="POI Image"/>
                    </figure>
                    <p>POI Front</p>
                </li>
                <li>
                    <figure className="pointer" data-toggle="modal" data-target="#imageViewerDialog">
                        <img src={require('../../html/assets/images/POI.svg').default} alt="POI Image"/>
                    </figure>
                    <p>POI Rear</p>
                </li>
                <li>
                    <figure className="pointer" data-toggle="modal" data-target="#imageViewerDialog">
                        <img src={require('../../html/assets/images/POA.svg').default} alt="POA Image"/>
                    </figure>
                    <p>POA Front</p>
                </li>
                <li>
                    <figure className="pointer" data-toggle="modal" data-target="#imageViewerDialog">
                        <img src={require('../../html/assets/images/POA.svg').default} alt="POA Image"/>
                    </figure>
                    <p>POA Rear</p>
                </li>
            </ul>
        </div>

        <div className="row mt-20">
            <div className="col-6">
                <button className="btn w-100" type="button" data-toggle="modal"
                data-target="#voterVerificationFailedDialog">VID Verification</button>
            </div>
            <div className="col-6">
                <button className="btn btn-primary w-100" type="button" onclick="openBasicDetail()">Proceed</button>
            </div>
        </div>
        <div className="row">
            <div className="col-4 col-sm-6">
                <button className="btn w-100 mt-20" type="button" data-toggle="modal"
                    data-target="#kycIdAlreadyExistDialog">
                    KYC already exist</button>
            </div>
            <div className="col-4 col-sm-6">
                <button className="btn w-100 mt-20" type="button" data-toggle="modal"
                    data-target="#noRecordFoundDialog">
                    No record found</button>
            </div>
            <div className="col-4 col-sm-6">
                <button className="btn w-100 mt-20" type="button" data-toggle="modal"
                    data-target="#viewCBSuccessDialog">
                    CB check successfull</button>
            </div>
            <div className="col-4 col-sm-6">
                <button className="btn w-100 mt-20" type="button" data-toggle="modal"
                    data-target="#viewCBFailedDialog">
                    CB check failer</button>
            </div>
            <div className="col-4 col-sm-6">
                <button className="btn w-100 mt-20" type="button" data-toggle="modal"
                    data-target="#deviationFoundDialog">
                    Deviation found</button>
            </div>
            <div className="col-4 col-sm-6">
                <button className="btn w-100 mt-20" type="button" data-toggle="modal"
                    data-target="#clientEligibleDialog">
                    Client eligible</button>
            </div>
            <div className="col-4 col-sm-6">
                <button className="btn w-100 mt-20" type="button" data-toggle="modal"
                    data-target="#clientNotEligibleDialog">
                    Client not eligible</button>
            </div>
        </div>
    </form>
    </>
  )
}

export default OkycProfileReview