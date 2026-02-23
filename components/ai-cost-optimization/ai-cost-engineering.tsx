import {
  Terminal,
  GitBranch,
  Users,
  BarChart3,
  ExternalLink,
  Sparkles,
  Copy,
  CheckCircle2,
} from "lucide-react"

const FEATURES = [
  {
    icon: Users,
    title: "Team-Level Cost Allocation",
    description:
      "Automatically attribute AI spend to engineering teams, services, and cost centers. No manual tagging required — PointFive maps cloud resources to ownership using your existing infrastructure topology.",
  },
  {
    icon: BarChart3,
    title: "Engineering Dashboards",
    description:
      "Give every team lead a real-time view of their AI cost footprint. Track spend trends, set budgets, and compare cost-per-feature across services — all without waiting for a monthly finance report.",
  },
  {
    icon: Terminal,
    title: "IDE-Native Remediation",
    description:
      "PointFive MCP brings cost intelligence directly into agentic IDEs like Cursor and Windsurf. Engineers discover savings, validate impact, and generate IaC-aligned fixes without leaving their workflow.",
  },
  {
    icon: GitBranch,
    title: "Workflow Integration",
    description:
      "Push optimization tasks to Jira, ServiceNow, or Slack. Every recommendation comes with full context — resource dependencies, blast radius, and projected savings — so engineers can act confidently.",
  },
]

/* ── Simulated Jira ticket data ─────────────────────────────────────── */

const jiraTicket = {
  project: "CLOUD",
  issueType: "Task",
  summary: "Enable auto-scaling for SageMaker endpoint",
  priority: "High",
  assignee: "Sarah Chen",
  team: "ML Platform",
  labels: ["cost-optimization", "sagemaker", "auto-scaling"],
  fields: [
    { label: "Resource", value: "voyage-multilingual-2-embedding" },
    { label: "Current Cost", value: "$2,534.40/mo" },
    { label: "Projected Savings", value: "$1,700/mo", highlight: true },
    { label: "Blast Radius", value: "Low — no downstream dependencies" },
  ],
}

/* ── Simulated AI remediation data ──────────────────────────────────── */

const remediation = {
  opportunity: "Enable auto-scaling on SageMaker endpoint",
  model: "voyage-multilingual-2-embedding-model-endpoint",
  targets: [
    { name: "Cursor", icon: "▸" },
    { name: "GitHub Copilot", icon: "◆" },
    { name: "Windsurf", icon: "◇" },
  ],
  prompt: `# Auto-scaling for SageMaker Endpoint
resource "aws_sagemaker_endpoint_configuration" "voyage" {
  # Add auto-scaling policy
  scaling_config {
    min_capacity     = 0
    max_capacity     = 4
    target_value     = 70.0
    scale_in_cooldown  = 300
    scale_out_cooldown = 60
  }

  # Schedule: scale down off-hours
  schedule {
    cron       = "0 18 * * MON-FRI"
    min_capacity = 0
  }
}`,
  validations: [
    { label: "Terraform plan", status: "ready" },
    { label: "Cost projection", status: "ready" },
    { label: "Rollback plan", status: "ready" },
  ],
}

export function AiCostEngineering() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-primary">
            Built for Engineering Teams
          </p>
          <h2
            className="mt-3 text-foreground"
            style={{
              fontSize: "clamp(28px, 3.5vw, 42px)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              fontWeight: 700,
            }}
          >
            AI Cost Optimization That Lives in the Engineering Workflow
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral-500">
            Cost mandates from finance don&apos;t work. PointFive embeds AI cost
            optimization into the tools and workflows engineers already use — so
            efficiency becomes a natural part of shipping, not an afterthought.
          </p>
        </div>

        {/* Custom visual panels — Jira + AI Remediation */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* Panel 1: Jira Integration */}
          <div className="overflow-hidden rounded-lg border border-border bg-white shadow-lg">
            <div className="flex items-center justify-between border-b border-[#e2e6ed] bg-[#f9fafc] px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded bg-[#0052CC] text-[9px] font-bold text-white">
                  J
                </span>
                <span className="text-[12px] font-semibold text-[#1a1d2e]">
                  Create Jira Ticket
                </span>
              </div>
              <ExternalLink className="h-3 w-3 text-neutral-400" />
            </div>
            <div className="p-4">
              {/* Ticket header */}
              <div className="flex items-center gap-2">
                <span className="rounded bg-[#0052CC]/10 px-1.5 py-0.5 font-mono text-[9px] font-bold text-[#0052CC]">
                  {jiraTicket.project}
                </span>
                <span className="rounded bg-[#de350b]/10 px-1.5 py-0.5 text-[9px] font-bold text-[#de350b]">
                  {jiraTicket.priority}
                </span>
                <span className="rounded bg-neutral-100 px-1.5 py-0.5 text-[9px] font-medium text-neutral-500">
                  {jiraTicket.issueType}
                </span>
              </div>
              <p className="mt-2 text-[12px] font-semibold text-[#1a1d2e]">
                {jiraTicket.summary}
              </p>
              <div className="mt-1.5 flex items-center gap-2 text-[10px] text-neutral-400">
                <span>Assignee: {jiraTicket.assignee}</span>
                <span>·</span>
                <span>Team: {jiraTicket.team}</span>
              </div>

              {/* Labels */}
              <div className="mt-3 flex flex-wrap gap-1">
                {jiraTicket.labels.map((label) => (
                  <span
                    key={label}
                    className="rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-medium text-primary"
                  >
                    {label}
                  </span>
                ))}
              </div>

              {/* Context fields */}
              <div className="mt-4 space-y-2 rounded border border-[#f2f4f8] bg-[#f9fafc] p-3">
                <p className="text-[9px] font-bold uppercase tracking-wide text-neutral-400">
                  PointFive Context
                </p>
                {jiraTicket.fields.map((field) => (
                  <div
                    key={field.label}
                    className="flex items-center justify-between"
                  >
                    <span className="text-[10px] text-neutral-400">
                      {field.label}
                    </span>
                    <span
                      className={`text-[11px] font-medium ${
                        field.highlight
                          ? "font-mono font-bold text-[#00a82d]"
                          : "text-[#1a1d2e]"
                      }`}
                    >
                      {field.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action */}
              <div className="mt-3 flex items-center justify-between rounded bg-[#0052CC]/5 px-3 py-2">
                <span className="text-[10px] font-semibold text-[#0052CC]">
                  Ready to create in Jira
                </span>
                <span className="rounded bg-[#0052CC] px-2 py-0.5 text-[9px] font-bold text-white">
                  Create Ticket →
                </span>
              </div>
            </div>
          </div>

          {/* Panel 2: AI-Powered Remediation */}
          <div className="overflow-hidden rounded-lg border border-border bg-white shadow-lg">
            <div className="flex items-center justify-between border-b border-[#e2e6ed] bg-[#f9fafc] px-4 py-3">
              <div className="flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span className="text-[12px] font-semibold text-[#1a1d2e]">
                  AI-Powered Remediation
                </span>
              </div>
              <span className="rounded-full bg-[#00E639]/10 px-2 py-0.5 font-mono text-[9px] font-medium text-[#00a82d]">
                IaC-Aligned
              </span>
            </div>
            <div className="p-4">
              {/* Opportunity header */}
              <p className="text-[11px] font-semibold text-[#1a1d2e]">
                {remediation.opportunity}
              </p>
              <p className="mt-0.5 truncate font-mono text-[9px] text-primary">
                {remediation.model}
              </p>

              {/* IDE targets */}
              <div className="mt-3 flex items-center gap-2">
                <span className="text-[9px] font-medium text-neutral-400">
                  Fix in:
                </span>
                {remediation.targets.map((t) => (
                  <span
                    key={t.name}
                    className="flex items-center gap-1 rounded border border-border px-2 py-0.5 text-[10px] font-medium text-[#1a1d2e] transition-colors hover:border-primary/30 hover:bg-primary/5"
                  >
                    <span className="text-primary">{t.icon}</span> {t.name}
                  </span>
                ))}
              </div>

              {/* Code block */}
              <div className="mt-3 overflow-hidden rounded border border-[#e2e6ed]">
                <div className="flex items-center justify-between bg-[#1a1d2e] px-3 py-1.5">
                  <span className="font-mono text-[9px] text-neutral-400">
                    terraform / sagemaker-autoscaling.tf
                  </span>
                  <Copy className="h-3 w-3 text-neutral-500" />
                </div>
                <pre className="overflow-hidden bg-[#0f111a] p-3 font-mono text-[9px] leading-relaxed text-[#a9b7c6]">
                  <code>
                    {remediation.prompt.split("\n").slice(0, 10).join("\n")}
                    {"\n  ..."}
                  </code>
                </pre>
              </div>

              {/* Validation checks */}
              <div className="mt-3 space-y-1.5">
                {remediation.validations.map((v) => (
                  <div
                    key={v.label}
                    className="flex items-center gap-2 text-[10px]"
                  >
                    <CheckCircle2 className="h-3 w-3 text-[#00a82d]" />
                    <span className="text-[#1a1d2e]">{v.label}</span>
                    <span className="ml-auto rounded-full bg-[#00E639]/10 px-1.5 py-0.5 text-[8px] font-medium text-[#00a82d]">
                      {v.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-sm border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm bg-primary/10">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{f.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-neutral-500">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
