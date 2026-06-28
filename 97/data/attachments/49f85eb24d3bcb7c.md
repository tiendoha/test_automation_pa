# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: register/register.spec.ts >> User Registration >> TC-REG-001: Should register a new user account successfully
- Location: src/tests/register/register.spec.ts:55:7

# Error details

```
Error: apiRequestContext.post: Max redirect count exceeded
Call log:
  - → POST https://automationexercise.com/api/createAccount
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 323
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:21 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=zOTKJrYpuxSLfG2%2Bef63MFwGEhPuhPTMOHIH6yWWj2eiPj734BX9Y319a8cQ9OTA34vMG2%2FarRATWfMdwgvnqeCm%2B1n06I%2FF0IHoMOtCAsl5fzVehbOhBrAPvA%2BZqm%2BT915g8lhA7X9Z"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33a6cc0b6075-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:22 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2FBSB0Awjc3QmGfkVlc0%2Fj0ZqmQzJ8E%2Fp6qCWrFnxP9XL1xi9150Or0%2FFdz2HJVzsXu3xJXH8Czsz1OqYGe5axUUf5DfFj3I9WQogeyRmL0GqohRcjq097RLteS9SZMu24foal4JRE1OP"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33a92bcb1e95-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:22 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=vA0Ylf1Z8grZHJpqkahT1EzC700q%2FNdU0IGk1IFdWkMoFBLqHAkEea6eXg9eiY%2BdB4jjbk9XbPiyRKMOnssOPccXIZyYBZpij7PYECCGIsStVIckmyCQtPCT7bka%2BxMIuvAV9hAlfMU7"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33ac796b000c-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:23 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=2z5yFxTtbgUvhmt%2BFaVRRDCDGjDyNNqu44iFRU7mGipmFwjIl8gPLkvt65HHCRC5jAms56P5gj4w3f7k%2FD3EByyFPFtp%2FHAZYYREy6FFHWW3ekR75YLdC8gA0F%2BM6VZ9w2qZ39pmdGkW"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33aec87960b3-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:23 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=w1pdKrEu8r9rmidM3SGRPnesVQKPQmwZHGTfMv%2Bi5Sl8cQ14i9Rx7ZprjpXVvcNJPYvq86b6%2F6Mkk2Px6kl16ngienp9TJBbTFd81nOTNrifE1JdW%2BJcJJIAgFtwlCSTjRO3SxRyt0BX"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33b12c04022c-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:23 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=pJGqjNAl8rW1jI1fWLqALXqrlQozKfTgXcmzrzjm3YZULDV9LX25aeTyblWKY4z10t%2B5rGzksriWfCWb%2FiqM5kIPWy8%2BEY5uA3GJt%2Bsd5U4e19I83HNdDXDNAyiClwxdBRddJuW2vFzj"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33b48dfae8fb-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:24 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=M%2Bf8vukPsITNBzRuenW6jNmUc%2BRP6C7qK9r36fb1cSk6MgL0EH8rL7C2hwqq91Xr%2BGqvIE%2FNeSdxPb1dcgf3AsPgQTILwTptX8hSDZLSeaGUMhwqM%2FTDkTiLDXcX340g6uI1eKpcnrDH"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33b6e87feb03-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:24 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ajp6w6%2BxxhOcNoidEPoDz64IN3TtpP4U4rAWvXr87klTY0%2BGMfRZQIjd084chx5K5rC%2FKbyigMelZjDhdJvcg%2Fp2pW0d2pDYuTI3gRg741Ex3Quwj1yuHkxTo9uLxYcXpzc0z0UkpPk8"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33b94ab537be-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:25 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=kySb3k%2FjVVcQiLaZ3EaiMizmHFxhEG2e%2BGjVVAwtS6FMgDVcGmqsE6kpxhhzjrUd3yGYp1PpdICEsMxPEh0a0H1J%2F6QMVpwZPn7LxJqntvVXjJvWB5SvvYsQWtGAVlUM5%2Bk6BZVH4def"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33bcd85fb33f-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:25 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=WCj6TlbIhqzQozLLC75NAwpVufHrJzZ1ztr5w4Q%2BB93e6ZwC68asNKqoddYepwLRn7kugQDXVJwulIpQ8t8oJ9hRyJBTHCLkahNiYtVZFlstc5OJg%2FSmgu5bxT6vLuP%2FoIxdC0xXDu1q"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33c03bd0eae6-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:26 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Y72koh4Z1oDZDMrRm%2FU9hM0JbO8O2ayslEZwli6gENfl%2FRuorDmB9x3BMwPOKeEh305%2F5DVo2NuntRe2GlqOfuHyiAEvobc3EW1FqQUEtn%2BuzJXbLQTLkAyTWbTeg%2FifXpwJ1OClldNQ"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33c29a1f231c-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:26 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=q0R76jIircofpwzbJf7X23vnXLGJKslcDWwq2lliE1PUHTzizvoKjX7u9%2FYG%2BuT5w7QQOv0d%2FsAkKsNcO%2F71SwvRYSbhXQBXanxTkQbV6k2EKy8KC%2F8NJPpByMGU4PfiGiLcpNu%2B73Gw"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33c4f9de9327-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:27 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=fg3e9S6MEYZMD9FyElKe9tX7O%2FRXsm4L2ZLJVEdtbH7RaA7KR6l4ngjWnD7q4OxJVRTK%2Bdc4tvsMaC%2FuVga5CwZRXLbuFJZNzGHxWXGZihNbsFTxskxfSVwacRbdu1iogjsNh9e%2BGzkv"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33c76f7bbd06-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:27 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ZMLiGHn6HV8MXFeBsE4N283W3qgFfwaADfGiBqxyPqyu2kMBtNBTxMHI4cu9Xm9Og2BrbEpLeu2JIyCXXQLa6h9tKvvw2NWEjSRscA9X%2FXPqRLVYvHMsJgOZOFXnX93Ie%2FoNUjlExSRC"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33c9bfe56075-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:27 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Y5r6GWspF2uC3Zzx659L7z8lWuHc2YSwE7yKnxtVEyszN%2Fr5icb7M7P0Hsq2%2BKZcVh%2BxSQ4wTXZtO%2BW5OdkVdVdb1y2fT6B37JRSVQQNivp8xLcWUfoe4GMg2WsaXREbEt6zP5t4e1oe"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33cc1c1168d7-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:28 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=K%2FQHUB8Mpn7KvnPilY%2BA%2FEja%2BgAeApQfK2DP%2FNsB3PlzKT1LP%2Bfw5bTqNx0sXmwrYcvXmZMmY4a7n7nJ9ZpOdJCpDEO9OwVLGF8ApmfKlt0tDebv7tl1D8BEvduyBlOe%2Fo6uZx8sbep5"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33ce7cfe1e95-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:28 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Y9NcKHZUplWpyvXrsk6g9Y%2FJkqsLLVujuEfRL7hcyO%2FH7k8ouaXZK01l%2FNtdkfUeD%2FwWeObqh01dh%2FJE1DSC1NudQ7GbR3GyyEsJvIkbHOnB5pimB%2BZEmjXGjHdJAsubfQB%2F2A4wLDzZ"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33d0cb79000c-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:29 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=MDPgMrQXP3ywYLCeUEPRpUxI35LaUFZiNBTbzfwVlvAAxakapoJj8aQvC9LcOBhUUhDgHtsfOjQPkH1TXsGro%2BttGMA8JQ1UoF5jVk4J2m28EFXmayo4Rmmtgkoo4h96F9aJJ3LLbCk4"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33d42941b33f-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:29 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=b8nsGZfl77pHLQbnzma%2BAVQuVvlMIIEZ78RcZ6up7geCRuJmH%2FyvH32E3MQsQBNxiu332EM71wIMsA9upAAubn5e8lVaB8mokXmU4VSCFbGpCKUcydgUBHqFFFL55g7XY4mtgsaht5pV"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33d67cf860b3-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:29 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=QYLK5WwFl6qoB1eJMRligSSylcOivyoSBT6knyCuwBXuujBmBoC%2BkondxQ5fEwBTgdYFDNAiquKdd0pEB4fljnn%2BCQ3Dsq0OWqLMIo0fZDjECtLwJS2C%2FlTB3oa2QJR%2BWmNVxrF9sPnj"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33d8dcd8eb60-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:30 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=wgX0AIqowzgxp1TdeuiVYrbetMRjn%2FMX5xVJoo7hs69iJsa7eLDXrEchP%2BcRT8bcyiPSL1Dy3qJkYZNUzf14em7zcappwtDPnSDh%2BlAf7QAhxjbXdT5G4UW9HkIED1AXOYLoWZJZzTWk"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33dc6e98022c-ORD
    - alt-svc: h3=":443"; ma=86400

```

```
Error: apiRequestContext.delete: Max redirect count exceeded
Call log:
  - → DELETE https://automationexercise.com/api/deleteAccount
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:31 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=b%2FrYl0fQDsEeC2tH6LVH4ZIYj%2BTrX1tE8EaplfUoT%2BAlfPp6hUZIPc146VGqBr3ajjcSKxe10Ib1VVy2Vlz0Wm1oH9ScOpvKiGLGBJnQjkIpB4Dugj%2FeetF%2B6zTY46N8i9gXOgRcc0dy"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33e08e6e55fa-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:31 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=cHNWYwxgF7uirhnkgyD%2F0zYG7oiS%2Fj17cpiJsmiLjK2YjQOxvxh34AzR4xbZgTrKfNCUXMp8WQ%2Fs6TEh0ZT02uEer%2Be4riPgXsi84Og6uLa0s2kLttsW7%2FlgQnVaRz5L3vixDRpYmlTi"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33e2eeb672eb-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:31 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=4R8CcdLBQeIsZRVvvwji5vrt%2Fk8ignH9e8mMbieIaD2Zw5ceRzbZc9gLY2PRKF7oNJh8jyryNt2rDpl9RtsGMHc2WtzKECflZ3FHGxaiaOKecHm3jqwIVf%2BALfWJ5Zz5jaLR4ObGnm%2BC"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33e54e5c1080-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:32 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=rJgb5jkPe%2F6VakaV9lmbQ4SF75x%2ByCIkN956uPW7bBNtQvtWVjdWH8f3ixVKgysO44mgi1aB893KrBL6KgjTGvAc0x37eWJlSVPOHkEUQ%2BN4j8njK4LP8JNWU51KxyaW%2BHXkNxmLg2nC"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33e7ac42b33f-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:32 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=I%2BVBAxMlNPLYFrdyrpzug%2BJz75ObzBB2NBDgIsdvxxVWrKGJxFlM%2BFjIk9Gjwv2F0BZoXCKO75QHTMAYqQ0OkCqbhdM1njsvQosY0VbKYUZJQ1FVlelA35Pbo4hMn8sG4Vh%2BSxf1skbV"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33e9fe11eae6-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:33 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Xjng3CntQAAwlpT%2Fm5vW235nqBmM08q4KLF2FENwjS1oDlozNxrQ6dyCaOUM4TMpOSHvL1enmG1XGNzaH80%2FgBKlbCH5LyI3IUsVGLU2UuDd%2Bf9T7AUg5nHR4XqWIIobXJnS04vQ1dU1"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33ed5bffe8fb-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:33 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=heX63NS0p3nL%2FVRRvOliQCeAQaTeSTDKse7P4azHbkxfmBJROzMgRO%2Fy2M6oG2il94XuVSy051IRRmztfXlEQCo556WaRyTjuvPacoY7uc2hVdPGwP8skIBXhcfouv4hEDCuCMfB2FYT"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33efa83beb03-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:33 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=iu8HSKvpvbXWGOLluSNIcBKr6QrOR%2BBiRu28yjG49Qa7YMkyFpkR3t0mWjfO3UAijdJ2L33DnTQasr9vDzOafBssNiptjKFVj%2BuGK3%2F0V%2BOnYRq0W51rWdp6Fwqd5Rf4XRY2kARLUZe8"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33f20eb5231c-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:34 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=h2rV%2FValEjnx0BEuSkit1FCKak%2Fhq%2FzM5sZcJWi9pHrTgRHG5nb0xF36LLYKAUuJjIxacEhM%2BLMcDdfeOmnA6Q4YpimU8r3QSwr7uMn0v7ugw8Qlgxfm%2FuxN9p5nG17VysYQtvNeV63R"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33f46f3b45f5-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:34 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=XTXJet3JCqpNVOTeG6yZd11yg6R5MMOyAbJ6k9nSG8DoE6T%2B1hoWjJL3j%2FAdQuAoo5selZySrUsp4WguTGZrw75ANhlz4jGNQ%2FN4Zj794%2BJ4sNbE4m1Him7OfLgDZkZb8afswmpqZh2i"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33f7ddb01e95-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:35 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=JwCPiJAFkerta087FKBvf5x1V0TcNmMRnHjRPFv1aZKF59p87hGwZhYFypsNLf7DYuJtqfB4sOtn8bvIZeJ0AEWT7ke0qdOUYpx%2BXNXWzted4jHeplfDktnNwO3IHDEVUOrpRaznJlo6"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33fa3d1eb33f-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:35 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=O5rtwcONBi9Z2TgdufzOOu9LYwpVOnvbz77n8AZo9GqOLej2Ze3sZHh5ykoKu2XeG3c7%2Bl83ZBTiiqyPn81qai%2BA54%2B68EbJ10tm3LgQFBUQ%2FitI%2BSZL8Fj5Z4WrVi%2BkhDkG7vur8gsX"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33fc99a899f0-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:36 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=7RYPao%2F9rqgxEB0vp4ajJ6DuhFE%2BjkCZ2RchAkPXOb4BNGno63CKAwPxHyx3Tx7BdhKsrmBqSWryh9%2FHZa%2Bq68MJWpw9q%2BwLBCU88AyAR8U6noP6m46ERXimmH62yrtKfweS5TIS%2FNrt"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a34002ed3eb60-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:36 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=omOSofQ6lznIB%2BT4V2OFPqRJjMVZwX4HCnUYHSh8VLB8PwCBYG3RmjGtXP4AdEaUh2yaqBOua4wKODchodJ2ZVmyRPkimWvgZZSjbd587VcFraX%2BPjuOHWaAFS7Vc%2FymyztO2B8vsShx"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a340398c5dadb-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:37 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=pgvJyZoDd%2FgLGHbPI7nnMKEk1RxfWQYXHns5gFLppn9uiD6Pr7zvK9Tr9MNg%2BRUbUr9U6iAveWVPcuDXCyPI1veLfrOBs5QWXRdCcHELOiylfuhDSgLc5p7zxPiRO0bG3zJZS%2FvK04x5"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a34070a33022c-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:37 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=VXJszcJBpd0w8OXEqidlJClFGKcUwT1zofdQVGLmYm%2FRouCS9KEWhapcxPERTqmoAizKoQ9JZP5oOlT07vzJnJGawTwUZJdq57Sao9CNGQr%2BDBtXOA1LDfM0a8P2ZwX1is4Rx2sRKBK5"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a340a5d8260b3-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:38 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=uKc05qX27NHYbTgxtDQ%2F4WkPMEbHOFFD4na8CdByDLWsIEL%2F6B7G4YOkQcKcK2i%2Bw%2BsZD%2Fl6DpuxLvUxxDkjx%2FK4JBVkRns6ywe%2BeeuDZWYhC4mZqjx61sJyPDUcdIO%2BHunLBEH%2FuWUi"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a340daf2255fa-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:38 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=fKrxEh%2BVdjMcMkO06YpgepV91b0ybd3WVXkyG%2FzusXQQ3uqaQg%2FZuG4gBGRUgITQx7swO8eB7s0YWa0t365not0gDMYs3Xq2IejByLnLGxbQJZgrSgl915o8aX7Qkv37YfckMPNvdEll"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a34100a99b33f-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:39 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=OKgY3x3a3z7ng4%2FO460Hec5FKV28FZEhx4zMT%2BP5tBM%2F9XGJLxDVr582q%2FFdDuXgtDGL3BOB6WBEeicWJHOQsbRd%2BbZmNJObzoxlyDkux9Gw3qg0pir3bDHmaKV2tk9wdvHUEPms9dJY"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a34126a791080-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:39 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2F2dQkxJLEJ7A8Sm%2FXX2tcrwYI84x57wBTdh9A3UCK%2FMTg02eA7BoiW5xo17EYpcY0zTuTJ4YS4iSbmHd9E1j%2BoVXv4QdWBDVbVWeNCICvZWYCaieGLHuPmKIkdPZbyPlZS3W88iUTc5q"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a3414ba42eae6-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Sun, 28 Jun 2026 05:13:39 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=oDl9848yjnI4JZpJC3w%2FM7j43J%2FEY%2FORsyjgw7l2Af5ALXeTMs90d6d4Ae0mPuI44uO0z14hHzkiZnmbAhSNGrUTrmjrAwf%2BB8d%2Fse%2FxpX0z0RMY0WV37dEYGKG%2BPEck%2Fmylfp2owKE2"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a34183fe1000c-ORD
    - alt-svc: h3=":443"; ma=86400

```

# Test source

```ts
  1  | import { APIRequestContext, expect } from '@playwright/test';
  2  | import { UserRegistrationData } from '../../data/register/user.data';
  3  | import { logger } from '../common/logger.helper';
  4  | 
  5  | /**
  6  |  * Creates a new account via POST /api/createAccount API.
  7  |  *
  8  |  * @param apiContext API request context instance.
  9  |  * @param userData User registration data.
  10 |  */
  11 | export async function createAccountViaAPI(
  12 |   apiContext: APIRequestContext,
  13 |   userData: UserRegistrationData,
  14 | ): Promise<void> {
  15 |   const formData = {
  16 |     name: userData.name,
  17 |     email: userData.email,
  18 |     password: userData.password,
  19 |     title: userData.title === 'Mr.' ? 'Mr' : 'Mrs',
  20 |     birth_date: userData.dateOfBirth.day,
  21 |     birth_month: userData.dateOfBirth.month,
  22 |     birth_year: userData.dateOfBirth.year,
  23 |     firstname: userData.firstName,
  24 |     lastname: userData.lastName,
  25 |     company: userData.company || '',
  26 |     address1: userData.address1,
  27 |     address2: userData.address2 || '',
  28 |     country: userData.country,
  29 |     zipcode: userData.zipcode,
  30 |     state: userData.state,
  31 |     city: userData.city,
  32 |     mobile_number: userData.mobileNumber,
  33 |   };
  34 | 
  35 |   logger.step(`Sending create account API: POST /api/createAccount for email ${userData.email}`);
  36 | 
  37 |   const response = await apiContext.post('/api/createAccount', {
  38 |     form: formData,
  39 |   });
  40 | 
  41 |   expect(response.status()).toBe(200);
  42 | 
  43 |   const responseBody = await response.json();
  44 | 
  45 |   if (responseBody.responseCode !== 201) {
  46 |     if (responseBody.message === 'Email already exists!') {
  47 |       logger.info(`Email ${userData.email} already exists, continuing.`);
  48 |     } else {
  49 |       logger.fail(`API account creation error: ${JSON.stringify(responseBody)}`);
  50 |       expect(responseBody.message).toBe('User created!');
  51 |     }
  52 |   } else {
  53 |     expect(responseBody.message).toBe('User created!');
  54 |   }
  55 | }
  56 | 
  57 | /**
  58 |  * Deletes an account via DELETE /api/deleteAccount API.
  59 |  *
  60 |  * Used in afterAll to clean up test data after the suite completes.
  61 |  *
  62 |  * @param apiContext API request context instance.
  63 |  * @param email Account email.
  64 |  * @param password Account password.
  65 |  */
  66 | export async function deleteAccountViaAPI(
  67 |   apiContext: APIRequestContext,
  68 |   email: string,
  69 |   password: string,
  70 | ): Promise<void> {
  71 |   logger.step(`Sending delete account API: DELETE /api/deleteAccount for email ${email}`);
  72 | 
> 73 |   const response = await apiContext.delete('/api/deleteAccount', {
     |                                           ^ Error: apiRequestContext.delete: Max redirect count exceeded
  74 |     form: { email, password },
  75 |   });
  76 | 
  77 |   expect(response.status()).toBe(200);
  78 | 
  79 |   const responseBody = await response.json();
  80 | 
  81 |   if (responseBody.responseCode === 200) {
  82 |     logger.info(`Account ${email} successfully deleted.`);
  83 |   } else {
  84 |     // Skip if account does not exist (idempotent cleanup)
  85 |     logger.info(`Skipped deleting account ${email}: ${JSON.stringify(responseBody)}`);
  86 |   }
  87 | }
  88 | 
```