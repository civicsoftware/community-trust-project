import React, { useState, Children, useRef } from "react";
import PropTypes from "prop-types";
import useDimensions from "react-use-dimensions";

/**
 * An accessible container for collapsable content.
 * A short description is required to clarify to screen readers what the more button will unhide.
 */
export default function CollapsableFixedHeight({
  children,
  description,
  hideText,
  answered,
  iconClassName,
  hiddenClassName,
  buttonClassName
}) {
  const buttonRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [containerRef, { height }] = useDimensions({ liveMeasure: false });

  const cta = expanded ? "Less" : "More...";
  const arrow = expanded ? "up" : "down";
  const unhiddenChildren = Children.toArray(children).filter(
    child => !child.props.hidden
  );
  const hiddenChildren = Children.toArray(children).filter(
    child => child.props.hidden
  );

  function handleClick(isExpanded) {
    setExpanded(!isExpanded);
  }

  return (
    <div className="relative">
      <div
        className={`relative ${expanded ? "" : "max-h-36 overflow-hidden"}`}
        ref={containerRef}
      >
        {unhiddenChildren}
      </div>
      {height > 36 && (
        <button
          className={`mt-6 bottom-0 w-full font-bold text-md text-cobalt-900 ${buttonClassName}`}
          onClick={() => handleClick(expanded)}
          type="button"
          aria-live="polite"
          ref={buttonRef}
        >
          {!hideText && cta}
          <span className="hidden">{description}</span>

          {hideText && arrow === "up" && answered && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`inline-block h-4 w-4 text-cobalt ${iconClassName}`}
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                clipRule="evenodd"
              />
            </svg>
          )}
          {hideText && arrow === "down" && answered && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`inline-block h-4 w-4 text-cobalt ${iconClassName}`}
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                clipRule="evenodd"
              />
            </svg>
          )}
          {hideText && arrow === "up" && !answered && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`inline-block h-4 w-4 text-cobalt ${iconClassName}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
              />
            </svg>
          )}
          {hideText && arrow === "down" && !answered && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`inline-block h-4 w-4 text-cobalt ${iconClassName}`}
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
      <div className={hiddenClassName}>{hiddenChildren}</div>
    </div>
  );
}

const Section = ({ children }) => children;

CollapsableFixedHeight.Section = Section;

CollapsableFixedHeight.propTypes = {
  children: PropTypes.node,
  /** A description for screen readers.
   *  Will announce as "more (description)" or "less (description)"
   */
  description: PropTypes.string.isRequired,
  hideText: PropTypes.bool,
  answered: PropTypes.bool,
  buttonClassName: PropTypes.string,
  iconClassName: PropTypes.string,
  hiddenClassName: PropTypes.string
};

CollapsableFixedHeight.displayName = CollapsableFixedHeight;
