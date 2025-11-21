/* eslint-disable react/prop-types */
import React from "react";

export default function AccourdionChild({
  title,
  children,
  onActive,
  isActive,
}) {
  return (
    <>
      <section>
        <h3>{title}</h3>

        {isActive && <p>{children}</p>}
        {!isActive && (
          <button
            className="border-r-gray-200 border-2 py-1 px-3"
            onClick={onActive}
          >
            Show
          </button>
        )}
      </section>
    </>
  );
}
