import "./message.css";

export default function Message({ own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://images.pexels.com/photos/10116751/pexels-photo-10116751.jpeg?cs=srgb&dl=pexels-photoalexandru-10116751.jpg&fm=jpg"
          alt=""
        />
        <p className="messageText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab necessitatibus veritatis minus vitae et architecto debitis rem itaque in, corrupti dicta minima dolorum totam dolores optio tempore numquam cum! Ipsum.</p>
      </div>
      <div className="messageBottom">1 hour ago</div>

    </div>
  );
}