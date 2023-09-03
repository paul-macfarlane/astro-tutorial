import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  const handleNewGreeting = () => {
    let newMessage = randomMessage();
    while (newMessage === greeting) {
      newMessage = randomMessage();
    }

    setGreeting(newMessage);
  };

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={handleNewGreeting}>New Greeting</button>
    </div>
  );
}
