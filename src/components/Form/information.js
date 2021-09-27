import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"

function Information(){
    return(
        <div className="col-sm-6 reg">
            <form className="form-horizontal hr">
                <div className="form-group">
                    <label className="control-label col-sm-4" for="fname">FirstName</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" id="uname"
                        placeholder="Enter the first Name"></input>

                    </div>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-4" for="lname">LastName</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" id="uname"
                        placeholder="Enter the Last Name"></input>

                    </div>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-4" for="mnum">MobileNumber</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" id="uname"
                        placeholder="Enter the Mobile Number"></input>

                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-4" for="lname">Email Id</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" id="uname"
                        placeholder="Enter the Mail Id "></input>

                    </div>
                </div>
                <div className="col-auto">
                <button type="submit" class="btn btn-primary">Submit</button>
                </div>


            </form>
        
        </div>

    )

}
export default Information