/**
 * Product page image URLs from pointfive.co/product.
 * Keep these URLs so when you publish, assets can be rebuilt in place.
 */
const CDN = "https://cdn.prod.website-files.com/664c5d9fee3e617bc2829b44"

export const productImages = {
  // Cloud Observability
  agentlessIntegration:
    `${CDN}/666080dd755789017d600420_Seamless%2C%20agentless%20integration%20enables%20continuous%20cloud%20and%20K8s%20monitoring%20and%20analysis.svg`,
  deepwasteDetection:
    `${CDN}/666080df040647a77b41c36f_AdvancedDeepWaste%E2%84%A2%20Detection%20%26%20Monitoring%20reveals%20unseen%20optimization%20opportunities.svg`,
  richContextualization:
    `${CDN}/666081c7747443a17988f6c5_Rich%20contextualization%20extends.svg`,

  // Usage Optimization
  actionReady: `${CDN}/6660825413235b0a2f00af67_Action-ready%20recommendations.svg`,
  stepByStepRemediation: `${CDN}/6660825478fef525d0782b7c_Step-by-step%20remediation.svg`,
  frictionlessAutomation: `${CDN}/666082547e7306534e172f2b_Frictionless%20automation.svg`,

  // Unified Data Fabric
  oneScreenClarity: `${CDN}/6834ea3a20cdc8deca1eaf00_02_One%E2%80%91Screen%20Clarity.svg`,
  contextualWaste: `${CDN}/6834ea3a8e6407cfd18d4d99_01_Contextual%20Waste.svg`,
  dataFabricGif: `${CDN}/688b858ab34dd0f8a9009ec7_0378be2848dcdc30e48fa8c29e2afb6b_FINAl-DX-small2-min.gif`,

  // Rate Optimization
  consolidateCommitments: `${CDN}/666082f0b09a26aa5746ea5c_Consolidate%20all%20cloud%20commitment.svg`,
  trackSavings: `${CDN}/666082f0755789017d61fc31_Track%20and%20optimize%20your%20effective%20savings.svg`,
  realTimeAlerts: `${CDN}/666082f0d3947060969df070_Get%20real-time%20alerts%20and%20recommendations.svg`,

  // Anomaly Detection
  detailedCostAnalysis: `${CDN}/67238eefd1a42e01ea538a2d_Detailed%20Cost%20and%20Usage%20Analysis.svg`,
  proactiveDetection: `${CDN}/6834ea3ad7daa38c34a6ba59_01_Proactive%20Detection.svg`,
  detailedReporting: `${CDN}/67238dab29f831bca601c133_Provide%20detailed%20reporting.svg`,

  // Analytics
  customCharts: `${CDN}/66e2c9d8690aaabdfc5948bf_Build%20custom%20charts%20and%20dashboards.svg`,
  reviewMetrics: `${CDN}/6660842bc596fe76678651c0_Review%20and%20share%20any%20possible%20key%20metrics.svg`,

  // Kubernetes
  k8sSolution: `${CDN}/66e2c43788bdef65e824b4b5_PointFive-%20Kubernetes%20Observability%20%26%20Optimization%20Solution%20visual.svg`,

  // Nurture section + capability cards
  nurtureTeam: `${CDN}/6666bca8e3f8d71eeaa17d42_Nurture%20a%20healthier%20cloud%20and%20a%20happier%20team.svg`,
  seamlessIntegration: `${CDN}/666086086bb6933639635b92_Seamless%20Integration.svg`,
  deepwasteCard: `${CDN}/666ac0a456ab1309817d67bf_DeepWaste%E2%84%A2%20Detection%20%26%20Monitoring.svg`,
  crossTeamCollab: `${CDN}/666ac0af7816a55af091db69_Cross-Team%20Collaboration%C2%A0.svg`,
  effortlessRemediation: `${CDN}/666ac0c0c88c72a0eec3754a_Effortless%20Remediation%C2%A0.svg`,
  customizedAnalytics: `${CDN}/666ac0e3a35487b9d566d66d_Customized%20Analytics.svg`,
  workflowEnablement: `${CDN}/666ac0f0e6a5e1e64d633e86_Workflow%20Enablement.svg`,
  rateOptimizationCard: `${CDN}/666ac105e196a00dde8e92b9_Rate%20Optimization%C2%A0.svg`,
  richContextualizationCard: `${CDN}/666ac1128d0f26a830b9792f_Rich%20Contextualization%C2%A0.svg`,

  // Enterprise
  enterpriseReady: `${CDN}/666087251c8a56bbb96091ec_We%27re%20Enterprise-Ready.svg`,
} as const

/**
 * Lottie animation JSON URLs from pointfive.co/product.
 * These are used in Lottie players, not <img>.
 */
export const productLottie = {
  productLine: `${CDN}/666abef5e4d9af43cd43ac80_Product%20line.json`,
  deepwasteDetection: `${CDN}/666ab76d92fffcac60735a6a_DeepWaste%20Detection.json`,
  actionRead: `${CDN}/666ab7bb5fb49b2a94597186_Action-Read.json`,
  commitments: `${CDN}/666ab7bb3e5d60148d27953c_Commitments.json`,
  contextRichInsights: `${CDN}/666ab79b80d6eafb600960a8_Context-Rich%20Insights.json`,
  pointfiveCta: `${CDN}/666ab8795fb49b2a945a35f4_PointFive%20CTA.json`,
} as const
