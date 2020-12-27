import React, { useState, Children, useRef, Fragment } from "react";
import PropTypes from "prop-types";

/**
 * An accessible container for collapsable content.
 * A short description is required to clarify to screen readers what the more button will unhide.
 */
export default function Collapsable({ children, description, hideText }) {
  const hiddenRef = useRef(null);
  const buttonRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const cta = expanded ? "Less" : "More";
  const arrow = expanded ? "up" : "down";
  const unhiddenChildren = Children.toArray(children).filter(
    child => !child.props.hidden
  );
  const hiddenChildren = Children.toArray(children).filter(
    child => child.props.hidden
  );

  function handleClick(isExpanded) {
    setExpanded(!isExpanded);
    if (isExpanded) {
      buttonRef.current.focus();
    } else {
      hiddenRef.current.focus();
    }
  }

  return (
    <>
      {unhiddenChildren}
      {hiddenChildren.length > 0 && (
        <button
          className="inline-block float-right font-medium text-md"
          onClick={() => handleClick(expanded)}
          type="button"
          aria-live="polite"
          ref={buttonRef}
        >
          {!hideText && cta}
          <span className="hidden">{description}</span>
          {arrow === "up" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="inline-block h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
              />
            </svg>
          )}
          {arrow === "down" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="inline-block h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
              />
            </svg>
          )}
        </button>
      )}
      <div className="outline-none" role="group" tabIndex="-1" ref={hiddenRef}>
        {expanded && hiddenChildren}
      </div>
    </>
  );
}

const Section = ({ children }) => children;

Collapsable.Section = Section;

Collapsable.propTypes = {
  children: PropTypes.node,
  /** A description for screen readers.
   *  Will announce as "more (description)" or "less (description)"
   */
  description: PropTypes.string.isRequired,
  hideText: PropTypes.bool
};

Collapsable.displayName = Collapsable;
