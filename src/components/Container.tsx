import React, { FC } from "react";

interface ContainerProps {
  children: any;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="max-w-7xl mx-auto px-4">{children}</div>;
};

export default Container;
