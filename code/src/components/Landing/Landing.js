import React, { useEffect } from "react";
import "./Landing.scss";
import Grid from "@material-ui/core/Grid";
import chatsImage from "./images/chats.png";
import { Link, useLocation } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import multipleChatImage from "./images/multiple-chats.jpg";
import statusImage from "./images/status.jpg";
import appsImage from "./images/apps.jpg";
import uploadImage from "./images/upload.jpg";

const Detail = ({ head, deatail, image, alt }) => {
  return (
    <Grid item md={6} xs={12}>
      <Paper className="detail">
        <img src={image} className="detail-image" alt={alt} />
        <div className="text">
          <h2>{head}</h2>
          <div className="text-detail">{deatail}</div>
        </div>
      </Paper>
    </Grid>
  );
};

const Landing = () => {
  const location = useLocation();
  useEffect(() => {
    window.ga("send", { hitType: "pageView", page: location.pathname });
  }, [location]);
  return (
    <div className="landing">
      <article className="top-article">
        <div className="container">
          <Grid container spacing={3}>
            <Grid item sm={6} xs={12}>
              <section>
                <h1>Chat</h1>
                <h2>Generator</h2>
                <h4>
                  Easy to use fake chat generator support all the most famous chat
                  application themes, Whatsapp, Line, Facebook Messenger, Wechat
                </h4>
                <div className="start-button-wrapper">
                  <Link to="chat-generator/whatsapp" className="start-button">
                    Get Started
                  </Link>
                </div>
              </section>
            </Grid>
            <Grid item sm={6} xs={12}>
              <img src={chatsImage} alt="chats" />
            </Grid>
            <Detail
              head="Fake Group Chat Generator"
              deatail="Support group chat with multiple profile images"
              image={multipleChatImage}
              alt="multiple-chat"
            />
            <Detail
              head="Status Update"
              deatail="Adjustable status, time and operator on the phone status bar"
              image={statusImage}
              alt="status"
            />
            <Detail
              head="Multiple Themes"
              deatail="Support Whatsap, Line, Facebook Messenger, Wechat themes"
              image={appsImage}
              alt="themes"
            />
            <Detail
              head="Upload Images"
              deatail="Change profile images of each chat element separately"
              image={uploadImage}
              alt="upload"
            />
            <Detail
              head="High Resolution"
              deatail="Render images with high resolution algorithm"
              image={multipleChatImage}
              alt="upload"
            />
          </Grid>
        </div>
      </article>
    </div>
  );
};

Landing.propTypes = {};

export default Landing;
