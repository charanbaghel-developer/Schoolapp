function Contact()
{
    return(
        <> 
        {/*<!-- Header Start -->*/}
 <div className="container-fluid bg-primary mb-5">
     <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "300px"}}>
         <h3 className="display-3 font-weight-bold text-white">Contact Us</h3>
         <div className="d-inline-flex text-white">
             <p className="m-0"><a className="text-white" href="">Home</a></p>
             <p className="m-0 px-2">/</p>
             <p className="m-0">Contact Us</p>
         </div>
     </div>
 </div>
 {/*<!-- Header End -->*/}
   {/* <!-- Contact Start -->*/}
  <div className="container-fluid pt-5">
      <div className="container">
          <div className="text-center pb-2">
              <p className="section-title px-5"><span className="px-2">Get In Touch</span></p>
              <h1 className="mb-3">Contact Us For Any Query</h1>
              <h4 className="text-center mb-4">Receive messages instantly with our PHP and Ajax contact form - available in the <a href="https://htmlcodex.com/downloading/?item=1144">Pro Version</a> only.</h4>
                  
          </div>
          <div className="row">
              <div className="col-lg-7 mb-5">
                  <div className="contact-form">
                      <form>
                          <div className="control-group mb-3">
                              <input type="text" className="form-control" placeholder="Your Name" />
                          </div>
                          <div className="control-group mb-3">
                              <input type="email" className="form-control" placeholder="Your Email" />
                          </div>
                          <div className="control-group mb-3">
                              <input type="text" className="form-control" placeholder="Subject" />
                          </div>
                          <div className="control-group mb-3">
                              <textarea className="form-control" rows={6} placeholder="Message"></textarea>
                          </div>
                          <div>
                              <button className="btn btn-primary py-2 px-4" type="submit">Send Message</button>
                          </div>
                      </form>
                  </div>
              </div>
              <div className="col-lg-5 mb-5">
                  <div className="d-flex">
                      <i className="fa fa-map-marker-alt d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle" style={{width: "45px", height: "45px"}}></i>
                      <div className="pl-3">
                          <h5>Address</h5>
                          <p>123 Street, New York, USA</p>
                      </div>
                  </div>
                  <div className="d-flex">
                      <i className="fa fa-envelope d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle" style={{width: "45px", height: "45px"}}></i>
                      <div className="pl-3">
                          <h5>Email</h5>
                          <p>info@example.com</p>
                      </div>
                  </div>
                  <div className="d-flex">
                      <i className="fa fa-phone-alt d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle" style={{width: "45px", height: "45px"}}></i>
                      <div className="pl-3">
                          <h5>Phone</h5>
                          <p>+012 345 67890</p>
                      </div>
                  </div>
                  <div className="d-flex">
                      <i className="far fa-clock d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle" style={{width: "45px" ,height: "45px"}}></i>
                      <div className="pl-3">
                          <h5>Opening Hours</h5>
                          <strong>Sunday - Friday:</strong>
                          <p className="m-0">08:00 AM - 05:00 PM </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  {/*<!-- Contact End -->*/}
        </>

    );
}
export default Contact;