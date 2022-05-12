import React, { useMemo } from "react";

import classes from "./DemoList.module.css";

const DemoList = (props) => {
  const { items } = props;

  const sortedList = useMemo(() => {
    console.log("Items sorted!");
    return items.sort((x, y) => x - y);
  }, [items]);

  console.log("DemoList RUNNING");

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);

/**
 * useMemo hook basically allows us to memoize, so basically that means to store any kind of data which we want to store
 * The first argument in useMemo wants a function. Not a function that will be memorized.
 * Instead, that function should return what we want to store
 * The second argument is useMemo wants an array of dependencies, basically to ensure that this stored value is updated
 */
