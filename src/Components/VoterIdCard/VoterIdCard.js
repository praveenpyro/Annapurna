import React from 'react'

const VoterIdCard = () => {
  return (
    <>
        <h3 className="bold">Voter ID Output</h3>

        <div className="white-card">
            <div className="row detail-wrapper">
                <div className="col-12">
                    <label>Address</label>
                    <p>Village/Locality - Dakarangia G. Pitown - Greesingia P.S. - G.Udayagiri</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Age</label>
                    <p>22</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Date of Birth</label>
                    <p>05 Apr 1990</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Father’s Name</label>
                    <p>Lorem</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Gender</label>
                    <p>Male</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>ID No.</label>
                    <p>32323</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Name</label>
                    <p>Lorem</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>State</label>
                    <p>Lorem</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Year of Birth</label>
                    <p>1993</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>District</label>
                    <p>Lorem</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>House No.</label>
                    <p>3434</p>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                    <label>Pin Code</label>
                    <p>23232</p>
                </div>
            </div>
        </div>

        <div id="editInformation">
        <h1 className="center bold mt-20">Edit Information</h1>

        <form>
            <div className="row">
                <div className="col-12">
                    <label className="form-label">Address</label>
                    <div className="form-group">
                        <input type="text" placeholder="Enter" className="form-control" />
                    </div>
                </div>
                <div className="col-6 col-sm-12">
                    <label className="form-label">Age</label>
                    <div className="form-group">
                        <input type="text" placeholder="Enter" className="form-control" />
                    </div>
                </div>
                <div className="col-6 col-sm-12">
                    <label className="form-label">Date of Birth</label>
                    <div className="form-group">
                        <input type="text" placeholder="DD MM YYYY" className="form-control date-picker" />
                    </div>
                </div>
                <div className="col-6 col-sm-12">
                    <label className="form-label">District</label>
                    <div className="form-group">
                        <input type="text" placeholder="Enter" className="form-control" />
                    </div>
                </div>
                <div className="col-6 col-sm-12">
                    <label className="form-label">Father</label>
                    <div className="form-group">
                        <input type="text" placeholder="Enter" className="form-control" />
                    </div>
                </div>
                <div className="col-6 col-sm-12">
                    <label className="form-label">Gender</label>
                    <div className="form-group">
                        <select name="cars" id="cars" className="form-control" aria-placeholder="Select">
                            <option value="Select">Select</option>
                            <option value="37">37</option>
                            <option value="38">38</option>
                            <option value="39">39</option>
                        </select>
                    </div>
                </div>
                <div className="col-6 col-sm-12">
                    <label className="form-label">House No.</label>
                    <div className="form-group">
                        <input type="text" placeholder="Enter" className="form-control" />
                    </div>
                </div>
                <div className="col-6 col-sm-12">
                    <label className="form-label">ID No.</label>
                    <div className="form-group">
                        <input type="text" placeholder="Enter" className="form-control" />
                    </div>
                </div>
                <div className="col-6 col-sm-12">
                    <label className="form-label">Name</label>
                    <div className="form-group">
                        <input type="text" placeholder="Enter" className="form-control" />
                    </div>
                </div>
                <div className="col-6 col-sm-12">
                    <label className="form-label">Pin code</label>
                    <div className="form-group">
                        <input type="text" placeholder="Enter" className="form-control" />
                    </div>
                </div>
                <div className="col-6 col-sm-12">
                    <label className="form-label">State</label>
                    <div className="form-group">
                        <input type="text" placeholder="Enter" className="form-control" />
                    </div>
                </div>
                <div className="col-6 col-sm-12">
                    <label className="form-label">Year of Birth</label>
                    <div className="form-group">
                        <input type="text" placeholder="Enter" className="form-control" />
                    </div>
                </div>
            </div>
            <button type="button" className="btn btn-primary w-350"
                onclick="closeEditInformation()">Update</button>
        </form>
    </div>

        <button className="btn w-350 mt-30" onclick="openEditInformation()">Edit Information</button>
        <button className="btn btn-primary w-350 mt-20">Confirm</button>
    </>
  )
}

export default VoterIdCard