export default {
  uniqueID: "002",
  title: "Mental Health & Addiction Medicaid Clients Served",
  summary:
    "These data represent the count of Healthshare Medicaid clients served through Multnomah County Health Department Mental Health and Addiction Services in Calendar Year 2017 (division is now called Behavioral Health as of July 1, 2020), per the World Health Organization definition, aggregated by census tract. (source: Economic Mobility Dashboard Data/Variables)",
  dataType: "Dataset",
  dateRange: "1/1/2017 - 12/31/2017",
  subComponentOf: "Systemic Isolation Marginalization",
  includedIn: "Economic Mobility Dashboard",
  relatedTo:
    "Other variables considered in 'Systemic Isolation Margination': Evictions, Limited/No Internet, Person Crimes",
  successes:
    'The HSRI report identifies several existing ongoing efforts at Multnomah County: "The Behavioral Health Draft Work Plan of the Oregon Health Policy Board includes consideration of many of the issues discussed in this analysis, including integration, financing, care coordination, workforce issues, evidence-based practice, cultural best practice, and children’s behavioral health issues including meeting the needs of children in foster care. Stakeholders at the local and state levels appear to be in agreement that the goals of system reforms should be to maintain the positive gains from past efforts while addressing continued issues such as physical and behavioral health integration, health equity, supporting the social determinants of health, and outcomes-driven quality improvement."',
  challenges:
    'The HSRI report identifies barriers, in particular for communities of color, to accessing services at the county. In particular, communities of color and immigrants lack access to culturally responsive services that go beyond language translation, and providers with a deep understanding of "historical trauma, microaggressions, and racism." The report identifies and discusses both overrepresentation and underrepresentation based on race and ethnicity in the public behavioral health system. As next steps, the report identifies three high priority recommendations: (1) "Engage in ongoing dialogue with service users and their families and other stakeholders to ensure a shared and actionable vision for the mental health system."; (2) "Establish a director-level lived experience leadership position"; (3) "Integrate and analyze data on funding and services to support system improvements."',
  sandtraps: [
      "19.4% of the population of Multnomah County has Medicaid (Data USA, https://datausa.io/profile/geo/multnomah-county-or#health), and only 33% of Medicaid clients who utilize mental health services do so through mental health providers; the majority of care is received through physical care providers (HSRI report). The dataset of Medicaid Clients Served may undercount behavioral health service utilization by persons with Medicaid.",
      "Normalization with respect to the general population vs population of Medicaid clients should be considered based on use."
  ],
  missingInformation: {
    gapsInStewardship:
      "Who are the data trustees and data stewards that participate in the data lifecycle?",
    gapsInInformation:
      "Who was counted as part of this dataset, what providers, and what types of care?",
    gapsInClassificationRaceEthnicity:
      "Does dataset include information on race and ethnicity? If so, what classification is used?"
  },
  officialMaintenance: {
    officialMaintainer: "Multnomah County Health Department database",
    dataContributor: "Jacob Mestman",
    maintenanceInterval: "Unknown",
    lastOfficialMaintenance: "yyyy-mm-dd (Date)",
    typicalUpdates: "Long form explanation of typical updates"
  },
  rawData: {
    rawTitle:
      "Official Title of the MH&A Medicaid Client Data from the original source. Note that we need more info on this, where do raw data come from?",
    rawStableURI: "archival URL to incentivize providers",
    lang: "language",
    dateRangeStart: "1/1/2017",
    dataRangeEnd: "12/31/2017",
    notes:
      "notes about this resource - e.g. how was the data collected? in what form is the raw data?"
  },
  processedData: {
    droppedFields:
      "What are additional fields that accompany the Mental Health & Addiction Medicaid Clients Served that are not represented here?",
    addedFields:
      "What fields have been added to the Mental Health & Addiction Medicaid Clients Served data in the development of the normalized factor?",
    processOverview:
      "Explanation of steps taken to process, clear and sequential",
    processDescriber: "Who has provided the context on the processing steps",
    processSteps: [
      {
        stepNumber: "01",
        action: "Aggregate count of Medicaid clients served by census tract.",
        relatedResources: ["Multnomah County Census Tracts"],
        stepWho: "Multnomah County data analysts (Rachel Novick?)",
        stepExplanation:
          "This was done to get a count for the geographic area of each census tract."
      },
      {
        stepNumber: "02",
        action:
          "Convert the count of Medicaid clients served by census tract to a percentage of population in each census tract.",
        relatedResources: [
          "Multnomah County Census Tracts",
          "Multnomah County Census Tract Populations"
        ],
        stepWho: "Multnomah County data analysts (Rachel Novick?)",
        stepExplanation:
          "This was done to calculate the count of runaways as a percentage of census tract population."
      },
      {
        stepNumber: "03",
        action:
          "Normalize the percentage of population of Medicaid clients served in a census tract on a 0-10 scale for the dashboard.",
        relatedResources: ["Multnomah County Census Tracts"],
        stepWho: "Multnomah County data analysts (Rachel Novick?)",
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
      title: "Multnomah County Mental Health System Analysis",
      stableURI: "https://multco.us/file/74153/download",
      lang: "English",
      notes:
        "This document contains an analysis of Multnomah County's mental health system, that was conducted by the Human Services Research Institute (HSRI, https://www.hsri.org) in 2017 (report dated 2018). The document aimed to provide (i) an inventory of all mental health services offered by County and partners (including capacity for culturally specific services), (ii) a catalog of connections between all services in (i), (iii) a picture of funding and reimbursement flows, and (iv) identification of gaps between community need and existing mental health services. Along with a quantitative component and review of the system, part of the research involved qualitative interviews of 139 stakeholders (including people with lived experience of the mental health system), community listening sessions (159 individuals), as well as online feedback."
    }
  ],
  contextQuestions: [
    {
      Uncategorized: [
        {
          id: "01",
          contextualLayer: ["Institutional"],
          question:
            "Were community providers included as part of the count, as well as county providers? What types of in-house care for behavioral health does Multnomah County provide (e.g. Community Health Centers)?"
        },
        {
          id: "02",
          contextualLayer: [""],
          question:
            "Is there any linking of this dataset with other datasets; e.g. counts of Medicaid patients receiving both services with IDD and Behavioral Health?"
        },
        {
          id: "03",
          contextualLayer: [""],
          question:
            "What type(s) of care were included in this dataset? Was any type of crisis care part of this?"
        },
        {
          id: "04",
          contextualLayer: [""],
          question:
            "How do we understand this dataset relative to the general population (as it was normed to general population)? Are there differences in the type of care provided to Medicaid vs other insured population (for any reason)? What kinds of differences are observed?"
        },
        {
          id: "05",
          contextualLayer: [""],
          question:
            "How do we understand this dataset relative to mental health that is treated by physical health providers? Are there differences in the severity of diagnosis, type of treatment, etc?"
        },
        {
          id: "06",
          contextualLayer: [""],
          question:
            "The HSRI analysis identifies certain barriers to accessing mental health services; in particular, when substance use is cooccurring individuals who are seeking treatment may first need to access detoxification services. Do the services that are represented in this dataset count treatment for substance use? How?"
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
          contextualLayer: ["Historical"],
          question:
            "When defining stakeholders, do we include ALL parts of our society?  If we omit all segments, how is social justice being reflected?"
        },
        {
          id: "02",
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
          contextualLayer: ["Historical", "Institutional"],
          question:
            "Have you evaluated whether the data collection practices are positive or problematic? How are they positive/problematic?"
        },
        {
          id: "05",
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
