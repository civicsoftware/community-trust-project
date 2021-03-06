import { arrayOf, shape, string, oneOf, bool } from "prop-types";

export const questionPropTypes = {
  type: oneOf([
    "short answer",
    "long answer",
    "yes no",
    "yes no with short answer",
    "yes no with long answer"
  ]).isRequired,
  text: string,
  textYes: string,
  textNo: string,
  description: shape({
    /* contentful rich text */
  })
};

export const answerPropTypes = {
  question: shape({ questionText: string }),
  answerBoolean: bool,
  answerShortText: string,
  answerLongText: shape({
    /* contentful rich text */
  })
};

export const contextSchemaPropTypes = {
  dataset: shape({
    title: string.isRequired,
    subComponentOf: string.isRequired,
    dataType: string.isRequired,
    includedIn: string.isRequired,
    officialMaintenance: shape({
      officialMaintainer: string.isRequired,
      dataContributor: string.isRequired,
      lastOfficialMaintainence: string.isRequired,
      maintenanceInterval: string.isRequired,
      typicalUpdates: string.isRequired
    }),
    dateRange: string.isRequired,
    missingInformation: shape({
      gapsInStewardship: string.isRequired,
      gapsInInformation: string.isRequired,
      gapsInClassificationRaceEthnicity: string.isRequired
    }),
    rawData: shape({
      rawTitle: string.isRequired,
      rawStableURI: string.isRequired,
      dateRangeStart: string.isRequired,
      dataRangeEnd: string.isRequired,
      lang: string.isRequired,
      notes: string.isRequired
    }),
    processedData: shape({
      classificationBy: string.isRequired,
      classificationFields: string.isRequired,
      processDescriber: string.isRequired,
      processOverview: string.isRequired,
      droppedFields: string.isRequired,
      addedFields: string.isRequired,
      processSteps: arrayOf(
        shape({
          stepNumber: string.isRequired,
          action: string.isRequired,
          stepWho: string.isRequired,
          stepExplanation: string.isRequired,
          relatedResources: arrayOf(string).isRequired
        })
      ).isRequired
    }),
    referenceDocumentation: arrayOf(
      shape({
        stableURI: string.isRequired,
        title: string.isRequired,
        notes: string.isRequired
      })
    ).isRequired,
    other: shape({
      serviceProviders: arrayOf(
        shape({
          website: string.isRequired,
          serviceProvider: string.isRequired,
          address: string.isRequired,
          contractWithMultCo: string.isRequired,
          startDate: string.isRequired,
          endDate: string.isRequired
        })
      ).isRequired,
      definitions: arrayOf(
        shape({
          term: string.isRequired,
          definition: string.isRequired,
          source: string.isRequired
        })
      ).isRequired
    }).isRequired,
    context: shape({
      contextContributor: string.isRequired,
      onBehalfOf: string.isRequired,
      contextPublicationDate: string.isRequired,
      contextUpdateDate: string.isRequired,
      contextUpdateBy: string.isRequired
    }).isRequired
  })
};
