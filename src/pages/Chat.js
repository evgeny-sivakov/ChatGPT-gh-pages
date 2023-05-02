import { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator
} from "@chatscope/chat-ui-kit-react";
import { getAPI_Key } from "../util/auth";

function ChatPage() {
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState([
      {
        message: "Hello!",
        sender: "ChatGPT",
      },
    ]);
  
    const sendHandler = async (message) => {
      const newMessage = {
        message: message,
        sender: "user",
        direction: "outgoing",
      };
  
      const newMessages = [...messages, newMessage];
      setMessages(newMessages);
  
      setIsTyping(true);
  
      await processMessageToAI(newMessages);
    };
  
    const API_KEY = getAPI_Key();

    const processMessageToAI = async (chatMessages) => {
      let apiMessages = chatMessages.map((message) => {
        let role = "";
        if (message.sender === "ChatGPT") {
          role = "assistant";
        } else {
          role = "user";
        }
        return {
          role,
          content: message.message,
        };
      });
  
      const systemMessage = {
        role: "system",
        content: "Explain everything in details",
      };
  
      const apiRequestBody = {
        model: "gpt-3.5-turbo",
        messages: [systemMessage, ...apiMessages],
      };
  
      await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiRequestBody),
      })
        .then((data) => data.json())
        .then((data) => {
          setMessages([
            ...chatMessages,
            {
              message: data.choices[0].message.content,
              sender: "ChatGPT",
            },
          ]);
        });
      setIsTyping(false);
    };
  
    return (
      <div className="App">
        <button>Sign out</button>
        <div style={{ position: "relative", width: "700px", height: "600px" }}>
          <MainContainer>
            <ChatContainer>
              <MessageList
                typingIndicator={
                  isTyping ? (
                    <TypingIndicator content="ChatGPT is typing..." />
                  ) : null
                }
              >
                {messages.map((message, index) => {
                  return <Message key={index} model={message} />;
                })}
              </MessageList>
              <MessageInput
                placeholder="Type here"
                onSend={sendHandler}
              ></MessageInput>
            </ChatContainer>
          </MainContainer>
        </div>
      </div>
    );
}

export default ChatPage;