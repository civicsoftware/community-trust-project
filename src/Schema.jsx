/* eslint-disable no-console */
import React, { useRef, useState } from "react";
import { Textarea, Label, Button } from "@windmill/react-ui";
import { contextSchemaPropTypes } from "./contextSchemaPropTypes";

// This page is not linked, but is used for debugging
function Validate({ dataset, value }) {
  return (
    <p className="text-sm">
      {!value ? "Click to validate " : ""}
      {dataset
        ? "Valid JSON - Check console for warnings"
        : value && (
            <span>
              Invalid JSON - Use{" "}
              <a href="https://jsonlint.com/" target="_blank" rel="noreferrer">
                JSONLint.com
              </a>
            </span>
          )}
    </p>
  );
}

Validate.propTypes = contextSchemaPropTypes;

function Schema() {
  const textInput = useRef(null);
  const [value, setValue] = useState();
  const [dataset, setDataset] = useState();

  function handleClick() {
    console.log("Checking JSON...");
    setValue(textInput.current.value);
    setDataset(null);
    try {
      const parsed = JSON.parse(textInput.current.value);
      try {
        setDataset(parsed);
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  }

  function handleClear() {
    console.clear();
  }

  return (
    <div className="max-w-4xl mx-auto mt-32">
      <p>
        This will warnings for all required fields. In the product, all fields
        are optional, but this should help you catch any misshapen objects.
      </p>
      <Label>
        <div className="fixed bg-gray-300 p-4 -mt-32">
          <span className="text-xl">Schema validation</span>
          <Button className="mx-4" onClick={handleClick}>
            Validate
          </Button>
          <Button className="mx-4" onClick={handleClear}>
            Clear Console
          </Button>
          <Validate value={value} dataset={dataset} />
        </div>
        <Textarea
          ref={textInput}
          className="mt-1"
          rows="100"
          placeholder="Paste JSON here and open the console"
        />
      </Label>
    </div>
  );
}

export default Schema;
