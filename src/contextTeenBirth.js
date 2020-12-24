export default {
  uniqueID: "003",
  title: "Teen Births",
  summary:
    "These data represent the count of teen births (mom ages 18 and under at the beginning of pregnancy term) aggregated by census tract.",
  dataType: "Dataset",
  dateRange: "1/1/2017 - 12/31/2017",
  subComponentOf: "Health and Education Marginalization Factor",
  includedIn: "Economic Mobility Dashboard",
  relatedTo:
    "Other variables considered in 'Health and Education Marginalization': Limited English, Low Birth Weight, Low Education, Low Voter Participation",
  successes: "Document successes here",
  challenges: "Document challenges here",
  sandtraps: [
    "Literature review showed that teen births were highly correlated with race. Also with whether the teenage girls were in child welfare system. It is unclear if the birth data was correlated with these demographic information in the EMD dashboard",
    "OHA dataset includes both teen births and teen abortions. Why was only teen births included?"
  ],
  missingInformation: {
    gapsInStewardship:
      "Who are the data trustees and data stewards that participate in the data lifecycle?",
    gapsInInformation:
      "What other data accompany the teen-birth data? The data are represented as a count, are there demographic data that accompany the instance of teen-birth report.",
    gapsInClassificationRaceEthnicity:
      "Does dataset include information on race and ethnicity? If so, what classification is used? The dataset follows OHA's 'Race, ethnicity, language, and disaibility demographic data collection standards'. It is unclear if race and ethnicity information is used in EMD dashboard"
  },
  officialMaintenance: {
    officialMaintainer: "Oregon Health Authority",
    dataContributor: "Lynn Rampe",
    maintenanceInterval: "Unknown",
    lastOfficialMaintainence: "yyyy-mm-dd (Date)",
    typicalUpdates: "Long form explanation of typical updates"
  },
  rawData: {
    rawTitle:
      "Official Title of the MH&A Medicaid Client Data from the original source. Note that we need more info on this, where do raw data come from?",
    rawStableURI: "archival URL to incentivize providers",
    lang: "language",
    dateRangeStart: "1/1/2017",
    dataRangeEnd: "12/31/2017",
    notes: "notes about this resource"
  },
  processedData: {
    droppedFields:
      "What are additional fields that accompany the Teen Birth data that are not represented here?",
    addedFields:
      "What fields have been added to the Teen Birth data in the development of the normalized factor?",
    processOverview:
      "Explanation of steps taken to process, clear and sequential",
    processDescriber: "Who has provided the context on the processing steps",
    processSteps: [
      {
        stepNumber: "01",
        action:
          "Aggregate count of teen births in Multnomah county by census tract.",
        relatedResources: ["Multnomah County Census Tracts"],
        stepWho: "Multnomah County data analysts (Rachel Novick/Lynn Rampe?)",
        stepExplanation:
          "This was done to get a count for the geographic area of each census tract."
      },
      {
        stepNumber: "02",
        action:
          "Convert the count of teen births to a percentage of population in each census tract.",
        relatedResources: [
          "Multnomah County Census Tracts",
          "Multnomah County Census Tract Populations"
        ],
        stepWho: "Multnomah County data analysts (Rachel Novick/Lynn Rampe?)",
        stepExplanation:
          "This was done to calculate the count of teen births as a percentage of census tract population."
      },
      {
        stepNumber: "03",
        action:
          "Normalize the percentage of population of teen births in  in a census tract on a 0-10 scale for the dashboard.",
        relatedResources: ["Multnomah County Census Tracts"],
        stepWho: "Multnomah County data analysts (Rachel Novick/Lynn Rampe?)",
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
    },
    {
      id: "04",
      title: "Oregon Health Authority Teen Pregnancy Data",
      stableURI:
        "https://www.notion.so/civicsoftware/Teen-Births-f661ae72843d419c910eed734202025d#511593bb816b4b0db9df5a28257ad471",
      lang: "English",
      notes:
        "This is the state website which shows the number of births to Oregon teens for three-year aggregates by resident county and age."
    }
  ],
  contextQuestions: [
    {
      Lineage: [
        {
          id: "01",
          contextualLayer: [""],
          question: "Where is this data from? How was the data collected?"
        },
        {
          id: "02",
          contextualLayer: [""],
          question: "In what form does the data exist?"
        },
        {
          id: "03",
          contextualLayer: [""],
          question: "What are the steps taken to clean and organize this data?"
        }
      ],
      Influence: [
        {
          id: "01",
          contextualLayer: [
            "Historical",
            "Structural",
            "Institutional",
            "Individual"
          ],
          question:
            "What was the main motivation for this dataset, and rationale for its inclusion in the Economic Mobility Dashboard?"
        },
        {
          id: "02",
          contextualLayer: ["Institutional"],
          question:
            "How will a racial equity lens be incorporated throughout the data life cycle?"
        }
      ],
      Accountability: [
        {
          id: "01",
          contextualLayer: [
            "Structural",
            "Institutional",
            "Historical",
            "Individual"
          ],
          question:
            "How will the culture, policies, practices, and expectations of the agency/collaborative shift to center racial equity? How is that realized in this dataset?"
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
          question: "Who is missing from this dataset?"
        },
        {
          id: "02",
          contextualLayer: ["Historical"],
          question:
            "Does the dataset identify any subpopulations (e.g., by age, gender)? If so, please describe how these subpopulations are identified and provide a description of their respective distributions within the dataset."
        },
        {
          id: "03",
          contextualLayer: ["Historical"],
          question:
            "Is there the possibility of over-representation, or under-representation, of data constituents or groups of data constituents? How?"
        }
      ],
      Impact: [
        {
          id: "01",
          contextualLayer: ["Structural"],
          question: "How is the impact measured? "
        },
        {
          id: "02",
          contextualLayer: ["Structural"],
          question:
            "Do you have processes to identify potential harm that might be caused by the collection/storage/usage/reporting of this data? How are those harms mitigated?"
        },
        {
          id: "03",
          contextualLayer: ["Historical"],
          question: "Who can the process/product harm?"
        },
        {
          id: "04",
          contextualLayer: ["Structural"],
          question: "How does this work benefit the community at large?"
        }
      ],
      Access: [
        {
          id: "01",
          contextualLayer: ["Individual"],
          question:
            "What is the level of security for data access? Is there documentation for accessing/using this dataset?"
        }
      ]
    }
  ],
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
