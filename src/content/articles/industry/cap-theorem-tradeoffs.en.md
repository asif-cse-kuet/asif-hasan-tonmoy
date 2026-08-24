# CAP theorem tradeoffs in real outages

*Educational overview — distributed systems fundamentals.*

## The theorem in one paragraph

The CAP theorem states that during a **network partition**, a distributed system cannot simultaneously guarantee both **Consistency** (every read returns the latest write) and **Availability** (every request receives a non-error response). In practice, partition tolerance is not optional on real networks — you choose how consistency and availability degrade.

## What teams actually decide

- **CP leaning** — Strong consistency during partitions; some requests fail or block (e.g., quorum-based writes).
- **AP leaning** — Stay available; accept stale reads or conflict resolution later (e.g., eventually consistent replicas).

## Real outage patterns

1. **Split brain** — Two partitions both believe they are primary; writes diverge.
2. **Stale reads** — Users see old data after a failover because replication lag was underestimated.
3. **Retry storms** — Clients hammer a degraded node, making availability worse.

## Partial depth note

This article summarizes the trade space. Operational playbooks for specific databases and consensus systems vary by vendor and topology.

*More sections — PACELC, fencing tokens, and quorum design — coming in a future revision.*
