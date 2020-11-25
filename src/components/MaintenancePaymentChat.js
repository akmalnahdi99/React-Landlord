//TASK under Review
import React from 'react'
import Empty from "./Empty";
import PaymentChatItem from './PaymentChatItem';


const MaintenancePaymentChat = () =>  {
    var data = [
        {
            id: 0,
            datetime: "Mon Jan 26 2015 - 18:39:23",
            name: "Smith Jordan",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            type: "tenant"
        },
        {
            id: 1,
            datetime: "Tue Jan 27 2015 - 18:39:23",
            name: "Michael Smith",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            type: "landlord"
        },
        {
            id: 2,
            datetime: "Tue Jan 26 2015 - 20:39:23",
            name: "Smith Jordan",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            type: "tenant"
        },
      ];
  
  return (
    <div class="ibox">
        <div class="ibox-title">
            <h3> Oct 23 - Tenant made payment</h3>
        </div>
        <div class="ibox-content minhigh">
            <div class="row">
                {data.length > 0 ? (
                    data.map((item, index) => {
                    return <PaymentChatItem key={index} {...item} />;
                    })
                    ) : (
                    <Empty />
                )}
            </div>
            <div class="row">
                <div class="col-12">
                    <form role="form" id="contact-form" class="contact-form">
                        <div class="row">
                            <div class="col-11 pr-0">
                                <div class="form-group m-0">
                                    <textarea class="form-control textarea" rows="1" name="Comment" id="Message" placeholder="Comment"></textarea>
                                </div>
                            </div>
                            <div class="col-1 pl-4">
                                <div class="form-group">
                                    <button type="submit" class="btn pl-0"><i class="fas fa-play-circle fa-lg text-center text-completedtask"></i></button>
                                </div>
                            </div>
                        </div>                           
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}
export default MaintenancePaymentChat;