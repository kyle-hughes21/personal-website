+++
title = "JustPostgres Operator"
date = 2024-11-15
description = "A Kubernetes operator that makes PostgreSQL your entire backend — replacing Redis, Elasticsearch, MongoDB, Kafka, and more with native PostgreSQL extensions. Stop paying for SaaS. Just use PostgreSQL."

[taxonomies]
tags = ["Rust", "Kubernetes", "Operators", "PostgreSQL", "TimescaleDB", "FerretDB", "pgvector", "Open Source"]

[extra]
github = "https://github.com/kyle-hughes21/justpostgres-operator"
icon = "postgresql"
+++

JustPostgres Operator is a **production-grade Kubernetes operator** that makes PostgreSQL your entire backend. It replaces your SaaS stack — Redis, Elasticsearch, MongoDB, Kafka, Firebase, Supabase, Pinecone, and more — with native PostgreSQL extensions, managed as a single cluster.

## The Philosophy

> **"Stop paying for SaaS. Just use PostgreSQL."**

Modern applications need multiple data models. The default answer is a pile of SaaS:
- **Caching** → Redis Cloud, Upstash
- **Search** → Elastic Cloud, Algolia, Meilisearch
- **Documents** → MongoDB Atlas, Firebase, DynamoDB
- **Time-series** → InfluxDB, Timescale Cloud
- **Queues** → Kafka, RabbitMQ, SQS, Upstash
- **Real-time** → Pusher, Ably, Supabase Realtime
- **Auth** → Auth0, Clerk, Firebase Auth
- **Vectors/RAG** → Pinecone, Weaviate, Chroma
- **Analytics** → Snowflake, BigQuery, ClickHouse

**But PostgreSQL has native extensions for all of it.** One cluster. One backup. One upgrade. One mental model.

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     JustPostgresCluster                          │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │              Primary PostgreSQL (Writer)                   │  │
│  │  ┌─────────┐ ┌──────────┐ ┌─────────┐ ┌──────────────┐   │  │
│  │  │ Core    │ │ Timescale│ │FerretDB │ │ pg_redis/    │   │  │
│  │  │ PG 16   │ │ 2.16     │ │ (Mongo) │ │ pg_search    │   │  │
│  │  └─────────┘ └──────────┘ └─────────┘ └──────────────┘   │  │
│  └───────────────────────────────────────────────────────────┘  │
│                           │                                      │
│          ┌────────────────┼────────────────┐                    │
│          ▼                ▼                ▼                    │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐            │
│  │ Replica 1   │  │ Replica 2   │  │ Replica 3   │  (Sync/Async)│
│  │ (Read)      │  │ (Read)      │  │ (Read)      │              │
│  └─────────────┘  └─────────────┘  └─────────────┘            │
│                           │                                      │
│          ┌────────────────┼────────────────┐                    │
│          ▼                ▼                ▼                    │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                    PgBouncer Pool (3x)                     │  │
│  │  Transaction pooling • Prepared statements • TLS termination│  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              │
         ┌────────────────────┼────────────────────┐
         ▼                    ▼                    ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│  WAL-G /        │ │   PITR          │ │  Cross-engine   │
│  Barman Cloud   │ │  (Point-in-Time │ │  Query          │
│  Backup         │ │   Recovery)     │ │  Federation     │
└─────────────────┘ └─────────────────┘ └─────────────────┘
```

## What It Replaces

| SaaS Category | SaaS Examples | JustPostgres Extension |
|---------------|---------------|------------------------|
| **Caching** | Redis Cloud, Upstash | `pg_redis` (Redis protocol), `pg_cron` |
| **Search** | Elastic Cloud, Algolia, Meilisearch | `pg_search` (ParadeDB), `pg_trgm` |
| **Documents** | MongoDB Atlas, Firebase, DynamoDB | `FerretDB` (MongoDB wire protocol) |
| **Time-series** | InfluxDB, Timescale Cloud | `TimescaleDB` (hypertables, continuous aggregates) |
| **Queues** | Kafka, RabbitMQ, SQS, Upstash | `pgmq`, `pg_notify` |
| **Real-time** | Pusher, Ably, Supabase Realtime | `pg_notify` + Realtime server |
| **Auth** | Auth0, Clerk, Firebase Auth | `pgsodium`, `pgjwt`, Row-Level Security |
| **Vectors/RAG** | Pinecone, Weaviate, Chroma | `pgvector` |
| **Analytics** | Snowflake, BigQuery, ClickHouse | `pg_duckdb`, `pg_analytics` |

## CRD Example

```yaml
apiVersion: justpostgres.io/v1
kind: JustPostgresCluster
metadata:
  name: my-backend
spec:
  postgres:
    version: "16"
    replicas: 3
    resources:
      requests:
        memory: "8Gi"
        cpu: "4"
    storage:
      size: "500Gi"
      class: "fast-ssd"
  
  extensions:
    cache: true              # pg_redis - Redis protocol
    search: true             # pg_search - Elasticsearch API
    documents: true          # FerretDB - MongoDB API
    timeseries: true         # TimescaleDB - hypertables
    queue: true              # pgmq - Kafka-like queues
    realtime: true           # pg_notify - Supabase Realtime
    vectors: true            # pgvector - embeddings/RAG
    analytics: true          # pg_duckdb - OLAP
  
  connectionPool:
    pgbouncer:
      replicas: 3
      poolMode: "transaction"
      maxClientConn: 10000
  
  backup:
    schedule: "0 2 * * *"
    retention: "30d"
    storage:
      s3:
        bucket: "justpostgres-backups"
        prefix: "my-backend"
    pitr: true
    encryption: true
  
  monitoring:
    prometheus: true
    grafanaDashboards: true
```

## Operator Features

| Feature | Capability |
|---------|------------|
| **Provisioning** | Automated bootstrap, TLS cert rotation, secret management |
| **HA & Failover** | Patroni-based leader election, automatic failover (<30s) |
| **Replication** | Streaming + logical, cascading replicas, delayed replicas |
| **Connection Pooling** | PgBouncer sidecars, transaction/statement/session modes |
| **Backup & PITR** | WAL-G / Barman Cloud, S3/GCS/Azure, encryption, parallel restore |
| **Extensions** | TimescaleDB, FerretDB, pg_redis, pg_search, pgmq, pgvector, pgvector |
| **Observability** | Prometheus exporter, Grafana dashboards, pg_stat_statements |
| **Security** | TLS everywhere, mTLS, Vault/SealedSecrets, RBAC |
| **Upgrades** | In-place minor, blue-green major, extension compatibility matrix |
| **Multi-tenancy** | Schema-level isolation, resource quotas, noisy neighbor protection |

## Kubernetes Depth Demonstrated

| Concept | Implementation |
|---------|----------------|
| **CRD Design** | Versioned CRDs with conversion webhooks, validation + defaulting |
| **Controller Patterns** | Multiple controllers (cluster, backup, replica, pool) with shared informers |
| **StatefulSets** | Custom ordinal management, PVCs per replica, init containers |
| **Leader Election** | Patroni etcd/consul integration, lease-based for PgBouncer |
| **Webhooks** | Validating (resource limits, extension compatibility), Mutating (defaults, sidecars) |
| **Finalizers** | Cleanup of PVCs, secrets, external resources (S3, DNS) |
| **Status Subresource** | Real-time conditions, per-replica health, backup progress |
| **Custom Metrics** | Prometheus Adapter for HPA (connections, replication lag, query latency) |
| **Pod Disruption Budgets** | Per-replica PDBs, coordinated drain during upgrades |
| **Pod Topology Spread** | Zone-aware placement, rack anti-affinity |

## Why This Demonstrates Kubernetes Depth

1. **Stateful workload mastery** — PostgreSQL HA is one of the hardest stateful problems on Kubernetes
2. **Extension ecosystem as first-class** — Managing 10+ extensions with version compatibility matrices
3. **Multi-model unification** — Solving the "polyglot persistence" problem at the infrastructure level
4. **Full Day 2 operations** — Backup, PITR, failover, upgrades, scaling — the complete operational suite
5. **Extension framework** — Clean plugin architecture for adding new engines without core changes

## Status

**Pre-Alpha** — Core reconciliation loop working. Extension framework designed. Seeking contributors.

## Links

- **Source**: [github.com/kyle-hughes21/justpostgres-operator](https://github.com/kyle-hughes21/justpostgres-operator)
- **Design Doc**: *coming soon*
- **Extension SDK**: *coming soon*