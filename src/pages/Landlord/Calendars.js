import React from 'react'

const Calendars = () => {
    return (
        <div id="page-wrapper" className="gray-bg" style={{ border: "0px solid red" }}>
            <div className="border-bottom white-bg">
                <div className="container-fluid">
                <Header />
                </div>
            </div>

            <div className="wrapper border-bottom page-heading bg-white">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                    <SiteMap title="Check In &amp; Check Out" />
                    </div>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Calendars
