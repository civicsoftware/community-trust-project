export default {
  uniqueID: "001",
  title: "Low Birth Weight Data",
  summary:
    "Low birth weight is commonly thought of as being a cause of poverty and associated other negative outcomes later in life. Babies weighing less than 2500 grams (5.5 lbs) are considered to have a low birth weight. It may be a result of preterm birth (gestation < 37 completed weeks), intrauterine growth restriction, or both (Cutland et al. 2017). About 15 percent of babies were born with a health issue, and women of color had higher rates of births with one of several poor outcomes (e.g. low birthweight, pre-term, newborn condition), with 21.3% of Black/African American recent mothers experiencing poor outcomes. Black/African American recent mothers had the highest proportion of low birthweight babies and preterm births. American Indian/Alaska Native mothers, along with Black/African American mothers were nearly two times more likely than non-Latino white counterparts to have an infant die in the first year of life (see Maternal, Child, and Family Health Data Book).",
  dataType: "Dataset",
  dateRange: "1/1/2017 - 12/31/2017",
  subComponentOf: "Health & Education Marginalization",
  includedIn: "Economic Mobility Dashboard",
  relatedTo: "Other variables considered in 'Health & Family Marginalization'",
  successes: "Document successes here",
  challenges: "Document challenges here.",
  sandtraps: ["Document sandtraps here."],
  missingInformation: {
    gapsInStewardship:
      "Who are the data trustees and data stewards that participate in the data lifecycle?",
    gapsInInformation:
      "What other data accompany the low-birth-weight data? The data are represented as a count, are there demographic data that accompany the instance of a low-birth-weight report?",
    gapsInClassificationRaceEthnicity:
      "Does dataset include information on race and ethnicity? If so, what classification is used?"
  },
  officialMaintenance: {
    officialMaintainer: "Multnomah County Health Department",
    dataContributor: "Erin Fairchild",
    maintenanceInterval: "Unknown",
    lastOfficialMaintainence: "yyyy-mm-dd (Date)",
    typicalUpdates: "Long form explanation of typical updates"
  },
  rawData: {
    rawTitle: "Need more info",
    rawStableURI: "archival URL to incentivize providers",
    lang: "language",
    dateRangeStart: "1/1/2017",
    dataRangeEnd: "12/31/2017",
    notes:
      "Low birth weight are obtained through administrative datasets. The data are collected through official records and capture instances where official reports were made. The data source is listed as 'Mulnomah County Health Department database'."
  },
  processedData: {
    droppedFields:
      "What are additional fields that accompany the raw data that are not represented here?",
    addedFields: "What fields have been added to the low birth weight data?",
    processOverview:
      "The count of babies born in each census tract weighing less than 2500 grams is aggregated by census tract. This count is then converted to a percentage of population in each census tract. This percentage is then normalized on a scale of 0 - 10.",
    processDescriber: "Multnomah County (identify specific individual?)",
    processSteps: [
      {
        stepNumber: "01",
        action:
          "Aggregate number of babies born in each census tract who weighed less than 2500 grams.",
        relatedResources: [
          "Multnomah County Census Tracts",
          "Number of babies that weigh less than 2500 grams"
        ],
        stepWho: "Multnomah County data stewards (Alissa?, Rachel?)",
        stepExplanation:
          "This was done to get a count representing a census tract."
      },
      {
        stepNumber: "02",
        action:
          "Convert the count of low birth weight babies to a percentage of population in each census tract.",
        relatedResources: [
          "Multnomah County Census Tracts",
          "Multnomah County Census Tract Populations"
        ],
        stepWho: "Multnomah County data stewards (Alissa?, Rachel?)",
        stepExplanation:
          "This was done to calculate the count of low-birth-weight babies as a percentage of census tract population."
      },
      {
        stepNumber: "03",
        action:
          "Normalize the percentage of population of low birth weight babies in a census tract on a 0-10 scale for the dashboard.",
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
    },
    {
      id: "04",
      title: "Maternal, Child, and Family Health Data Book",
      stableURI: "https://multco.us/file/34038/download",
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
        id: "",
        serviceProvider: "",
        startDate: "yyyy-mm-dd (Date)",
        endDate: "yyyy-mm-dd (Date)",
        website: "",
        address: "",
        servicesProvided: "",
        contractWithMultCo: ""
      }
    ],
    definitions: [
      {
        id: "01",
        term: "Low birth weight",
        definition:
          "Term used to describe babies that weigh less than 5 pounds, 8 ounces (2,500 grams) at birth regardless of gestational age. A low-birth-weight baby may be healthy despite being small; however, infants born with low birth weight can also have many health problems.",
        source: "World Health Organization"
      },
      {
        id: "02",
        term: "",
        definition: "",
        source: ""
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
