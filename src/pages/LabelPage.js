import React from "react";
import { useSelector } from "react-redux";

//components
import LabelSection from "../components/labelSection";

function LabelPage(props) {
  const labels = useSelector((state) => state.labels);

  return (
    <div className="w-5/6">
      <LabelSection
        type="create"
        wrapperStyle="bg-neutral-800 border border-neutral-700 rounded-md mb-12"
      />

      <div className="border border-neutral-700 rounded-md">
        <p
          data-testid="label-count"
          className="bg-neutral-800 rounded-md  p-4 text-left text-white font-bold"
        >
          {`${labels.length} ${labels.length > 1 ? "labels" : "label"}`}
        </p>
        {labels.map((label) => (
          <LabelSection
            key={label.id}
            labelInfo={label}
            type="edit"
            wrapperStyle="border-t border-neutral-700"
          />
        ))}
      </div>
    </div>
  );
}

export default LabelPage;
