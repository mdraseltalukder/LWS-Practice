import { useState } from "react";
import AccourdionChild from "./AccourdionChild";

export default function Accourdion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const title1 = "learn with sumit 1";
  const title2 = "learn with sumit 2";
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sapiente quisquam soluta ducimus ratione a accusantium voluptates aliquid autem amet et vitae id laboriosam alias, doloribus sint, ipsum mollitia sed?";

  const handleActive = (indexNumber) => {
    setActiveIndex(indexNumber);
  };
  return (
    <>
      <AccourdionChild
        title={title1}
        onActive={() => handleActive(0)}
        isActive={activeIndex === 0}
      >
        {description}
      </AccourdionChild>

      <AccourdionChild
        title={title2}
        onActive={() => handleActive(1)}
        isActive={activeIndex === 1}
      >
        {description}
      </AccourdionChild>
    </>
  );
}
