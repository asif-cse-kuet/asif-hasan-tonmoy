import type { IndustryTopic } from '../topic-types'

/** Networking & edge wave — reverse proxies, transport behaviour, DNS, and edge defence. */
const topics: IndustryTopic[] = [
  {
    id: 'reverse-proxy-buffering-and-timeouts',
    slug: 'reverse-proxy-buffering-and-timeouts',
    domain: 'networking-edge',
    titles: {
      en: 'Reverse proxy buffering and timeout budgets',
      bn: 'Reverse proxy buffering ও timeout budget',
    },
    summary: {
      en: 'Why 504s appear before your app is slow: proxy_read_timeout, buffer spill to disk, and timeouts that do not add up.',
      bn: 'app slow হওয়ার আগেই 504 আসে কেন: proxy_read_timeout, disk-এ buffer spill, আর যোগ না মেলা timeout।',
    },
    tags: ['nginx', 'proxy', 'timeouts', 'buffering', 'streaming'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'keepalive-and-connection-reuse',
      'websockets-through-proxies',
      'nginx-config-debugging-playbook',
    ],
    systemsLinks: ['backpressure'],
  },
  {
    id: 'load-balancing-algorithm-choice',
    slug: 'load-balancing-algorithm-choice',
    domain: 'networking-edge',
    titles: {
      en: 'Choosing a load balancing algorithm',
      bn: 'Load balancing algorithm বেছে নেওয়া',
    },
    summary: {
      en: 'Round robin, least_conn, and hashing behave very differently once request cost is skewed or backends are heterogeneous.',
      bn: 'request cost skewed বা backend heterogeneous হলে round robin, least_conn, hashing খুব আলাদা আচরণ করে।',
    },
    tags: ['load-balancing', 'nginx', 'upstream', 'tail-latency'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'keepalive-and-connection-reuse',
      'reverse-proxy-buffering-and-timeouts',
      'p99-tail-latency-planning',
    ],
    systemsLinks: ['littles-law', 'hotspot-keys'],
  },
  {
    id: 'dns-failover-and-ttl',
    slug: 'dns-failover-and-ttl',
    domain: 'networking-edge',
    titles: {
      en: 'DNS failover and the TTL you do not control',
      bn: 'DNS failover ও যে TTL আপনার হাতে নেই',
    },
    summary: {
      en: 'Resolver caches, negative TTLs, and JVM/library pinning mean a 60s TTL can still strand traffic for an hour.',
      bn: 'resolver cache, negative TTL, JVM/library pinning — 60s TTL-ও এক ঘণ্টা traffic আটকে রাখতে পারে।',
    },
    tags: ['dns', 'ttl', 'failover', 'resolvers', 'health-checks'],
    difficulty: 'intermediate',
    status: 'full',
    related: ['geo-routing-and-anycast', 'multi-region-failover'],
    systemsLinks: ['multi-region'],
  },
  {
    id: 'http2-http3-multiplexing-effects',
    slug: 'http2-http3-multiplexing-effects',
    domain: 'networking-edge',
    titles: {
      en: 'HTTP/2 and HTTP/3 multiplexing side effects',
      bn: 'HTTP/2 ও HTTP/3 multiplexing-এর পার্শ্বপ্রতিক্রিয়া',
    },
    summary: {
      en: 'One connection, hundreds of streams: head-of-line blocking moves layers, flow control windows bite, and concurrency limits shift.',
      bn: 'এক connection, শত stream: head-of-line blocking layer বদলায়, flow control window কামড় দেয়, concurrency limit সরে যায়।',
    },
    tags: ['http2', 'http3', 'quic', 'multiplexing', 'flow-control'],
    difficulty: 'advanced',
    status: 'full',
    related: [
      'keepalive-and-connection-reuse',
      'tls-handshake-cost-and-resumption',
      'load-balancing-algorithm-choice',
    ],
    systemsLinks: ['littles-law'],
  },
  {
    id: 'websockets-through-proxies',
    slug: 'websockets-through-proxies',
    domain: 'networking-edge',
    titles: {
      en: 'WebSockets through reverse proxies',
      bn: 'Reverse proxy-র ভিতর দিয়ে WebSocket',
    },
    summary: {
      en: 'Upgrade headers, 60-second idle kills, buffering that eats frames, and why reconnect storms are a proxy config bug.',
      bn: 'Upgrade header, ৬০ সেকেন্ডে idle kill, frame গিলে ফেলা buffering — reconnect storm আসলে proxy config বাগ।',
    },
    tags: ['websocket', 'nginx', 'upgrade', 'idle-timeout', 'realtime'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'reverse-proxy-buffering-and-timeouts',
      'keepalive-and-connection-reuse',
      'websocket-state-at-scale',
    ],
    systemsLinks: ['backpressure'],
  },
  {
    id: 'keepalive-and-connection-reuse',
    slug: 'keepalive-and-connection-reuse',
    domain: 'networking-edge',
    titles: {
      en: 'Keepalive and upstream connection reuse',
      bn: 'Keepalive ও upstream connection reuse',
    },
    summary: {
      en: 'Missing `proxy_http_version 1.1` silently rebuilds a TCP+TLS connection per request and burns ports and CPU.',
      bn: '`proxy_http_version 1.1` না থাকলে প্রতি request-এ TCP+TLS নতুন করে তৈরি হয় — port ও CPU পোড়ে।',
    },
    tags: ['keepalive', 'tcp', 'nginx', 'upstream', 'time-wait'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'tls-handshake-cost-and-resumption',
      'load-balancing-algorithm-choice',
      'http2-http3-multiplexing-effects',
    ],
    systemsLinks: ['littles-law'],
  },
  {
    id: 'tls-handshake-cost-and-resumption',
    slug: 'tls-handshake-cost-and-resumption',
    domain: 'networking-edge',
    titles: {
      en: 'TLS handshake cost and session resumption',
      bn: 'TLS handshake খরচ ও session resumption',
    },
    summary: {
      en: 'Full handshakes cost round trips and CPU; tickets, 0-RTT, and OCSP stapling decide whether the edge survives a traffic spike.',
      bn: 'full handshake round trip ও CPU খায়; ticket, 0-RTT, OCSP stapling ঠিক করে edge spike সামলাবে কিনা।',
    },
    tags: ['tls', 'handshake', 'session-resumption', 'ocsp', 'latency'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'nginx-edge-tls-termination',
      'keepalive-and-connection-reuse',
      'http2-http3-multiplexing-effects',
    ],
    systemsLinks: ['littles-law'],
  },
  {
    id: 'mtu-mss-and-packet-loss',
    slug: 'mtu-mss-and-packet-loss',
    domain: 'networking-edge',
    titles: {
      en: 'MTU, MSS clamping, and silent packet loss',
      bn: 'MTU, MSS clamping ও নীরব packet loss',
    },
    summary: {
      en: 'Small requests work, large POSTs hang forever: PMTU black holes, tunnels, and the 1500-byte assumption nobody checks.',
      bn: 'ছোট request চলে, বড় POST ঝুলে থাকে: PMTU black hole, tunnel, আর কেউ যাচাই না করা ১৫০০-byte ধারণা।',
    },
    tags: ['mtu', 'mss', 'pmtud', 'tcp', 'packet-loss'],
    difficulty: 'advanced',
    status: 'full',
    related: [
      'tls-handshake-cost-and-resumption',
      'websockets-through-proxies',
      'nginx-config-debugging-playbook',
    ],
    systemsLinks: [],
  },
  {
    id: 'geo-routing-and-anycast',
    slug: 'geo-routing-and-anycast',
    domain: 'networking-edge',
    titles: {
      en: 'Geo routing and anycast in practice',
      bn: 'বাস্তবে geo routing ও anycast',
    },
    summary: {
      en: 'BGP anycast, GeoDNS, and why the "nearest" PoP is chosen by resolver topology, not by your users.',
      bn: 'BGP anycast, GeoDNS — "nearest" PoP user নয়, resolver topology ঠিক করে কেন।',
    },
    tags: ['anycast', 'bgp', 'geodns', 'edge', 'multi-region'],
    difficulty: 'advanced',
    status: 'full',
    related: ['dns-failover-and-ttl', 'edge-rate-limiting-and-ddos', 'multi-region-failover'],
    systemsLinks: ['multi-region'],
  },
  {
    id: 'edge-rate-limiting-and-ddos',
    slug: 'edge-rate-limiting-and-ddos',
    domain: 'networking-edge',
    titles: {
      en: 'Edge rate limiting and DDoS absorption',
      bn: 'Edge rate limiting ও DDoS শোষণ',
    },
    summary: {
      en: 'Token buckets at the edge, NAT-shared IPs, burst tuning, and telling an attack apart from a marketing email.',
      bn: 'edge-এ token bucket, NAT-shared IP, burst tuning — attack আর marketing email আলাদা করা।',
    },
    tags: ['rate-limiting', 'ddos', 'nginx', 'waf', 'edge'],
    difficulty: 'intermediate',
    status: 'full',
    related: ['nginx-edge-tls-termination', 'geo-routing-and-anycast', 'retry-storm-prevention'],
    systemsLinks: ['rate-limiting', 'thundering-herd'],
  },
  {
    id: 'nginx-config-debugging-playbook',
    slug: 'nginx-config-debugging-playbook',
    domain: 'networking-edge',
    titles: {
      en: 'An nginx config debugging playbook',
      bn: 'nginx config debugging playbook',
    },
    summary: {
      en: 'Which server block won, why the regex location matched, and how to read $upstream_* variables at 2am.',
      bn: 'কোন server block জিতল, regex location কেন match করল, রাত ২টায় $upstream_* variable কীভাবে পড়বেন।',
    },
    tags: ['nginx', 'debugging', 'logging', 'playbook', 'edge'],
    difficulty: 'intermediate',
    status: 'full',
    related: [
      'reverse-proxy-buffering-and-timeouts',
      'load-balancing-algorithm-choice',
      'nginx-edge-tls-termination',
    ],
    systemsLinks: ['golden-signals'],
  },
]

export default topics
