import "./message.css";
// import { format } from "timeago.js";


export default function Message({ message, own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://images.pexels.com/photos/10116751/pexels-photo-10116751.jpeg?cs=srgb&dl=pexels-photoalexandru-10116751.jpg&fm=jpg"
          alt=""
        />
        <p className="messageText">{message.text}</p>
      </div>
      {/* <div className="messageBottom">{format(message.createdAt)}</div> */}

    </div>
  );
}