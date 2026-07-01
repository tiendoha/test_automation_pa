# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login/login.spec.ts >> User Login >> TC-LOGIN-001: Should login successfully with the newly registered account
- Location: src/tests/login/login.spec.ts:57:7

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
    - date: Wed, 01 Jul 2026 05:15:50 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=8foXnt%2F%2BOsT2kcxV3%2FFowvdfXidS8R6YPd5m%2FmvfIIDTlrLbfszbjSfvfv3RXbQ0C5yRB99jO5Qdw2uLDcB04059%2FAWxMKSzHcp3mAP2vRH0TJjRS6iZIfLpuo1fjUFQeYoy2%2B9CLEAL"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef671fc2391a-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:15:50 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ro1FtzEhCRPAb43Hy7lld6aFPtocW74Xw5tGG9JlPCiWy4GJP6Hm0PiD8xwp3YlC4p0IoFSSkqpbcwvALfYDxJBh9Nwb60XzE%2BvnxmELdFAHsf%2BYhdCzJthfLyzYpSGMIeacqZDtcYUk"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef69bb44a9d2-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:15:51 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=QnEafj09gdTPvn4wGr2R5%2Bpny3zqY6Fu4Pg7Xx2as%2BJthzRzbFRHlX%2F%2BvjpfeX%2B02IgwU3ggIVrDGNqYQrfSb%2Bp5ryaVltiZ7qSq9T%2BDRreZ%2BJMuPgsnhBPAy4YGycHXFjBIT5YM7hdE"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef6d4967d090-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:15:51 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ihtuOo6tZ5F6fjtegHTaei68UIq0%2F%2FcTuRoFVpdDQdaAw%2F7aUCbqf8Jm0L9DKCHdo1%2Fd%2BN2%2FBBmgnrc4GtDaA66CnLd9haUhQWfSzF7%2FGXDrLpksiv2QQ1oatyA9Z9HfH8PM1FRsc%2FCX"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef71090ee056-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:15:52 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=BXK5ZKQPgIoiJ2tH5Lcz10E4NWxALZyqBFLYkSUZ3RqoGpNtk%2Fm1trmPciUMFwyPqkVd1O%2BbtHgozybd3b15JnC4iPTfXtQ6dLCXJh5ASF92uDNWkvgyBV2JD7l0c377bA9LtAVYO6SI"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef738c0d0dda-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:15:52 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=3uV46ouXX1243n2HGVsXx8775w8PixppJ9kzUe9H2bX73FtFKYCWhcozzO0LAWCL0zVe%2Bwb3q0GLZqEKp9Twqj%2FHQvSa1%2BrHGcFoEJj%2B1HDzEpuLnHB045bsUOpBYv%2FaEQs0D9124tme"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef761bd21519-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:15:53 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=opbmDNYH4t1kniHIiiz4Lgiw39WfLvNAHSm4Isru7h4oYSG2V4svY4Ttzp1pR9zn%2FBP%2FD2gVLQ7G8eHf2xRweQg%2BqrlWwV2HrEbqy0we93EakM7f8oob11TGArgds9GXByk6eqv84zpC"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef78ac670cf6-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:15:53 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=aNCUw8geTY3axzKDewZbosWkqgnF0UFWYDjL0MvLm65qr%2F2w23%2Fj6YHKt36evj3A%2BZWdRfft08JJhogiH0U%2F68Gw3rCkmC376h2wwOo7GiLLs91U0%2FRXSlvfrs4K05kn%2FRdZdET%2BMdbX"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef7b3c1ad605-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:15:54 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=I36NE1U3rY4%2BQGizUci%2BRRI%2FiROe8iGWOjkkAINT%2FMC2f8DicV1EqG4gaVQPGSVIhVBdQ10B3jI6V9Hs4dM1oAFtl%2B99O0FdCYaXbfeDwf0IBpq96%2Fc%2BHQBxTckhnpWzBh%2FdrgKAFebC"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef7ddfd4d640-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:15:54 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=iPfSlH4I4qJ0hw5Miv9pwA34xaLsWWt2UUkorLIyfZeqRf23UhYFyrHfVO2vL8JzEsWRb8H7Bvsf3fPxCC6oDjrMvFxP9zmwElmAVIynAi%2F98ZUdjSXKbWJ8bY2ZP%2FYbFmFKNs4IX%2Bk%2B"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef818937e10e-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:15:54 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=oQQpkAX1zXz%2Bw31Lzdo3ooQkfdE94hpHuBvfCXTT2z3c6Wd5b8OqHtqrRbLmGLl6%2Fvguc053MvETul%2FIQKqVuxwYi1r9SDksMGh82Er9qLSRJXPs%2Bue63ygVkuK5H8SQ8HQW%2Bc847w9r"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef841e7a7d5c-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:15:55 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Rj4CdHZ%2Foh0F0aYxv9ybeTwX5%2F%2Fo9BwXo7f06qfoN%2FYLC9X6r4thF4P76POTScBkHwyLUfO5uzh0u%2Bo%2B5eujOWzZ6z8OBU7SZh%2FibfVLN3bTytsN2AkzbCoAOqT5qnvq1%2F5OcWV3ML3u"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef86ae92d6af-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:15:55 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=zWXc5zeEwkMnFnQ2BXHLU%2FvBI6v4HelZCCnCccGuwv1spdWYoCtrpF%2FJAWsx8uX5%2BFNDS%2FfB67OWutHu%2FFIzE%2B%2Bo%2B82lHuGfrPViv4DOK6cOoUGLW4fWlUcd2GZ4gtpFOiGH5kta1Hhc"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef892b7a1e0d-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:15:56 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=8bpe27dDyMcI9Ft4egBDLBztwrxWLmn9UchFKc5fWgbbRkAD1hAWnSIttxAQ19vaJBOolIZ64Oinx8edkUBKEGDciOm3LRcz49IRnwnW3iF%2BIEgiqOoSAG%2F5pU2LuzPr76AgrdfwDr%2FD"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef8baada0568-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:15:56 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=9%2FL4P5vZDDyYlzhotxQTMvbcMiZYfio4aR8tI%2Fj9MgqjUX35vd1wIeF0qriOzmpDQWuY3esGrPUol2XOUm6xEPRwz0dvNv1CMi3rbF22m4tvlV72qaQsgaPQloWcKiKIPM6oeXM3%2BhI9"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef8e4cfee6cc-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:15:57 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=HeGxqBpkdlQtS5CCK86S522GwFumPSN4I2THIxN74MsqwLxLJaNO%2FotisBAB5u9aVnGAcObAi%2Fm%2Fqts4DKt96MDaNt5K4LZ8qyR%2BvoiI%2F6f1ngZbbBKP4sdLbXgdxT7IqemqB3tRrIER"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef91ecbed090-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:15:57 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=HJQMEWFf%2BuwbWd8pv%2FqZevSHjnqpwqVc8x365sffyhAXVgoSghKIzESAuDZiNGmp88xMK0wThY53zhg8xD6iAMfkfwX5x28tJD6k2873ONwthr8omOULU2PzmFZIUBhHMs3YaVtb8Hji"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef946950e056-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:15:58 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=lRr%2F9%2FQMK5yt%2Bqs%2F1Pq6fBE42x4EdNsk1%2FDoui8JK5lPuDMieLM1zlK9Jr%2FrAChpHqSLpYNASKZTW7BZCTOR7YkzlGnV9pNekhymO3ObZLGXnJp1fTT%2BFmDRUTaasE98RggjehKxHfHU"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef96f8eba9d2-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:15:58 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=LFm5ve8V%2B7J4MH%2FNQ2MbopeL%2BFIT9Wt1Q5Um2pWUfZKK0HQKw8XjHzp0EKhjtwI6y%2BN8MU2otLwQotG9k9gtWDtqNe%2FMtZ2wp1KeRzh1o5wiOYUUl3kqm9p2hZq5qRPZi3o6BVAM%2FVRS"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef9a88320dda-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:15:58 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=o2Qc03%2FX68dFfBbapyuNw866tFmtvtQvrRAgb2iuuP6F8ciGEqzOThbpSdJG4QmE%2B8RvqtPUcjtQndciq5GyTHOXYTMYbEUhixGCwZaKdNBrznOL63WVS48xI1LGTFLjTf3h6MhdeP42"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef9d0b2c3c2f-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:15:59 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=m2vz43qQpqEppx4IZWlckTGdXypaCgXimEyrJ7UrDXKQB8YW4bgZZLYsZGNndUnirEzk73A%2BzXooVd63UBhFaQTBTSkkzl%2FscDylXTERAyAl9Zilk85jjdVu5OeCvuHc%2BbnitXIuW%2BJH"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef9f882854b2-IAD
    - alt-svc: h3=":443"; ma=86400

```

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 403
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
  73 |   const response = await apiContext.delete('/api/deleteAccount', {
  74 |     form: { email, password },
  75 |   });
  76 | 
> 77 |   expect(response.status()).toBe(200);
     |                             ^ Error: expect(received).toBe(expected) // Object.is equality
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