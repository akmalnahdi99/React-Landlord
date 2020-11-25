//TASK under Review
import React from "react";
import { Link } from "react-router-dom";

export default function PaymentChatItem ({ datetime, name, text, type }) {
    var userClassName = "right";
    if (type === "landlord") {
        userClassName = "right";
    }
    else if (type === "tenant") {
        userClassName = "left"
    }
      return (
        <div class="col-12">
                    <div class="chat-discussion">
                        <div class={"chat-message" + userClassName}>
                            <img class="message-avatar" src="/imgs/a4.jpg" alt="" />
                            <div class="message">
                                <p class="message-author text-truncate text-completedtask font-title mb-0"> {name}
                                </p>
                                <span class="message-content">
                                    {text}
                                </span>
                            </div>
                            <span class="message-date"> {datetime} </span>
                        </div>
                    </div>
                </div>
      );
}