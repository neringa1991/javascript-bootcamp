import React from "react";
import {useContext} from "react";
import (MobileContext) from "react"

const Child = () => {
  const isMobile = useContext(MobileContext);

  return <div>Child</div>;
};

export default Child;
