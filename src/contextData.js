export default {
  uniqueID: "001",
  title: "Runaway Data",
  dataType: "Dataset",
  subComponentOf: "Health & Family Marginalization",
  includedIn: "Economic Mobility Dashboard",
  relatedTo: "Other variables considered in 'Health & Family Marginalization'",
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
      id: "01",
      contextualLayer: [
        "Historical",
        "Structural",
        "Institutional",
        "Individual"
      ],
      topic: ["Influence"],
      question: "What was the main motivation for this dataset?"
    },
    {
      id: "02",
      contextualLayer: ["Institutional"],
      topic: ["Lineage", "Influence"],
      question:
        "How will a racial equity lens be incorporated throughout the data life cycle?"
    },
    {
      id: "03",
      contextualLayer: ["Historical"],
      topic: ["Influence"],
      question: "Why was this work necessary?"
    },
    {
      id: "04",
      contextualLayer: ["Historical"],
      topic: ["Influence"],
      question: "Who does this work benefit?"
    },
    {
      id: "05",
      contextualLayer: ["Structural"],
      topic: ["Community Engagement/Accountability", "Access", "Influence"],
      question:
        "What guides accountability and power sharing between community members/participants and policy makers/agency?"
    },
    {
      id: "06",
      contextualLayer: ["Historical"],
      topic: ["Data Constituents", "Impact/Harm"],
      question:
        "Is there the possibility of over-representation, or under-representation of data constituents or groups of data constituents? How"
    },
    {
      id: "07",
      contextualLayer: ["Structural"],
      topic: ["Impact/Harm"],
      question:
        "How is the impact measured? Do you have processes to identify any harm that might be caused by the collection / storage/ usage/ reporting of this data? How do you mitigate those harms?"
    },
    {
      id: "08",
      contextualLayer: ["Historical"],
      topic: ["Data Constituents", "Impact/Harm"],
      question:
        "Can the data being collected be used to harm a specific group of people?"
    },
    {
      id: "09",
      contextualLayer: ["Structural"],
      topic: ["Community Engagement/Accountability"],
      question:
        "How will community members/people whose data are in the system receive capacity-building? What structures will be implemented, including funding, training, and ongoing relationship building?"
    },
    {
      id: "10",
      contextualLayer: ["Structural", "Institutional"],
      topic: ["Community Engagement/Accountability"],
      question: "Who will hold the agency/collaborative accountable?"
    },
    {
      id: "11",
      contextualLayer: ["Structural"],
      topic: ["Community Engagement/Accountability"],
      question:
        "How will community expertise be forefront throughout the data life cycle? What capacity will need to be developed to ensure that this occurs?"
    }
  ],
  other: [
    {
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
      ]
    },
    {
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
    }
  ],
  successes:
    "How did steps taken improve the representation of runaway youth for the public? For any steps taken, why were they necessary and beneficial",
  challenges:
    "What information is missing from the runaway data? What assumptions were made? What are the limitations of the original and processed data? ",
  sandtraps:
    "Runaway data do not represent homelessness. Counts are based on reports to police and may under-represent runaways.",
  gapsInStewardship:
    "Who are the data trustees? Who are the data stewards (business, technical, operational) and the curators/custodians (who participate in the data lifecycle)?",
  gapsInInformation:
    "Who is missing from this dataset? Does the dataset identify any subpopulations? Is there the possibility of over-representation or under-representation, of data constituents or groups of data constituents?",
  gapsInClassificationRaceEthnicity:
    "Does dataset include information on race and ethnicity? If so, what classification is used?",
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
