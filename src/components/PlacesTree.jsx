/* eslint-disable react/prop-types */
import React from "react";

export default function PlacesTree({ id, plan, onComplete, parentId }) {
  const place = plan[id];
  const childIds = place.childIds;

  return (
    <>
      <li className="">
        {place.title}{" "}
        <button
          onClick={() => onComplete(parentId, id)}
          className=" border-2 cursor-pointer"
        >
          Complete
        </button>
        {childIds.length > 0 && (
          <ol>
            {childIds.map((id) => (
              <PlacesTree
                key={id}
                id={id}
                plan={plan}
                onComplete={onComplete}
                parentId={place.id}
              />
            ))}
          </ol>
        )}
      </li>
    </>
  );
}
