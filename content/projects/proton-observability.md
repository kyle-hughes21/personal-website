+++
title = "Proton Observability"
date = 2024-03-15
description = "GPU monitoring and observability stack for NVIDIA GPUs with comprehensive metrics collection (DCGM), Prometheus storage, and Grafana visualization. Tracks gaming and compute workload performance in real-time."

[taxonomies]
tags = ["NVIDIA", "DCGM", "Prometheus", "Grafana", "GPU Monitoring", "Docker", "Gaming", "Observability"]

[extra]
github = "https://github.com/kyle-hughes21/proton-observability"
icon = "nvidia"
+++

Proton Observability is a purpose-built monitoring stack for NVIDIA GPU workloads — gaming, ML training, and compute. It collects granular GPU telemetry via DCGM Exporter, stores in Prometheus, and visualizes in pre-built Grafana dashboards.

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    NVIDIA GPU (RTX 30/40/50 series)          │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              DCGM (Data Center GPU Manager)          │   │
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌──────────┐  │   │
│  │  │ Clock   │ │ Temp    │ │ Power   │ │ Memory   │  │   │
│  │  │ Freqs   │ │ Sensors │ │ Draw    │ │ Util/BW  │  │   │
│  │  └─────────┘ └─────────┘ └─────────┘ └──────────┘  │   │
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌──────────┐  │   │
│  │  │ SM      │ │ NVLink  │ │ PCIe    │ │ ECC/     │  │   │
│  │  │ Occupancy│ │ Through │ │ Through │ │ Retired  │  │   │
│  │  └─────────┘ └─────────┘ └─────────┘ └──────────┘  │   │
│  └─────────────────────────────────────────────────────┘   │
└────────────────────────────┬────────────────────────────────┘
                             │ /metrics (Prometheus format)
                             ▼
┌─────────────────────────────────────────────────────────────┐
│              Docker Compose Stack                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │ DCGM Exporter│──▶│ Prometheus   │──▶│ Grafana          │  │
│  │ (nvidia/dcgm)│   │ (metrics TSDB)│   │ (dashboards)    │  │
│  │ Port 9400    │   │ Port 9090    │   │ Port 3000       │  │
│  └──────────────┘  └──────────────┘  └──────────────────┘  │
│         │                                       ▲           │
│         │           ┌──────────────┐            │           │
│         └──────────▶│ Alertmanager  │────────────┘           │
│                     │ (notifications)│                       │
│                     └──────────────┘                         │
└─────────────────────────────────────────────────────────────┘
```

## Key Metrics Collected

| Category | Metrics |
|----------|---------|
| **Utilization** | GPU %, Memory %, SM Occupancy, Encoder/Decoder % |
| **Thermal** | Core temp, Memory junction temp, Hotspot temp, Throttling |
| **Power** | Current draw (W), Power limit, Voltage, Energy (J) |
| **Clocks** | Graphics clock, Memory clock, SM clock, Video clock |
| **Memory** | Used/Free/Total, Bandwidth utilization, ECC errors |
| **Compute** | FP32/FP16/Tensor throughput, CUDA cores active |
| **Process-level** | Per-process GPU memory, SM utilization, PID tracking |

## Pre-built Dashboards

1. **GPU Overview** — Real-time utilization, temps, power, clocks
2. **Gaming Performance** — FPS correlation, frame times, GPU bound vs CPU bound
3. **ML Training** — Batch utilization, memory growth, gradient sync time
4. **Thermal Analysis** — Temp trends, throttling events, fan curves
5. **Process Explorer** — Top GPU processes, memory per app, kill buttons

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Metrics Collection** | NVIDIA DCGM Exporter (`nvidia/dcgm-exporter`) |
| **Time-series DB** | Prometheus (30d retention, 15s scrape) |
| **Visualization** | Grafana (provisioned dashboards, datasources) |
| **Alerting** | Alertmanager (Discord/Slack/Email webhooks) |
| **Container Runtime** | Docker Compose / Podman |
| **GPU Access** | NVIDIA Container Toolkit (CDI) |

## Deployment

```bash
# Quick start
git clone https://github.com/kyle-hughes21/proton-observability
cd proton-observability
docker compose up -d

# Access
# Grafana: http://localhost:3000 (admin/admin, change on first login)
# Prometheus: http://localhost:9090
# DCGM Metrics: http://localhost:9400/metrics
```

## Use Cases

- **Gaming Optimization** — Find bottlenecks, tune DLSS/FSR, monitor frame pacing
- **ML Training Monitoring** — Detect underutilization, OOM risks, gradient sync stalls
- **Thermal Management** — Custom fan curves, undervolting validation, throttling alerts
- **Multi-GPU Systems** — Per-GPU breakdown, NVLink utilization, load balancing
- **CI/CD Integration** — GPU job profiling in pipelines, performance regression detection

## Lessons Learned

1. **DCGM > nvidia-smi** — Persistent daemon, lower overhead, richer metrics, process-level
2. **Container toolkit is mandatory** — `--gpus all` + CDI for device injection
3. **Prometheus scrape interval matters** — 15s for gaming, 60s for ML (cardinality)
4. **Grafana provisioning** — Dashboard JSON in code, version-controlled, zero-click deploy
5. **Alert on derivatives** — `rate(gpu_temp[5m]) > 5` catches thermal runaway before throttle

## Status

**Functional but Needs Documentation** — Core stack works, dashboards need polish, alerting rules incomplete.

## Links

- **Source**: [github.com/kyle-hughes21/proton-observability](https://github.com/kyle-hughes21/proton-observability)
- **Docker Compose**: *coming soon*
- **Grafana Dashboards**: *coming soon*
- **DCGM Exporter Config**: *coming soon*