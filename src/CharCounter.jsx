import { useEffect } from "react";
import { useState } from "react";

function CharCounter() {
  const [text, setText] = useState("");
  // Side effect: update tab title with count
  useEffect(() => {
    document.title = `Characters :${text.length}`;
  }, [text]);
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Live Charater Counter Tracker</h2>
      <textarea
        rows="5"
        cols="40"
        type="text"
        placeholder="Enter a Text..."
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <p>Charater Typed : {text.length}</p>
    </div>
  );
}
export default CharCounter;
