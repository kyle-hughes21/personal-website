+++
title = "About"
template = "about.html"
description = "Learn more about Kyle Hughes — Security Software Engineer / DevSecOps specialist with 10+ years experience in cloud-native security, Kubernetes, and infrastructure automation."

[extra]
location = "Boston, MA"
availability = "Open to opportunities"
timezone = "UTC-5 (EST)"
highlights = [
  "Reduced critical cloud misconfigurations by ~70% via policy-as-code (Kyverno, OPA, Checkov)",
  "Cut vulnerability remediation time by ~60% through centralized security automation",
  "Orchestrated zero-downtime EKS→AKS migration across 3 product lines",
  "Spearheaded AppSec program: Snyk (SAST/SCA/DAST) across 20+ products, 100s of CI/CD pipelines via centralized workflows",
  "Built AI enablement program: MCP security framework, training, communities of practice (50+ engineers)",
  "Led Security/Privacy/Compliance Steering Group coordinating Eng/Product/Exec initiatives",
  "Mentored 6+ engineers with 3 promotions; established Security Champions program",
  "Owned incident response: runbooks, tabletops, 24/7 on-call; led CrowdStrike pentest remediation",
  "Delivered board-ready security reporting; $100K+ tooling budget authority (Snyk, Falco, Lacework)",
  "CKA certified; containerized flagship VM product; multi-cloud IaC (AWS/Azure/GCP)"
]
values = [
  { icon = "shield", title = "Security First", description = "Default to secure. Threat model early. Automate compliance and policy-as-code." },
  { icon = "server", title = "Systems Thinking", description = "Design for failure. Full stack: metal to user. Infrastructure as code." },
  { icon = "book-open", title = "Continuous Learning", description = "CKA certified. Hands-on with Kubernetes, AI/ML security, cloud-native tech." },
  { icon = "code", title = "Automation & Tooling", description = "Maintainable, tested code. Developer self-service platforms. Eliminate toil." },
  { icon = "users", title = "Team Enablement", description = "Share knowledge. Coach on security. Build tools developers love." },
  { icon = "zap", title = "Pragmatic Delivery", description = "Ship iteratively. Measure impact. Cut scope, not corners. Production-grade from day one." },
  { icon = "users", title = "Technical Leadership", description = "Drive cross-functional programs. Mentor engineers. Translate risk for execs. Build security culture." }
]
+++

I'm a **Security Software Engineer / DevSecOps specialist** with 10+ years designing and automating cloud-native security platforms at scale across AWS and Azure. Focus: **infrastructure security, identity, Kubernetes, AI/ML security, DevSecOps automation, security tooling** (Python, Rust).

## Background

**Principal Software Engineer (Consultant)** @ **Imprivata** (Waltham, MA) — *Feb 2026 – Present*  
Leading AI enablement & governance across Engineering: MCP security framework, training programs, communities of practice (50+ engineers). Chairs Security/Privacy/Compliance Steering Group. Built containerized flagship VM product + multi-cloud IaC (AWS/Azure/GCP). Building JustPostgres Operator (PostgreSQL-as-a-platform).

**Senior DevSecOps Engineer** @ **Context Labs** (Cambridge, MA) — *Mar 2023 – Feb 2026*  
Led AppSec rollout (Snyk across 13 products, 3 product lines). Orchestrated zero-downtime EKS→AKS migration. Owned incident response & on-call. Standardized cloud-agnostic security controls.

**Senior DevOps Engineer** @ **Imprivata** — *Oct 2020 – Mar 2023*  
Built 50+ CI/CD pipelines with integrated security gates. Ansible roles for developer environments (still in use 2026). Python/Rust security tooling. IaC defenses for DDoS, XSS, supply chain.

*Earlier: SimpliSafe, Eaton Vance, Red Hat*

## Security Engineering Domains

| Domain | Highlights |
|--------|------------|
| **AppSec** | SAST/SCA/DAST at scale (Snyk, SonarQube); STRIDE threat modeling; SBOM/sigstore/SLSA; custom Python/Rust tooling; MCP framework for AI-assisted security |
| **ProdSec** | Vuln mgmt with SLAs (Crit 7d/High 30d); CrowdStrike pentest coordination; incident response/tabletops; HIPAA/SOC 2 automation |
| **DevSecOps** | 100s of pipelines via centralized security workflows; Kyverno/OPA + Checkov policy-as-code; Tailscale/SPIFFE zero-trust; DataDog/Grafana executive dashboards |

## Leadership & Team Impact

**Cross-Functional Programs** — Chaired Security Steering Group (Eng/Product/Legal/Exec). Led AppSec rollout across 20+ products/8+ teams. Orchestrated 6-month EKS→AKS migration with zero downtime.

**Developer Experience & Platform** — Launched org-wide AI enablement (MCP framework, 50+ engineers). Built Ansible workstation standardization (6 yrs active). Architected 100s of self-service CI/CD pipelines via centralized workflows. Python/Rust tooling cutting toil ~60%.

**Incident & Crisis** — Owned on-call operations: runbooks, severity defs, quarterly tabletops. Led Critical/High pentest remediation tracking to closure. War-room lead for zero-downtime migration cutover.

**Mentoring & Growth** — Mentored 6+ engineers (3 promotions L3→L5). Founded Security Champions program. Designed/delivered AI Bootcamp workshops (20+ engineers, CrewAI/LangGraph).

**Security Program Ownership** — Centralized vuln tracking with SLA automation. Kyverno/OPA admission controllers (~70% misconfig reduction). SOC 2/HIPAA continuous compliance (weeks→days audit prep).

**Executive Communication** — Board-ready quarterly risk reporting. $100K+ security tooling budget (eval, PoC, negotiation). STRIDE threat modeling with Product/Eng (40% late-finding reduction).

## Leadership Impact — By the Numbers

{% for highlight in page.extra.highlights %}
<div style="padding: var(--space-4); border-left: 3px solid var(--color-accent); background: var(--color-bg-elevated); margin-bottom: var(--space-3); border-radius: 0 var(--space-2) var(--space-2) 0;">
  {{ highlight | safe }}
</div>
{% endfor %}

## What I'm Looking For

Environments where **security is first-class**, **engineering quality = velocity**, **ownership = build/run/secure**, **learning is the job**.

Target roles: **Cloud-native security**, **Platform engineering**, **DevSecOps automation**, **AI/ML security** — Staff→EM track.

## Technical Expertise

| Domain | Technologies |
|--------|-------------|
| **Cloud & Infra** | AWS, Azure, GCP, Terraform, Terragrunt, Kubernetes (Helm, Istio, Kyverno, Operators) |
| **Security & Identity** | Okta, Entra ID, AWS IAM, Snyk, Falco, Lacework, Tailscale, WAF, Vault |
| **DevOps & Observability** | GitHub Actions, ArgoCD, Jenkins, DataDog, Prometheus, Grafana, OpenTelemetry |
| **Programming** | Python (FastAPI, AI/ML), Rust, Bash, TypeScript, C/C++ |
| **AI & Agentic** | Claude, CrewAI, LangGraph, LangChain, MCP, AI code/test/doc generation |

## Beyond Code

🏠 Homelab (k3s, Pi Home Assistant) · 📊 GPU observability (DCGM, Prometheus, Grafana) · 🤝 Mentoring early-career engineers

---

**Want to chat?** [Get in touch](/contact/) — always up for a good technical conversation about cloud security, Kubernetes, or infrastructure automation.
