+++
title = "Always-Free-Cloud"
date = 2024-01-15
description = "Multi-cloud infrastructure leveraging Oracle Cloud Always Free tier, Grafana Cloud, Cloudflare, and Tailscale to deploy professional-grade Kubernetes applications with zero public IP exposure."

[taxonomies]
tags = ["Kubernetes", "Terraform", "OpenTofu", "Grafana", "Cloudflare", "Tailscale", "Homelab"]

[extra]
github = "https://github.com/kyle-hughes21/always-free-cloud"
icon = "kubernetes"
+++

Always-Free-Cloud is a production-grade personal infrastructure project that provisions a complete Kubernetes platform using only free cloud tiers. It demonstrates how to build enterprise-quality infrastructure without monthly costs.

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Oracle Cloud (Always Free)               │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              k3s Cluster (4 vCPU, 24GB RAM)         │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────────────┐  │   │
│  │  │ Homer    │  │ Code     │  │ Calibre, etc.    │  │   │
│  │  │ Dashboard│  │ Server   │  │ Pre-configured   │  │   │
│  │  └──────────┘  └──────────┘  └──────────────────┘  │   │
│  └─────────────────────────────────────────────────────┘   │
└────────────────────────────┬────────────────────────────────┘
                             │ Tailscale Mesh
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                    Cloudflare Tunnel                        │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Zero public IPs • DDoS Protection • CDN • DNS     │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                    Grafana Cloud (Free Tier)                │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Prometheus Metrics • Loki Logs • Tempo Traces     │   │
│  │  Professional Dashboards • Alerting                │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## Key Features

- **Zero Public IPs** — All access via Cloudflare Tunnel + Tailscale mesh
- **Professional Monitoring** — Grafana Cloud free tier for metrics, logs, traces
- **GitOps Deployment** — ArgoCD for continuous deployment
- **Infrastructure as Code** — OpenTofu/Terraform for all cloud resources
- **Pre-configured Applications** — Homer dashboard, Code Server, Calibre, and more
- **Automated Backups** — Scheduled etcd and application backups

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Orchestration** | k3s (lightweight Kubernetes) |
| **IaC** | OpenTofu / Terraform |
| **Networking** | Cloudflare Tunnels, Tailscale |
| **Monitoring** | Grafana Cloud (Prometheus, Loki, Tempo) |
| **GitOps** | ArgoCD |
| **Security** | Zero-trust network, no public endpoints |

## Lessons Learned

> Building on free tiers forces architectural discipline. Every resource counts, every public endpoint is a risk. This project taught me more about Kubernetes networking and cloud economics than any certification.

1. **k3s > EKS/GKE for personal use** — Single binary, no control plane costs, runs on 4 vCPU
2. **Cloudflare Tunnels are game-changing** — No port forwarding, no public IPs, built-in DDoS/WAF
3. **Grafana Cloud free tier is generous** — 10k metrics, 50GB logs, 50GB traces — enough for homelab
4. **Tailscale replaces VPNs entirely** — Mesh networking, ACLs, subnet routers, exit nodes
5. **Document everything** — `make` targets for common ops, runbooks for incidents

## Status

**Active Development** — Continuously adding new applications and improving automation.

## Links

- **Source**: [github.com/kyle-hughes21/always-free-cloud](https://github.com/kyle-hughes21/always-free-cloud)
- **Live Demo**: *coming soon* (via Cloudflare Tunnel)
- **Architecture Docs**: *coming soon*