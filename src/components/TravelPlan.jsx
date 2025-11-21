import React, { useState } from "react";
import { initialTravelPlan } from "./Places";
import PlacesTree from "./PlacesTree";

export default function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const root = plan[0];
  const childId = root.childIds;

  // handleComplete

  const handleComplete = (parentId, childId) => {
    const parent = plan[parentId];
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== childId),
    };
    setPlan({
      ...plan,
      [parentId]: nextParent,
    });
  };

  return (
    <>
      <h2>Places to visit</h2>
      <ol className="max-w-7xl mx-auto">
        {childId.map((id) => (
          <PlacesTree
            key={id}
            id={id}
            plan={plan}
            onComplete={handleComplete}
            parentId={0}
          />
        ))}
      </ol>
    </>
  );
}
