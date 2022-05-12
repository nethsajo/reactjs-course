import React, { useState, useCallback, useMemo } from "react";
import Button from "./components/UI/Button/Button";
import DemoList from "./components/Demo/DemoList";
// import DemoOutput from "./components/Demo/DemoOutput";

import "./App.css";

function App() {
  console.log("APP RUNNING");
  // const [showParagraph, setShowParagraph] = useState(false);
  // const [allowToggle, setAllowToggle] = useState(false);

  // const handleToggleParagraph = useCallback(() => {
  //   if (allowToggle) {
  //     setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  //   }
  // }, [allowToggle]);

  // const handleAllowToggle = () => {
  //   setAllowToggle(true);
  // };

  const [listTitle, setListTitle] = useState("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* <DemoOutput onShow={showParagraph} />
      <Button onClick={handleAllowToggle}>Allow Toggling!</Button>
      <Button onClick={handleToggleParagraph}>Toggle Paragraph!</Button> */}
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title!</Button>
    </div>
  );
}

export default App;

/**
 * useCallback is a hook that allows us to basically store a function across component executions
 * It allows us to tell React that we wanna save a function and that function should not be recreated with every execution
 * It allows us to save a function so that we can reuse it
 */
