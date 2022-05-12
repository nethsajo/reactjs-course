import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("DemoOutput RUNNING");
  return <MyParagraph>{props.onShow ? "This is new!" : ""}</MyParagraph>;
};

export default React.memo(DemoOutput);

/**
 * React.memo allows us to optimize functional components
 * memo tells React that DemoOutput component which it gets as a argument.
 * React should look at the props this component gets and the new value for all those props and compare it to the previous value those props got.
 * React.memo can be a great tool if we have a huge component tree with a lot of child components, we can avoid unnecessary re-render cycles
 */
