import Whatsapp from "./Whatsapp";
import Line from "./Line";
import Fb from "./Fb";
import WeChat from "./WeChat";
import lineImage from "../images/line.png";
import whatsappImage from "../images/whatsapp.jpg";
import fb from "../images/fb.jpg";
import wechat from "../images/wechat.png";

const appsInfo = {
  whatsapp: {
    id: "whatsapp",
    App: Whatsapp,
    icon: whatsappImage,
    color: "#f6f6f6",
  },
  line: {
    id: "line",
    App: Line,
    icon: lineImage,
    color: "#202a43",
    isWhiteTextHeader: true,
  },
  fb: {
    id: "facebook",
    App: Fb,
    icon: fb,
    color: "#fff",
  },
  wechat: {
    id: "wechat",
    App: WeChat,
    icon: wechat,
    color: "#ebedea",
  },
};

export default appsInfo;
