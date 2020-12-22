export default {
  uniqueID: "001",
  title: "Runaway Data",
  summary:
    "These data represent the number of runaway youth that are reported to police in Multnomah County from 2015 - 2018. Data are obtained from <insert here> and are processed to assess the percentage of runaway youth per census tract. This dataset was not inclued in the Economic Mobility Dashboard due to over- and under-representation of populations.",
  dataType: "Dataset",
  dateRange: "1/1/2015 - 12/31/2018",
  subComponentOf: "Health & Family Marginalization",
  includedIn: "Economic Mobility Dashboard",
  relatedTo: "Other variables considered in 'Health & Family Marginalization'",
  successes: "Document successes here",
  challenges:
    "Over-representation of runaways from group homes and foster care and under-represenation of runaways from wealthier areas led County to pause on including this in the Dashboard. DCJ thought the ata did not tell the whole story of runaways in Multnomah Couny and thought it would be intellectually irresponsible to include.",
  sandtraps:
    "Runaway data do not represent homelessness. Counts are based on reports to police and may under-represent runaways.",
  missingInformation: {
    gapsInStewardship:
      "Who are the data trustees and data stewards that participate in the data lifecycle?",
    gapsInInformation:
      "Runaway data lacks information from wealthier areas and over-represents runaway youth in group homes and foster care.",
    gapsInClassificationRaceEthnicity:
      "Does dataset include information on race and ethnicity? If so, what classification is used?"
  },
  officialMaintenance: {
    officialMaintainer: "Multnomah County Department of Community Justice",
    dataContributor: "Alisa Stubblefield",
    maintenanceInterval: "Unknown",
    lastOfficialMaintainence: "yyyy-mm-dd (Date)",
    typicalUpdates: "Long form explanation of typical updates"
  },
  rawData: {
    rawTitle:
      "Official Title of the Runaway Data from the original source. Note that we need more info on this, where do raw data come from?",
    rawStableURI: "archival URL to incentivize providers",
    lang: "language",
    dateRangeStart: "1/1/2015",
    dataRangeEnd: "12/31/2018",
    notes: "notes about this resource"
  },
  processedData: {
    droppedFields:
      "What are additional fields that accompany the runaway data from reports to police that are not represented here?",
    addedFields:
      "What fields have been added to the runaway data in the development of the normalized factor?",
    processOverview:
      "Explanation of steps taken to process, clear and sequential",
    processDescriber: "Who has provided the context on the processing steps",
    processSteps: [
      {
        stepNumber: "01",
        action:
          "Aggregate number of youth reported to police as runaways by census tract.",
        relatedResources: [
          "Multnomah County Census Tracts",
          "Number of runaways reported to police."
        ],
        stepWho: "Multnomah County data stewards (Alissa?, Rachel?)",
        stepExplanation:
          "This was done to get a count representing a census tract."
      },
      {
        stepNumber: "02",
        action:
          "Convert the count of runaway youth by census tract to a percentage of population in each census tract.",
        relatedResources: [
          "Multnomah County Census Tracts",
          "Multnomah County Census Tract Populations"
        ],
        stepWho: "Multnomah County data stewards (Alissa?, Rachel?)",
        stepExplanation:
          "This was done to calculate the count of runaways as a percentage of census tract population."
      },
      {
        stepNumber: "03",
        action:
          "Normalize the percentage of population of runaway youth in a census tract on a 0-10 scale for the dashboard.",
        relatedResources: ["Multnomah County Census Tracts"],
        stepWho: "Multnomah County data stewards (Alissa?, Rachel?)",
        stepExplanation:
          "This was done to normalize the percentage to a 0-10 scale for the dashboard."
      }
    ]
  },
  referenceDocumentation: [
    {
      id: "01",
      title:
        "The Multnomah County Economic Mobility Marginalization Index: A Tool for the Study of Inequality",
      stableURI:
        "https://drive.google.com/file/d/19mtPu73nFnHTJHlOevjUCUYVOPys203q/view",
      lang: "English",
      notes:
        "This resource details the methods used by county researchers during the creation of the Multnomah County Economic Mobility Marginilization Index for 2015-2018 using U.S. Census Bureau American Community Survey (ACS) 2017 5-Year Estimates and other administrative data sets."
    },
    {
      id: "02",
      title: "Marginalization Index Dashboard Data/Variables",
      stableURI:
        "https://docs.google.com/document/d/1jcxB_3NpKY67FT9ubyXj4e-aBp7qhR1XR2hc_ekC_HA/edit",
      lang: "English",
      notes:
        "This document provides information on the variables included in the Marginalization Factor Score Analysis section and the Community Information section of the Multnomah County Economic Mobility Marginalization Index (MCEMMI) Dashboard."
    },
    {
      id: "03",
      title: "Economic Mobility: Data and Variables",
      stableURI:
        "https://multco.us/commissioner-stegmann/economic-mobility-data-and-variables",
      lang: "English",
      notes:
        "This document provides information on the variables included in the Marginalization Factor Score Analysis section and the Community Information section of the Economic Mobility Marginalization Dashboard. Information includes variable definition, where the variable fits in the dashboard, data source, date range, and a brief literature review for context."
    }
  ],
  contextQuestions: [
    {
      Influence: [
        {
          id: "01",
          contextualLayer: [
            "Historical",
            "Structural",
            "Institutional",
            "Individual"
          ],
          question: "What was the main motivation for this dataset?"
        },
        {
          id: "02",
          contextualLayer: ["Historical"],
          question: "Why was this work necessary?"
        },
        {
          id: "03",
          contextualLayer: ["Historical"],
          question: "Who does this work benefit?"
        },
        {
          id: "04",
          contextualLayer: ["Institutional"],
          question:
            "How will a racial equity lens be incorporated throughout the data life cycle?"
        }
      ],
      Accountability: [
        {
          id: "01",
          contextualLayer: ["Structural"],
          question:
            "What guides accountability and power sharing between community members/participants and policy makers/agency?"
        },
        {
          id: "02",
          contextualLayer: ["Structural"],
          question:
            "How will community members/people whose data are in the system receive capacity-building? "
        },
        {
          id: "03",
          contextualLayer: ["Structural", "Institutional"],
          question: "Who will hold the agency/collaborative accountable?"
        },
        {
          id: "04",
          contextualLayer: ["Structural"],
          question:
            "How will community expertise be forefront throughout the data life cycle?"
        }
      ],
      Representation: [
        {
          id: "01",
          contextualLayer: ["Historical"],
          question:
            "Is there the possibility of over-representation, or under-representation of data constituents or groups of data constituents? How"
        }
      ],
      Impact: [
        {
          id: "01",
          contextualLayer: ["Structural"],
          question:
            "How is the impact measured? Do you have processes to identify potential harm?"
        },
        {
          id: "02",
          contextualLayer: ["Historical"],
          question:
            "Can the data being collected be used to harm a specific group of people?"
        }
      ]
    }
  ],
  other: {
    serviceProviders: [
      {
        id: "01",
        serviceProvider: "New Avenues for Youth",
        startDate: "yyyy-mm-dd (Date)",
        endDate: "yyyy-mm-dd (Date)",
        website: "https://newavenues.org",
        address: "1220 SW Columbia St., Portland, OR 97201",
        servicesProvided:
          "Prevention and intervention of youth homelessness. Support basic needs, education, job training, employment, and housing.",
        contractWithMultCo: "Active"
      },
      {
        id: "02",
        serviceProvider: "Janus Youth Programs",
        startDate: "yyyy-mm-dd (Date)",
        endDate: "yyyy-mm-dd (Date)",
        website: "http://www.janusyouth.org",
        address: "738 NE Davis Street, Portland, OR 97232",
        servicesProvided:
          "Provides residential care for adolescents struggling with homelessness and drug abuse.",
        contractWithMultCo: "Expired"
      }
    ],
    definitions: [
      {
        id: "01",
        term: "Homeless youth",
        definition:
          "Do not have a home to return to either because 'it is not possible to live in a safe environment with a relative' and there is no alternative safe living arrangements.",
        source: "Runaway and Homeless Youth Act of 1974"
      },
      {
        id: "02",
        term: "Runaway youth",
        definition:
          "under 18 years of age and have absented themselves from a 'home or place of legal residence without the permission of a parent or legal guardian'.",
        source: "Runaway and Homeless Youth Act of 1974"
      }
    ]
  },
  context: {
    contextContributor: "Name of the person providing the context (String)",
    onBehalfOf: "Filling out context for someone else",
    contextPublicationDate: "Date the context was first published",
    contextUpdateDate:
      "Date the context was last updated CIVIC yyyy-mm-dd (Date)",
    contextUpdateBy: "Who made the update"
  },
  numberOfDownloads: "Amount of times this dataset has been downloaded"
};
