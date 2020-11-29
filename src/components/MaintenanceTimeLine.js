//TASK under Review
import React from "react";
import { useHistory } from "react-router-dom";

export default function MaintenanceDetailsList() {
  let history = useHistory();

  const RedirectPayment = () => {
    history.push("/landlord/MaintenanceChatPayment");
  };
  const RedirectRequest = () => {
    history.push("/landlord/MaintenanceChatRequest");
  };
  const RedirectInteraction = () => {
    history.push("/landlord/MaintenanceChatInteraction");
  };

  const paymentdata = {
    datetime: "Yesterday - 19:32",
    name: "Michael smith",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  };
  const interactiondata = {
    datetime: "Yesterday - 19:32",
    name: "Smith jordan",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  };
  const maintenancedata = {
    datetime: "Yesterday - 19:32",
    name: "Michael smith",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  };

  return (
    <div className="ibox">
      <div className="ibox-content minhigh paddingtop">
        <div className="inspinia-timeline p-4 px-0">
          <div className="timeline-item">
            <div className="row">
              <div className="col-3 date active pt-3">
                <i className="fas fa-circle"></i>
                Oct.21
                <br />
                <small className="text-navy">16:23</small>
              </div>
              <div className="col-9 content pb-3">
                <div className="row">
                  <div className="col-12">
                    <p>Maintenance is resolved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="row">
              <div className="col-3 date pt-3">
                <i className="fas fa-circle"></i>
                Oct.21
                <br />
                <small className="text-navy">15:41</small>
              </div>

              <div className="col-9 content pb-3">
                <div className="row" onClick={RedirectPayment} style={{ cursor: "pointer" }}>
                  <div className="col-12">
                    <p>Tenant made the payment</p>
                    <div className="chat-discussion minhigh">
                      <div className="chat-message p-0">
                        <div className="row">
                          <div className="col-sm-1">
                            <img className="message-avatar mb-2" src="/imgs/a4.jpg" alt="" />
                          </div>
                          <div className="col-sm-11">
                            <div className="message ml-0">
                              <p className="message-author text-truncate text-completedtask font-title mb-0"> {paymentdata.name}</p>
                              <span className="message-content text-truncate">{paymentdata.text}</span>
                            </div>
                            <span className="message-date text-truncate">{paymentdata.datetime} </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-10 pr-0 minhigh">
                    <form id="contact-form" className="contact-form">
                      <div className="form-group m-0">
                        <textarea className="form-control textarea" rows="1" name="Comment" id="Message" placeholder="Comment"></textarea>
                      </div>
                    </form>
                  </div>
                  <div className="col-2 pl-2 pr-0 p-0">
                    <div className="form-group">
                      <button type="submit" className="btn pl-0">
                        <i className="fas fa-play-circle fa-lg text-center text-completedtask"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="row">
              <div className="col-3 date pt-3">
                <i className="fas fa-circle"></i>
                Oct.21
                <br />
                <small className="text-navy">14:11</small>
              </div>
              <div className="col-9 content pb-3">
                <div className="row">
                  <div className="col-12">
                    <p>PIC and tenant interacted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="row">
              <div className="col-3 date pt-3">
                <i className="fas fa-circle"></i>
                Oct.20
                <br />
                <small className="text-navy">16:22</small>
              </div>
              <div className="col-9 content pb-3">
                <div className="row">
                  <div className="col-12">
                    <p>Maintenance team analysed situation and started work</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-10 pr-0 minhigh">
                    <form id="contact-form" className="contact-form">
                      <div className="form-group m-0">
                        <textarea className="form-control textarea" rows="1" name="Comment" id="Message" placeholder="Comment"></textarea>
                      </div>
                    </form>
                  </div>
                  <div className="col-2 pl-2 pr-0 p-0">
                    <div className="form-group">
                      <button type="submit" className="btn pl-0">
                        <i className="fas fa-play-circle fa-lg text-center text-completedtask"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="row">
              <div className="col-3 date pt-3">
                <i className="fas fa-circle"></i>
                Oct.19
                <br />
                <small className="text-navy">19:21</small>
              </div>
              <div className="col-9 content pb-3">
                <div className="row">
                  <div className="col-12">
                    <p>Agent arranged a maintenance team</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-10 pr-0 minhigh">
                    <form id="contact-form" className="contact-form">
                      <div className="form-group m-0">
                        <textarea className="form-control textarea" rows="1" name="Comment" id="Message" placeholder="Comment"></textarea>
                      </div>
                    </form>
                  </div>
                  <div className="col-2 pl-2 pr-0 p-0">
                    <div className="form-group">
                      <button type="submit" className="btn pl-0">
                        <i className="fas fa-play-circle fa-lg text-center text-completedtask"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="row">
              <div className="col-3 date pt-3">
                <i className="fas fa-circle"></i>
                Oct.19
                <br />
                <small className="text-navy">13:59</small>
              </div>
              <div className="col-9 content pb-3">
                <div className="row">
                  <div className="col-12">
                    <p>PIC and agent interacted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="row">
              <div className="col-3 date pt-3">
                <i className="fas fa-circle"></i>
                Oct.18
                <br />
                <small className="text-navy">19:06</small>
              </div>
              <div className="col-9 content pb-3">
                <div className="row">
                  <div className="col-12">
                    <p>PIC and tenant interacted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="row">
              <div className="col-3 date pt-3">
                <i className="fas fa-circle"></i>
                Oct.18
                <br />
                <small className="text-navy">15:14</small>
              </div>
              <div className="col-9 content pb-3">
                <div className="row">
                  <div className="col-12">
                    <p>Landlord and tenant interaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="row">
              <div className="col-3 date pt-3">
                <i className="fas fa-circle"></i>
                Oct.17
                <br />
                <small className="text-navy">16:05</small>
              </div>
              <div className="col-9 content pb-3 ">
                <div className="row" onClick={RedirectInteraction} style={{ cursor: "pointer" }}>
                  <div className="col-12">
                    <p>PIC and tenant interacted</p>
                    <div className="chat-discussion minhigh">
                      <div className="chat-message p-0">
                        <div className="row">
                          <div className="col-sm-1">
                            <img className="message-avatar mb-2" src="/imgs/a4.jpg" alt="" />
                          </div>
                          <div className="col-sm-11">
                            <div className="message ml-0">
                              <p className="message-author text-truncate text-completedtask font-title mb-0"> {interactiondata.name}</p>
                              <span className="message-content text-truncate">{interactiondata.text}</span>
                            </div>
                            <span className="message-date text-truncate"> {interactiondata.datetime} </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-10 pr-0 minhigh">
                    <form id="contact-form" className="contact-form">
                      <div className="form-group m-0">
                        <textarea className="form-control textarea" rows="1" name="Comment" id="Message" placeholder="Comment"></textarea>
                      </div>
                    </form>
                  </div>
                  <div className="col-2 pl-2 pr-0 p-0">
                    <div className="form-group">
                      <button type="submit" className="btn pl-0">
                        <i className="fas fa-play-circle fa-lg text-center text-completedtask"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="row">
              <div className="col-3 date pt-3">
                <i className="fas fa-circle"></i>
                Oct.16
                <br />
                <small className="text-navy">17:46</small>
              </div>
              <div className="col-9 content pb-3">
                <div className="row">
                  <div className="col-12">
                    <p>PIC viewed this request</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-10 pr-0 minhigh">
                    <form id="contact-form" className="contact-form">
                      <div className="form-group m-0">
                        <textarea className="form-control textarea" rows="1" name="Comment" id="Message" placeholder="Comment"></textarea>
                      </div>
                    </form>
                  </div>
                  <div className="col-2 pl-2 pr-0 p-0">
                    <div className="form-group">
                      <button type="submit" className="btn pl-0">
                        <i className="fas fa-play-circle fa-lg text-center text-completedtask"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="row">
              <div className="col-3 date pt-3">
                <i className="fas fa-circle"></i>
                Oct.16
                <br />
                <small className="text-navy">11:39</small>
              </div>
              <div className="col-9 content pb-3">
                <div className="row" onClick={RedirectRequest} style={{ cursor: "pointer" }}>
                  <div className="col-12">
                    <p>Tenant request for a maintenance</p>
                    <div className="chat-discussion minhigh">
                      <div className="chat-message p-0">
                        <div className="row">
                          <div className="col-sm-1">
                            <img className="message-avatar mb-2" src="/imgs/a4.jpg" alt="" />
                          </div>
                          <div className="col-sm-11">
                            <div className="message ml-0">
                              <p className="message-author text-truncate text-completedtask font-title mb-0"> {maintenancedata.name}</p>
                              <span className="message-content text-truncate">{maintenancedata.text}</span>
                            </div>
                            <span className="message-date text-truncate"> {maintenancedata.datetime} </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-10 pr-0 minhigh">
                    <form id="contact-form" className="contact-form">
                      <div className="form-group m-0">
                        <textarea className="form-control textarea" rows="1" name="Comment" id="Message" placeholder="Comment"></textarea>
                      </div>
                    </form>
                  </div>
                  <div className="col-2 pl-2 pr-0 p-0">
                    <div className="form-group">
                      <button type="submit" className="btn pl-0">
                        <i className="fas fa-play-circle fa-lg text-center text-completedtask"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}