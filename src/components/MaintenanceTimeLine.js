//TASK under Review
import React from 'react'
import { Link,useHistory } from 'react-router-dom';


export default function MaintenanceDetailsList() {
  let history = useHistory();

  const RedirectPayment = () => {
    history.push('/landlord/MaintenanceChatPayment')
  }
  const RedirectMaintenance = () => {
    history.push('/landlord/notifications')
  }
  const RedirectInteraction = () => {
    history.push('/landlord/notifications')
  }
 
  const paymentdata = {
    datetime: "Yesterday - 19:32",
    name: "Michael smith",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  }
  const interactiondata = {
    datetime: "Yesterday - 19:32",
    name: "Smith jordan",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  }
  const maintenancedata = {
    datetime: "Yesterday - 19:32",
    name: "Michael smith",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  }
  
  
  return (
    <div class="ibox">
                                <div class="ibox-content minhigh paddingtop"> 
                                <div class="inspinia-timeline p-4 px-0">
                                    <div class="timeline-item">
                                        <div class="row">
                                            <div class="col-3 date active pt-3">
                                                <i class="fas fa-circle"></i>
                                                Oct.21
                                                <br />
                                                <small class="text-navy">16:23</small>
                                            </div>
                                            <div class="col-9 content pb-3">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <p>Maintenance is resolved</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="timeline-item">
                                        <div class="row">
                                            <div class="col-3 date pt-3">
                                                <i class="fas fa-circle"></i>
                                                Oct.21
                                                <br />
                                                <small class="text-navy">15:41</small>
                                            </div>
                                            
                                            <div class="col-9 content pb-3" >
                                            
                                                <div class="row" onClick={RedirectPayment} style={{cursor:'pointer'}}>
                                                    <div class="col-12">
                                                        <p>Tenant made the payment</p>
                                                        <div class="chat-discussion minhigh">
                                                            <div class="chat-message p-0">
                                                                <div class="row">
                                                                    <div class="col-sm-1">
                                                                        <img class="message-avatar mb-2" src="/imgs/a4.jpg" alt="" />
                                                                    </div>
                                                                    <div class="col-sm-11">
                                                                        <div class="message ml-0">
                                                                            <p class="message-author text-truncate text-completedtask font-title mb-0"> {paymentdata.name}
                                                                            </p>
                                                                            <span class="message-content text-truncate">
                                                                                {paymentdata.text}
                                                                            </span>
                                                                        </div>
                                                                        <span class="message-date text-truncate">{paymentdata.datetime} </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-10 pr-0 minhigh">
                                                        <form role="form" id="contact-form" class="contact-form">
                                                            <div class="form-group m-0">
                                                                <textarea class="form-control textarea" rows="1"
                                                                    name="Comment" id="Message"
                                                                    placeholder="Comment"></textarea>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div class="col-2 pl-2 pr-0 p-0">
                                                        <div class="form-group">
                                                            <button type="submit" class="btn pl-0"><i class="fas fa-play-circle fa-lg text-center text-completedtask"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div class="timeline-item">
                                        <div class="row">
                                            <div class="col-3 date pt-3">
                                                <i class="fas fa-circle"></i>
                                                Oct.21
                                                <br />
                                                <small class="text-navy">14:11</small>
                                            </div>
                                            <div class="col-9 content pb-3">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <p>PIC and tenant interacted</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="timeline-item">
                                        <div class="row">
                                            <div class="col-3 date pt-3">
                                                <i class="fas fa-circle"></i>
                                                Oct.20
                                                <br />
                                                <small class="text-navy">16:22</small>
                                            </div>
                                            <div class="col-9 content pb-3">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <p>Maintenance team analysed situation and started work</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-10 pr-0 minhigh">
                                                        <form role="form" id="contact-form" class="contact-form">
                                                            <div class="form-group m-0">
                                                                <textarea class="form-control textarea" rows="1"
                                                                    name="Comment" id="Message"
                                                                    placeholder="Comment"></textarea>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div class="col-2 pl-2 pr-0 p-0">
                                                        <div class="form-group">
                                                            <button type="submit" class="btn pl-0"><i class="fas fa-play-circle fa-lg text-center text-completedtask"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="timeline-item">
                                        <div class="row">
                                            <div class="col-3 date pt-3">
                                                <i class="fas fa-circle"></i>
                                                Oct.19
                                                <br />
                                                <small class="text-navy">19:21</small>
                                            </div>
                                            <div class="col-9 content pb-3">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <p>Agent arranged a maintenance team</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-10 pr-0 minhigh">
                                                        <form role="form" id="contact-form" class="contact-form">
                                                            <div class="form-group m-0">
                                                                <textarea class="form-control textarea" rows="1"
                                                                    name="Comment" id="Message"
                                                                    placeholder="Comment"></textarea>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div class="col-2 pl-2 pr-0 p-0">
                                                        <div class="form-group">
                                                            <button type="submit" class="btn pl-0"><i class="fas fa-play-circle fa-lg text-center text-completedtask"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="timeline-item">
                                        <div class="row">
                                            <div class="col-3 date pt-3">
                                                <i class="fas fa-circle"></i>
                                                Oct.19
                                                <br />
                                                <small class="text-navy">13:59</small>
                                            </div>
                                            <div class="col-9 content pb-3">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <p>PIC and agent interacted</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="timeline-item">
                                        <div class="row">
                                            <div class="col-3 date pt-3">
                                                <i class="fas fa-circle"></i>
                                                Oct.18
                                                <br />
                                                <small class="text-navy">19:06</small>
                                            </div>
                                            <div class="col-9 content pb-3">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <p>PIC and tenant interacted</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="timeline-item">
                                        <div class="row">
                                            <div class="col-3 date pt-3">
                                                <i class="fas fa-circle"></i>
                                                Oct.18
                                                <br />
                                                <small class="text-navy">15:14</small>
                                            </div>
                                            <div class="col-9 content pb-3">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <p>Landlord and tenant interaction</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="timeline-item">
                                        <div class="row">
                                            <div class="col-3 date pt-3">
                                                <i class="fas fa-circle"></i>
                                                Oct.17
                                                <br />
                                                <small class="text-navy">16:05</small>
                                            </div>
                                            <div class="col-9 content pb-3 ">
                                                <div class="row" onClick={RedirectInteraction} style={{cursor:'pointer'}}>
                                                    <div class="col-12">
                                                        <p>PIC and tenant interacted</p>
                                                        <div class="chat-discussion minhigh">
                                                            <div class="chat-message p-0">
                                                                <div class="row">
                                                                    <div class="col-sm-1">
                                                                        <img class="message-avatar mb-2" src="/imgs/a4.jpg" alt="" />
                                                                    </div>
                                                                    <div class="col-sm-11">
                                                                        <div class="message ml-0">
                                                                            <p class="message-author text-truncate text-completedtask font-title mb-0"> {interactiondata.name}
                                                                            </p>
                                                                            <span class="message-content text-truncate">
                                                                                {interactiondata.text}
                                                                            </span>
                                                                        </div>
                                                                        <span class="message-date text-truncate"> {interactiondata.datetime} </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-10 pr-0 minhigh">
                                                        <form role="form" id="contact-form" class="contact-form">
                                                            <div class="form-group m-0">
                                                                <textarea class="form-control textarea" rows="1"
                                                                    name="Comment" id="Message"
                                                                    placeholder="Comment"></textarea>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div class="col-2 pl-2 pr-0 p-0">
                                                        <div class="form-group">
                                                            <button type="submit" class="btn pl-0"><i class="fas fa-play-circle fa-lg text-center text-completedtask"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="timeline-item">
                                        <div class="row">
                                            <div class="col-3 date pt-3">
                                                <i class="fas fa-circle"></i>
                                                Oct.16
                                                <br />
                                                <small class="text-navy">17:46</small>
                                            </div>
                                            <div class="col-9 content pb-3">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <p>PIC viewed this request</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-10 pr-0 minhigh">
                                                        <form role="form" id="contact-form" class="contact-form">
                                                            <div class="form-group m-0">
                                                                <textarea class="form-control textarea" rows="1"
                                                                    name="Comment" id="Message"
                                                                    placeholder="Comment"></textarea>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div class="col-2 pl-2 pr-0 p-0">
                                                        <div class="form-group">
                                                            <button type="submit" class="btn pl-0"><i class="fas fa-play-circle fa-lg text-center text-completedtask"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="timeline-item">
                                        <div class="row">
                                            <div class="col-3 date pt-3">
                                                <i class="fas fa-circle"></i>
                                                Oct.16
                                                <br />
                                                <small class="text-navy">11:39</small>
                                            </div>
                                            <div class="col-9 content pb-3">
                                                <div class="row" onClick={RedirectMaintenance} style={{cursor:'pointer'}}>
                                                    <div class="col-12">
                                                        <p>Tenant request for a maintenance</p>
                                                        <div class="chat-discussion minhigh">
                                                            <div class="chat-message p-0">
                                                                <div class="row">
                                                                    <div class="col-sm-1">
                                                                        <img class="message-avatar mb-2" src="/imgs/a4.jpg" alt="" />
                                                                    </div>
                                                                    <div class="col-sm-11">
                                                                        <div class="message ml-0">
                                                                            <p class="message-author text-truncate text-completedtask font-title mb-0"> {maintenancedata.name}
                                                                            </p>
                                                                            <span class="message-content text-truncate">{maintenancedata.text}
                                                                            </span>
                                                                        </div>
                                                                        <span class="message-date text-truncate"> {maintenancedata.datetime} </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-10 pr-0 minhigh">
                                                        <form role="form" id="contact-form" class="contact-form">
                                                            <div class="form-group m-0">
                                                                <textarea class="form-control textarea" rows="1"
                                                                    name="Comment" id="Message"
                                                                    placeholder="Comment"></textarea>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div class="col-2 pl-2 pr-0 p-0">
                                                        <div class="form-group">
                                                            <button type="submit" class="btn pl-0"><i class="fas fa-play-circle fa-lg text-center text-completedtask"></i></button>
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