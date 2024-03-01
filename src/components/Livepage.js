import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomString } from "../utils/helper";
const Livepage = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const messages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    setInterval(() => {
      // console.log("Hello Worlddd!!!!")
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomString(15),
        })
      );
    }, 2000);
  }, []);
  return (
    <>
      <div className="ml-1 mt-3 w-full h-[500px] px-1 border border-black bg-slate-100 rounded-md  overflow-y-scroll flex flex-col-reverse">
        {messages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full p-2 border border-black flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Satya Sai",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-5/6 border border-black rounded-lg shadow-lg text-black px-2"
          placeholder="Enter your live chat"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="mx-1 p-1 bg-green-400 rounded-lg">Send</button>
      </form>
    </>
  );
};

export default Livepage;
