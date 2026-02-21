const TICKER_ITEMS = [
  "EC2 Rightsizing",
  "NAT Gateway Optimization",
  "K8s Workload Efficiency",
  "RDS Snapshot Lifecycle",
  "EBS Volume Optimization",
  "Azure Disk Types",
  "S3 Storage Classes",
  "MSK Cluster Optimization",
  "OpenSearch Serverless Migration",
  "GCP Logging Architecture",
  "Snowflake Warehouse Tuning",
  "ECS Fargate Rightsizing",
  "CloudTrail Deduplication",
  "Azure SQL DTU Optimization",
  "Lambda Memory Allocation",
  "DynamoDB Capacity Modes",
]

export function DeepWasteTicker() {
  return (
    <div className="ticker-section">
      <div className="ticker-track">
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((label, i) => (
          <span key={i} className="ticker-item">
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
