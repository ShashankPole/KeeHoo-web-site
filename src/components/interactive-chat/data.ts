import { BarChart3, Zap, Network, TrendingUp } from "lucide-react"
import type { Channel } from "./types"

export const iconComponents = {
  BarChart3,
  Zap,
  Network,
  TrendingUp,
}

export const channels: Channel[] = [
  {
    icon: "BarChart3",
    name: "Real-Time Analytics",
    subtitle: "See how we deliver instant insights",
    question: "How can you help with real-time analytics?",
    response: `**Real-Time Analytics Platform**

We built a unified analytics platform for TechCorp that processes 50M+ events per day. Our data engineering solution provides real-time dashboards with sub-second latency, enabling C-suite executives to make instant data-driven decisions.

The platform consolidates data from 50+ sources and delivers actionable insights through intuitive dashboards. Key features include anomaly detection, predictive alerts, and customizable KPI tracking.

**Impact:** 85% faster decision-making, 360° business visibility, $10M revenue optimization through instant insights.`,
  },
  {
    icon: "Zap",
    name: "Process Automation",
    subtitle: "Automate workflows with AI precision",
    question: "Tell me about process automation capabilities",
    response: `**Intelligent Process Automation**

For FinanceHub, we automated 92% of manual workflows using AI-powered decision engines. Our solution reduced processing time from 72 hours to 45 minutes while maintaining 99.8% accuracy across compliance, approvals, and data validation.

The system intelligently routes requests, automatically validates documents, and integrates seamlessly with existing enterprise tools. It handles complex multi-step processes while maintaining full audit trails.

**Impact:** $18M operational savings, 96x faster processing, 99.8% accuracy rate.`,
  },
  {
    icon: "Network",
    name: "Data Orchestration",
    subtitle: "Coordinate 200+ pipelines seamlessly",
    question: "What orchestration solutions do you provide?",
    response: `**Enterprise Data Orchestration**

We designed a comprehensive orchestration platform for GlobalRetail that seamlessly coordinates 200+ data pipelines across cloud and on-premise systems. Our solution ensures data flows reliably with automated error handling, monitoring, and self-healing capabilities.

The platform provides end-to-end visibility into data lineage, dependency management, and real-time pipeline monitoring. It automatically scales based on workload and recovers from failures without manual intervention.

**Impact:** 99.97% pipeline reliability, 40% reduction in data latency, zero manual interventions.`,
  },
  {
    icon: "TrendingUp",
    name: "Predictive Analytics",
    subtitle: "Forecast with 94% accuracy",
    question: "Show me predictive analytics examples",
    response: `**Predictive Analytics & Forecasting**

For MediaCo, we developed ML models that predict customer behavior, demand patterns, and revenue trends with 94% accuracy. Our analytics platform processes historical data, real-time signals, and market trends to generate actionable forecasts.

The models continuously learn and adapt, incorporating new data patterns and external market factors. They provide both aggregate forecasts and individual customer-level predictions with confidence intervals.

**Impact:** 34% reduction in customer churn, $15M revenue optimization, 94% prediction accuracy.`,
  },
]
