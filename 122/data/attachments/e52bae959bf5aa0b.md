# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/auth.setup.ts >> Authenticate: Login with test account from .env
- Location: src/tests/auth/auth.setup.ts:15:6

# Error details

```
Error: apiRequestContext.post: Max redirect count exceeded
Call log:
  - → POST https://automationexercise.com/api/createAccount
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 326
  - ← 302 Found
    - date: Thu, 23 Jul 2026 04:09:26 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=kXeuSFqkNyYhP5JbhvwibZ5YgS70gpJaACpBktiAjtTvJwFE4if1eLiX2wz%2Bq8VlhfnepqXd7mhi0YAIjifqS6zJj38o46paGS36zm%2BckRZKomsZl9nqKaZSMcUhGdLQTsJSEjK0znDh"}]}
    - cf-ray: a1f7d4675a48fc53-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 23 Jul 2026 04:09:27 GMT
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
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=38qAfsvrc3sKpeV5IYl%2FdneTMEPi8MWLnbzRaclgQ23ThwaKnytIQ4Px4%2Fvm0s93vT8TLhqqHe%2BBBeRvSWi9ZntwoGAQfbtXNu44YOiA93xxvFqygYdZ5jfr%2BFMbvD5IETwrBtiEzES%2B"}]}
    - cf-ray: a1f7d4698f8f98ae-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 23 Jul 2026 04:09:27 GMT
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
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=a0EcwSgaixMLVgc1lmB2HpMZSZK1C2sDmsqVlgTW92IL1mM%2FoBIjucWg4cJgLhm%2FE61qdrGKVAbXZOLYcoP4VoG2KCNCgSJHjQIK1qhYWLinYvhxdF4v76SfYbYSjErlaW6T%2FWgPL6Vd"}]}
    - cf-ray: a1f7d46bbc8e2517-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 23 Jul 2026 04:09:28 GMT
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
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=tUvmbMN0LKMHM0u63NYcUXTDR5Ok4UrLQE4j%2BJ7EI1ZgQRb9XoUOY0dMXJIM8KMFBc8iVPMyY0KGBRBhjZ6lYDtGgO%2BXlfuUgYOjEGgDvfiJVTKy6Qqec9vm7kPomQy34zWxyZOr4OCy"}]}
    - cf-ray: a1f7d46e9b4564b6-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 23 Jul 2026 04:09:28 GMT
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
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=0EvLOGAn3G4%2FkhEl55b4nMgzD2nEIzGK63fxY2HVP%2BUWY2y0SYB1iR8a4B%2Bii6r3ntje0xMe7igjgwb774ydY4kPwU%2FEDbsvo2S2ax4xjL4rPXBbIhDS38NgLNud0EESKmaXJpiKrsgv"}]}
    - cf-ray: a1f7d470cbb5cf22-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 23 Jul 2026 04:09:28 GMT
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
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2BITIeHZ1me88zlvCKJBuqeY%2FT%2BI4m5UUrZ2HiiqN2yttwy%2BHSurqU85Fno6KuKalfHVKw8Ohb4Ckdy491IzV%2Fl9%2FHgkaKAwcYdHgZyGXI6ZUxtE%2FCOQFlVuXM0h%2BTIXqkspOohLSHaA4"}]}
    - cf-ray: a1f7d472e937c68c-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 23 Jul 2026 04:09:29 GMT
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
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=dPo6XJ7PCeOV54x0B0HWr90xD8QhsfTKsOZ5U2x578EWwBkd0ECWTTaXhHkOzYeDOSzHUb8VqDb9M3V%2B1VHJe5cSQtHlBg6cr5p7Y4JhJSg6doZv9kFR4W7L6Hf297FHz23NYUhCjgpI"}]}
    - cf-ray: a1f7d4751ea750a1-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 23 Jul 2026 04:09:29 GMT
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
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=YF15LPvvneMMaOB32LSjS%2FQONdxCNkOo%2FMRWATd18JTqMWr2LXU1xg1TsWfYsF1FMG4jhgQQeJFeE8tz3ms9HuYev932Duolmy0BDNHWsuXQPKu%2BzZnVG9%2B9oJzZyL1oqoHoxXMyH4QI"}]}
    - cf-ray: a1f7d477aa052b29-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 23 Jul 2026 04:09:29 GMT
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
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=2e6og%2BHY%2BSpGSfTaAzlYVeWcMweU9ccG10Onn4HXN4%2FZngt3Az%2BOR3Y6WpW%2BxLVPelggDMPrbs92h6lw18BpgW7bYS5zLRtN%2F4Xtr75zx30TufmV036XkHnlSjP3UOHMbRAAzKRg32eY"}]}
    - cf-ray: a1f7d479edc4cebd-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 23 Jul 2026 04:09:30 GMT
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
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=nOYW1ntJkkybEcRGORWfcbIwHkVCked2LI6HpR1re1duf4srrCCs8NQfjdj8%2B1tAjcYnywMRoZA9Jy2iRKkHg9GClZsMToM7J7U2IR31YgjwtvfpPkQx2F%2F2Jd3bmvrO9ezMTfQCxHky"}]}
    - cf-ray: a1f7d47c397df497-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 23 Jul 2026 04:09:30 GMT
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
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=0tH7BvY1QjKFtlniH8Mjyn24gd%2BkzUeygxtlXgnQvpWhaVOYMFWcw7QsLJHmCJlZ0X6HTLT5CQZTbl9dj%2B0MhauJIEPTMQHeRyZLHO5Djptb2fjEjeIx43v%2BX2Wome77Mq0rynnIHnhg"}]}
    - cf-ray: a1f7d47ede1d6c48-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 23 Jul 2026 04:09:31 GMT
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
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=gx%2FDppa4q5mWGGiRIEe4%2BAcUIxBlBBHYq05%2FrgyXCPr1AWtE%2BmV7dxp0laR5PW2b30L3igKXUcpT7g5H%2BOo2JL9EHp%2FjNxaY2Fy2lWv3SgCDU2eEvfzgCpWMT7VEdbS56vPh%2Fbgx5HmM"}]}
    - cf-ray: a1f7d4811ac12510-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 23 Jul 2026 04:09:31 GMT
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
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2FylTsecuCBGPnmlXvMKT9Xsxk82fbV5zP5MGuuEb6NGTgszNsXqVqhQwzdPGCH2Ti92EhV27Uyv12GRsRDkqU%2BB7LTjmLWO49ZeX%2F5lAmFpAHibIcBJ8X207CDUqPQ71B5LoOUc0FMeo"}]}
    - cf-ray: a1f7d4833de0effe-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 23 Jul 2026 04:09:31 GMT
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
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=AVRl9wTZ24skCOIYC5AwXakpIa0NVoVxljEK1f%2FIgRdmExq0rKtsME8AEf2vsQfse%2Bmr8S54H9xz2%2FIDyQv0yLmUJH4BEZXqL6Gce9kFcb6jxczmti7IpO7ENA9HSVcbK7mp%2BtTLWjFP"}]}
    - cf-ray: a1f7d4858a662b29-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 23 Jul 2026 04:09:32 GMT
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
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=n9h3AvvV9skmat199Ty0alJ0rcA%2FbXj0YVzsGig%2BScGb7NMRkOWo1mDKffYuheUZZwrr%2FIRnd6t7LcFXLjJuBN1qRv%2BgMriQ8MX59BgWyS95ZW0Ckte2u%2BPRDpobbz0%2BecQNESwrKkNo"}]}
    - cf-ray: a1f7d487b9948fc5-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 23 Jul 2026 04:09:32 GMT
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
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=YXYLXGqHRZD1DVB6hPcEuW9ufiM%2FS2sHaR9WV5TqEyojyAtAHU9l%2BxWqyfz%2BQ0yO2QZuJzKsIXsbGQr781ddQvTWA7F%2FAaTfdYWHcCbnpspCnskxe5%2BVthAF3GBeBI3rbFZsufSkay6V"}]}
    - cf-ray: a1f7d489de09945f-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 23 Jul 2026 04:09:32 GMT
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
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=VveI%2FocB5RZMvudKSpvV4qHp5gnOw%2BAtdwIN3oTVwftPIB6ZW53RBX1sizkMJ0%2BZmqHMmP%2F5%2FrJS4lzAzYnNZepyGXoWA4MaM6%2F360BW1u3Um7ftknqZm%2BkMZJcoXMu4rvlD3ZxXpssh"}]}
    - cf-ray: a1f7d48c0d4a2af7-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 23 Jul 2026 04:09:33 GMT
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
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=S28pLZrZshQMI%2FW%2FTK07NTz0oAenWFeVC3xlCJ8%2FYRle0SoQlHV%2FjNGTF347zGN1scvtTrtRHE9sRh832Ds8CsPUdRaTR0qRgNDYat3wPBkxMJo01snAdCboLnm2c9CRVNz2sfMfbG8h"}]}
    - cf-ray: a1f7d48e39c52994-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 23 Jul 2026 04:09:33 GMT
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
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=43k7bE9LChpE5r%2BaUICuoMetDC8ORcodjqwNO92KRydr4XeLnmxmPxqrNlwA0H7hxyj0hu1DJKKcVKo68SJ%2FyJVXi0ioLUy%2BCEBwhRTQtuzef21IlsHdzx%2FZIb59LR9lTZsHxL060DJ9"}]}
    - cf-ray: a1f7d4905e78fc53-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 23 Jul 2026 04:09:33 GMT
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
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=gcY2Fza4NrXJrQW8v7%2FMU29ZztGZfKB9vaWI8tDcyZ8g6AQs6EfNF2fI616p0vOGRFhdeL57ztGyau%2FRtA7huLWU4QN3bIkOj8YH0ZSFpuJ%2Fx7fsXb7jWhmXUm7lYvp1xBiG0UFakcmc"}]}
    - cf-ray: a1f7d4928fe02517-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 23 Jul 2026 04:09:34 GMT
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
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=mSh8rSqQfoqQ3KvlGcsSewfdhVSpaOL9gPcJNzWk9Z1kAa%2FTik8xxe7NYoHwU8SBXXzBivPZl%2FLF%2BhyLd1YkVJGmzkhfIS0hxPq2wkQVbeoIuEdDcxfAPETHmZpYkXE6KRTwUfp1XLxi"}]}
    - cf-ray: a1f7d494b82264b6-SJC
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
> 37 |   const response = await apiContext.post('/api/createAccount', {
     |                                     ^ Error: apiRequestContext.post: Max redirect count exceeded
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