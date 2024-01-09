import React, { useState } from "react";
import { available_fields_data } from "../util/constants";

const FieldsComponent: React.FC = () => {
 const [availableFields, setAvailableFields] = useState<string[]>(
    available_fields_data
  );
  const [selectedAvailableFields, setSelectedAvailableFields] = useState<
    string[]
  >([]);
  const [displayedFields, setDisplayedFields] = useState<string[]>([]);

  const [selectedDisplayedFields, setSelectedDisplayedFields] = useState<
    string[]
  >([]);

  const handleAvailableFieldSelection = (field: string) => {
    if (selectedAvailableFields.includes(field)) {
      setSelectedAvailableFields(
        selectedAvailableFields.filter((f) => f !== field)
      );
    } else {
      setSelectedAvailableFields([...selectedAvailableFields, field]);
    }
  };

   const handleDisplayedFieldSelection = (field: string) => {
    if (selectedDisplayedFields.includes(field)) {
      setSelectedDisplayedFields(
        selectedDisplayedFields.filter((f) => f !== field)
      );
    } else {
      setSelectedDisplayedFields([...selectedDisplayedFields, field]);
    }

  
  };

   const moveSelectedToDisplayed = () => {
    setAvailableFields(
      availableFields.filter(
        (field) => !selectedAvailableFields.includes(field)
      )
    );
    setDisplayedFields([...displayedFields, ...selectedAvailableFields]);
    setSelectedAvailableFields([]);
  };

  const moveSelectedToAvailable = () => {
    setDisplayedFields(
      displayedFields.filter(
        (field) => !selectedDisplayedFields.includes(field)
      )
    );
    setAvailableFields([...availableFields, ...selectedDisplayedFields]);
    setSelectedDisplayedFields([]);

  
  };

  return (
    <div className="flex justify-center mt-8">
      {/* Available Fields Table */}
      <div className="border p-4 mb-3">
        <h2 className="text-lg font-semibold mb-2">Available Fields</h2>
        <ul className="space-y-2">
          {availableFields.map((field) => (
            <li
              key={field}
             className={`cursor-pointer hover:text-blue-500 ${
                selectedAvailableFields.includes(field)
                  ? "text-blue-500 font-semibold"
                  : ""
              }`}
              onClick={() => handleAvailableFieldSelection(field)}
            >
              {field}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-center justify-center mx-4">
        <button
          className="py-2 px-4 h-10 border-2"
          onClick={moveSelectedToDisplayed}
          disabled={selectedAvailableFields.length === 0}
        >
          {">>"}
        </button>
        <div className="h-4"></div>
        <button
          className="py-2 px-4  h-10 border-2"
          onClick={moveSelectedToAvailable}
          disabled={selectedDisplayedFields.length === 0}
        >
          {"<<"}
        </button>
      </div>

      {/* Displayed Fields Table */}
      <div className="border p-4 mb-3">
        <h2 className="text-lg font-semibold mb-2">Fields to be Displayed</h2>
        <ul className="space-y-2">
          {displayedFields.map((field) => (
            <li
              key={field}
               className={`cursor-pointer hover:text-blue-500 ${
                selectedDisplayedFields.includes(field)
                  ? "text-blue-500 font-semibold"
                  : ""
              }`}
              onClick={() => handleDisplayedFieldSelection(field)}
            >
              {field}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FieldsComponent;