+++
title = "About"
template = "about.html"
description = "Learn more about Kyle Hughes — Security Software Engineer / DevSecOps specialist with 8+ years experience in cloud-native security, Kubernetes, and infrastructure automation."

[extra]
location = "Boston, MA"
availability = "Open to opportunities"
timezone = "UTC-5 (EST)"
highlights = [
  "Reduced critical cloud misconfigurations by ~70% through automated security controls and policy-as-code enforcement (Kyverno, OPA, Checkov)",
  "Cut vulnerability remediation time by ~60% via centralized security automation platforms and developer self-service tooling",
  "Orchestrated cloud migration from AWS (EKS) to Azure (AKS) with zero-downtime deployment",
  "Spearheaded AppSec program implementing Snyk (SCA/SAST) across 13 products with automated CI/CD integration",
  "Built CI/CD infrastructure across 50+ pipelines with integrated security scanning and containerization",
  "Engineered security tooling in Python/Rust automating operational tasks and eliminating vulnerability classes",
  "Designed IaC security controls defending production workloads from DDoS, XSS, supply chain attacks (AWS WAF, Shield)",
  "Conducted threat modeling embedding security into design; coached teams on automated security testing",
  "Coordinated penetration testing with CrowdStrike; led remediation of Infrastructure and Services findings",
  "Implemented multi-account AWS identity management with AWS SSM, eliminating SSH key sprawl across 15 accounts",
  "Certified Kubernetes Administrator (CKA) — Cloud Native Computing Foundation",
  "Established VPN infrastructure (Tailscale/WireGuard) with RBAC supporting Data and AI engineering",
  "Designed MCP security framework for governed AI-assisted development (Claude, CrewAI, LangGraph)",
  "Built AI enablement programs: training, playbooks, communities of practice for agentic coding",
  "Containerized flagship VM product; built multi-cloud IaC (AWS, Azure, GCP) for VM provisioning at Imprivata",
  "Built Ansible roles for developer environments still in active use at Imprivata (2020-2026)",
  "Building JustPostgres Operator: PostgreSQL-as-a-platform replacing Redis, Elasticsearch, MongoDB, Kafka with native extensions"
]
values = [
  { icon = "shield", title = "Security First", description = "Default to secure. Threat model early. Automate compliance and policy-as-code." },
  { icon = "server", title = "Systems Thinking", description = "Design for failure. Understand the full stack from metal to user. Infrastructure as code." },
  { icon = "book-open", title = "Continuous Learning", description = "Stay curious. CKA certified. Hands-on with Kubernetes, AI/ML security, cloud-native technologies." },
  { icon = "code", title = "Automation & Tooling", description = "Write maintainable, tested code. Build developer self-service platforms. Eliminate toil." },
  { icon = "users", title = "Team Enablement", description = "Share knowledge. Coach teams on security practices. Build tools developers love to use." },
  { icon = "zap", title = "Pragmatic Delivery", description = "Ship iteratively. Measure impact. Cut scope, not corners. Production-grade from day one." }
]
+++

I'm a **Security Software Engineer / DevSecOps specialist** with 8+ years of experience designing and automating cloud-native security platforms at scale across AWS and Azure. My focus is on **infrastructure security, identity systems, Kubernetes security, AI/ML security, DevSecOps automation, and security tooling** written in Python and Rust.

## Background

I've spent my career securing production workloads at companies handling sensitive data — from healthcare (Imprivata, HIPAA/PHI) to home security (SimpliSafe) to financial services (Eaton Vance) and AI/ML platforms (Context Labs).

**Current Role**: **Principal Software Engineer (Consultant)** at **Imprivata** (Waltham, MA) — *February 2026 – Present*

Leading AI enablement across Engineering and building secure, governed AI-assisted development practices:

- **AI Enablement & Governance** — Scaling adoption of AI-assisted development tools (Claude, CrewAI, LangGraph) with defined guardrails, approved usage patterns, and operating standards. Designed and implemented an **MCP (Model Context Protocol) security framework** establishing safe, governed AI-assisted development practices across engineering teams.
- **Training & Enablement** — Built training programs, playbooks, and communities of practice for AI coding assistants, agentic code generation, AI code review, AI test generation, and AI documentation generation.
- **Security Leadership** — Lead the Security, Privacy, and Compliance Engineering Steering Group, coordinating cross-functional initiatives across Engineering, Product, and executive stakeholders.
- **Agentic AI in Production** — Vibe-coded a **Threat Model Generator with CrewAI and LangGraph** during internal AI Bootcamp, demonstrating AI agent capabilities now adopted internally for automated threat assessments.
- **Platform Modernization** — Designed and built a **containerized version of the flagship VM product**, improving release execution and deployment consistency. Built **multi-cloud Infrastructure as Code (AWS, Azure, GCP)** to deploy VMs for internal and customer use, standardizing tooling across teams.
- **JustPostgres Operator** — Building a Kubernetes operator that makes PostgreSQL your entire backend, replacing Redis, Elasticsearch, MongoDB, Kafka, and more with native extensions (`pg_redis`, `pg_search`, `FerretDB`, `TimescaleDB`, `pgmq`, `pgvector`, `pgvector`). Demonstrates deep Kubernetes operator patterns: CRD conversion webhooks, multi-controller coordination, custom metrics HPA, Patroni HA, WAL-G backup, PgBouncer pooling.

**Previous Role**: Senior DevSecOps Engineer at **Context Labs** (Cambridge, MA) — *March 2023 – February 2026*

- Led cross-functional AppSec initiatives, driving adoption of container scanning and SCA/SAST integration at scale across three product lines
- Standardized security controls for cloud-agnostic infrastructure, defining approved patterns for access control and cryptographic standards
- Partnered with engineering teams on threat modeling for new applications, embedding security best practices early in the SDLC
- Owned on-call engineering operations for incident response and forensic investigations

**Imprivata** (Senior DevOps Engineer) — *October 2020 – March 2023*

- Designed and standardized CI/CD pipelines integrating automated security scanning across cloud and application workloads
- Built **Ansible roles to standardize developer environment setups** across Engineering — still in active use as of 2026
- Developed internal DevOps tooling in **Python and Rust** to automate repetitive workflows
- Led adoption of automated security checks across development pipelines; built enablement materials guiding multiple teams
- Designed data analytics infrastructure in Python to standardize data flows and reporting across multiple lines of business
- Built security tooling into IaC defending production workloads from DDoS, XSS, and supply chain attacks

**Earlier Roles**: SimpliSafe (DevOps Engineer), Eaton Vance (DevOps Integration Specialist), Red Hat (Systems Administrator)

## Security Engineering Domains

### Application Security (AppSec)
- **SAST/SCA at Scale** — Deployed Snyk across 13 products with automated CI/CD integration; integrated SonarQube for code quality gates
- **Threat Modeling** — Facilitated STRIDE-based threat modeling sessions for new features; embedded security into design phase
- **Supply Chain Security** — SBOM generation (Syft), artifact signing (cosign/sigstore), SLSA compliance for container images
- **Security Tooling** — Built custom Python/Rust tools for vulnerability correlation, license compliance, secret detection
- **AI-Assisted Security** — Designed MCP security framework for governed AI-assisted development (Claude, CrewAI, LangGraph)

### Product Security (ProdSec)
- **Vulnerability Management** — Centralized vulnerability tracking, SLA-based remediation, executive reporting dashboards
- **Penetration Testing** — Coordinated annual pentests with CrowdStrike; managed remediation across Infrastructure and Services
- **Incident Response** — Tabletop exercises, runbook development, 24/7 on-call rotation for security events
- **Compliance** — HIPAA/PHI controls for healthcare (Imprivata); SOC 2 evidence collection automation

### DevSecOps Automation
- **CI/CD Security Gates** — 50+ pipelines with integrated SAST, SCA, container scanning, Helm chart validation
- **Policy-as-Code** — Kyverno/OPA for Kubernetes admission control; Checkov/Terraform for IaC scanning in PRs
- **Zero-Trust Infrastructure** — Tailscale mesh VPN with ACLs; workload identity via SPIFFE/SPIRE; least-privilege IAM
- **Executive Reporting** — Automated security posture dashboards (DataDog, Grafana); board-ready risk metrics

## What I'm Looking For

I thrive in environments where:
- **Security is a first-class concern** — not an afterthought
- **Engineering quality** is valued alongside velocity
- **Ownership** means you build it, you run it, you secure it
- **Learning** is part of the job — CKA certified, currently exploring AI/ML security (Kubeflow, LangChain, NVIDIA GPU Operator)

I'm particularly excited about roles involving:
- **Cloud-native security** — Kubernetes, IAM, zero-trust, policy-as-code (Kyverno, OPA)
- **Platform engineering** — building secure developer platforms and self-service tooling
- **DevSecOps automation** — CI/CD security gates, vulnerability management, compliance automation
- **AI/ML Security** — securing ML pipelines, GPU workloads, model deployment; MCP frameworks for governed AI

## Technical Expertise

| Domain | Technologies |
|--------|-------------|
| **Cloud & Infrastructure** | AWS (VPC, IAM, EKS, RDS, S3, Security Hub), Azure (Entra ID, AKS, Virtual Network), GCP (VM deployment, IaC), Terraform, Terragrunt, Kubernetes (Helm, Istio, Kyverno, Operators) |
| **Security & Identity** | Okta, Entra ID, AWS IAM, Snyk, Falco, Lacework, Tailscale, WAF, Shield, OWASP ZAP, HashiCorp Vault |
| **DevOps & Observability** | Git, GitHub Actions, ArgoCD, Jenkins, Azure Pipelines, DataDog, Prometheus, Grafana, OpenTelemetry, Fluent Bit, CloudTrail |
| **Programming** | Python (FastAPI, automation, AI/ML), Rust, Bash, TypeScript (Node.js, Vue), C/C++ |
| **AI & Agentic Systems** | Claude, CrewAI, LangGraph, LangChain, MCP (Model Context Protocol), AI code generation, AI test generation, AI documentation |

## Beyond Code

When I'm not at a keyboard, you'll find me:
- 🏠 Building production-grade homelab infrastructure (k3s on Oracle Always Free, Raspberry Pi 5 Home Assistant)
- 🐧 Optimizing Linux workstations for gaming + development (NVIDIA hybrid graphics, Proton)
- 📊 GPU observability with DCGM, Prometheus, Grafana
- 🎮 Gaming on Linux (Steam Deck, Proton, emulation)
- 🤝 Mentoring early-career engineers

---

**Want to chat?** [Get in touch](/contact/) — I'm always up for a good technical conversation about cloud security, Kubernetes, or infrastructure automation.