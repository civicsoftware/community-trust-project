export default {
  uniqueID: "001",
  title: "Evictions Count",
  summary:
    "This data is useful to the community insofar as it is related to houselessness and housing insecurity, which are topics of interest to the community organizations. Potential harm is easily identified with this dataset, though there appears to be no measurement of harm.",
  dataType: "Dataset",
  dateRange: "1/1/2015 - 12/31/2018",
  subComponentOf: "Systemic Isolation",
  includedIn: "Economic Mobility Dashboard",
  relatedTo: "",
  successes: "Document successes here",
  challenges:
    "Research conducted by Matthew Desmond and his website (evictionslab.org) that displays eviction statistics on a map were highlighted in the documentation. Desmond has been criticized for not consulting community organizations who have been working with housing and evictions in order to contextualize his findings. In Oregon, no-cause evictions are allowed without any formal court filing. Since court filings inform Desmond's work, his data represent only a small part of renter instability in Oregon.",
  sandtraps: [
    "The eviction data used here are only representative of eviction cases that went through the court process. Data on no-cause evictions without court filings are not captured."
  ],
  missingInformation: {
    gapsInStewardship:
      "Who are the data trustees and data stewards that participate in the data lifecycle?",
    gapsInInformation:
      "The lack of reporting mechanism in place to capture no-cause evictions hinders information collected on evictions.",
    gapsInClassificationRaceEthnicity:
      "Does dataset include information on race and ethnicity? If so, what classification is used?"
  },
  officialMaintenance: {
    officialMaintainer: "Multnomah County Sheriff's Department",
    dataContributor: "Wendy Lin-Kelly",
    maintenanceInterval: "Unknown",
    lastOfficialMaintainence: "yyyy-mm-dd (Date)",
    typicalUpdates: "Long form explanation of typical updates"
  },
  rawData: {
    rawTitle: "",
    rawStableURI: "archival URL to incentivize providers",
    lang: "language",
    dateRangeStart: "1/1/2015",
    dataRangeEnd: "12/31/2018",
    notes: "notes about this resource"
  },
  processedData: {
    droppedFields:
      "What are additional fields that accompany the raw data that are not represented here?",
    addedFields: "What fields have been added to the data?",
    processOverview:
      "The number of evictions by the Sheriff's Office are aggregated by census track. The count was converted to a percentage of population in each census tract and normalized on a 0 - 10 scale. (from Data/Variables Documentation)",
    processDescriber: "Multnomah County (identify specific individual?)",
    processSteps: [
      {
        stepNumber: "01",
        action:
          "Aggregate the number of evictions completed by the Sheriff's Office in each census tract.",
        relatedResources: [
          "Multnomah County Census Tracts",
          "Number of evictions"
        ],
        stepWho: "Wendy Lin-Kelly",
        stepExplanation:
          "This was done to get a count representing a census tract."
      },
      {
        stepNumber: "02",
        action:
          "Convert the count of evictions to a percentage of population in each census tract.",
        relatedResources: [
          "Multnomah County Census Tracts",
          "Multnomah County Census Tract Populations"
        ],
        stepWho: "Wendy Lin-Kelly",
        stepExplanation:
          "This was done to calculate the count of evictions as a percentage of census tract population."
      },
      {
        stepNumber: "03",
        action:
          "Normalize the percentage of evictions in a census tract on a 0-10 scale for the dashboard.",
        relatedResources: ["Multnomah County Census Tracts"],
        stepWho: "Wendy Lin-Kelly",
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
          contextualLayer: ["Historical"],
          question:
            "What are the histories and contingent conditions of creation of datasets?"
        },
        {
          id: "02",
          contextualLayer: ["Institutional", "Individual"],
          question:
            "What are the current work practices, norms, and routines that structure data collection, curation, and annotation of data?"
        },
        {
          id: "03",
          contextualLayer: ["Institutional", "Structural"],
          question:
            "How will the agency/collaborative initially focus upon, continuously learn from, and sustain institutional-systems change?"
        }
      ],
      Accountability: [
        {
          id: "01",
          contextualLayer: ["Structural"],
          question:
            "How will community expertise be forefront throughout the data life cycle?"
        },
        {
          id: "02",
          contextualLayer: ["Institutional"],
          question:
            "How will a racial equity lens be incorporated throughout the data life cycle?"
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
            "What guides accountability and power sharing between community members/participants and policy makers/agency?"
        },
        {
          id: "05",
          contextualLayer: ["Structural"],
          question:
            "How will community members/people whose data are in the system receive capacity-building?"
        },
        {
          id: "06",
          contextualLayer: ["Historical"],
          question:
            "What role does community organizing play in the design and use of this data?"
        },
        {
          id: "07",
          contextualLayer: [
            "Structural",
            "Institutional",
            "Historical",
            "Individual"
          ],
          question:
            "How will the culture, policies, practices, and expectations of the agency/collaborative shift to center racial equity?"
        },
        {
          id: "08",
          contextualLayer: ["Structural", "Institutional"],
          question:
            "How will the agency/collaborative engage with community members, and in what manner?"
        }
      ],
      Representation: [
        {
          id: "01",
          contextualLayer: ["Historical"],
          question:
            "What differences between people are masked in this dataset?"
        },
        {
          id: "02",
          contextualLayer: ["Historical"],
          question: "Who is missing from this dataset?"
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
          question:
            "How is the impact measured? Do you have processes to identify potential harm?"
        },
        {
          id: "02",
          contextualLayer: ["Historical"],
          question:
            "Can the data being collected be used to harm a specific group of people?"
        },
        {
          id: "03",
          contextualLayer: ["Historical"],
          question: "Who can the process/product harm?"
        },
        {
          id: "04",
          contextualLayer: ["Historical"],
          question: "Who does this work benefit?"
        },
        {
          id: "05",
          contextualLayer: ["Historical", "Institutional"],
          question:
            "Have you evaluated whether the data access practices are positive or problematic? How?"
        },
        {
          id: "06",
          contextualLayer: ["Structural"],
          question:
            "How will data use help communities interrogate systems, rather than just inform how to 'treat' communities with additional services and programs?"
        }
      ],
      Access: [
        {
          id: "01",
          contextualLayer: ["Institutional", "Individual"],
          question: "Who can request/use data?"
        }
      ]
    }
  ],
  other: {
    serviceProviders: [
      {
        id: "01",
        serviceProvider: "Community Alliance of Tenants",
        startDate: "1996-01-01 (Date)",
        endDate: "yyyy-mm-dd (Date)",
        website: "https://www.oregoncat.org",
        address: "1320 NE 63rd Ave, Portland, OR 97213",
        servicesProvided:
          "Formed in 1996, the Community Alliance of Tenants (CAT) is Oregon’s only statewide, grassroots, tenant-controlled, tenant-rights organization. CAT educates, organizes and develops the leadership of low-income tenants.",
        contractWithMultCo: "False"
      },
      {
        id: "02",
        serviceProvider: "Home Forward",
        startDate: "yyyy-mm-dd (Date)",
        endDate: "yyyy-mm-dd (Date)",
        website:
          "http://www.homeforward.org/find-a-home/get-help-paying-rent/short-term-help",
        address: "135 SW Ash Street, Portland, OR 97204",
        servicesProvided:
          "Home Forward offers several types of programs to help different people in need pay their rent. They provide rent assistance to low-income residents, military veterans, and people with disabilities",
        contractWithMultCo: "?"
      }
    ],
    definitions: [
      {
        id: "01",
        term: "Eviction",
        definition:
          "'Evict' and 'Eviction' means any action by a landlord, owner of a residential property, or other person with a legal right to pursue eviction or a possessory action, to remove or cause the removal of a covered person from a residential property. This does not include foreclosure on a home mortgage.",
        source: "Federal Register"
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
