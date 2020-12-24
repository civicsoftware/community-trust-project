import { arrayOf, shape, string } from "prop-types";

export const question = shape({
  id: string.isRequired,
  question: string.isRequired,
  contextualLayer: arrayOf(string.isRequired)
});

export const contextSchemaPropTypes = {
  dataset: shape({
    title: string.isRequired,
    subComponentOf: string.isRequired,
    officialMaintenance: shape({
      officialMaintainer: string.isRequired,
      dataContributor: string.isRequired,
      lastOfficialMaintainence: string,
      maintenanceInterval: string.isRequired,
      typicalUpdates: string.isRequired
    }),
    dateRange: string.isRequired,
    summary: string.isRequired,
    sandtraps: arrayOf(string.isRequired).isRequired,
    successes: string.isRequired,
    challenges: string.isRequired,
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
    // TODO: should be object, not array
    contextQuestions: arrayOf(
      shape({
        Uncategorized: arrayOf(question),
        Influence: arrayOf(question),
        Accountability: arrayOf(question),
        Representation: arrayOf(question),
        Impact: arrayOf(question),
        Access: arrayOf(question)
      })
    ),
    referenceDocumentation: arrayOf(
      shape({
        stableURI: string.isRequired,
        title: string.isRequired,
        notes: string.isRequired
      })
    ),
    other: shape({
      serviceProviders: arrayOf(
        shape({
          website: string,
          serviceProvider: string,
          address: string,
          contractWithMultCo: string,
          startDate: string,
          endDate: string
        })
      ).isRequired,
      definitions: arrayOf(
        shape({
          term: string.isRequired,
          definition: string.isRequired,
          source: string.isRequired
        })
      )
    }),
    context: shape({
      contextContributor: string,
      onBehalfOf: string,
      contextPublicationDate: string,
      contextUpdateDate: string,
      contextUpdateBy: string
    })
  })
};
