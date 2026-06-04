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
    - date: Thu, 04 Jun 2026 05:50:07 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=6Y2X%2BVkGskr9O5Fj2xbB6jzxBBqbp8oUKhHhjSluWSbQOG9u7A7JuND9SoNcmKAV3cLRl7U%2Fi5W9GI0nJN5v0gtOw8e%2BnpKRNvNmArm2xG%2FX8kF1J5U5vhkJmh83acklWt0IJGs4Jg8Z"}]}
    - cf-ray: a064a8801c9be894-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 04 Jun 2026 05:50:07 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=36laUL3KynXFz0BRGfoe2qwKc4Upyv0WJO4pspyBkNdtazS8m0R8%2B8xsKym5QAN7YApQoqKMnVBGHmvKtDwVLJZdC4l71V3A5ykdTo3InTm1TmedpUTudT%2BCrwG8tcV3VRce1TdX%2BNig"}]}
    - cf-ray: a064a8838fdb2cd0-DFW
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 04 Jun 2026 05:50:08 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=d69yYxUmF5ekp9iiwBR8ZXsCaQZJat0m24nP7ddRkEGenVYXeMSE5H5ys8OaIoGeZlpGAihqPe1JN0xqEgqISc1o9cqaaJb5eRpbqu%2FgG%2FJvJqG0MZoKW5uaftqehBECX8S3CNu6SzNu"}]}
    - cf-ray: a064a885f8b0d940-DFW
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 04 Jun 2026 05:50:08 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ImFt5L5Ae2zp3KmFOUe5p9lqE2fe5lz2tae2T5%2Fa9rm5JoxyTOUUQtB%2BJKdAG0oO%2FHjE2iLo5KT%2FW3qGoVNgZjpC4UQglKdHECyZbWWI0p8ByTzbqKovFhuJp%2BPdPAa1yw3NVQ6e%2FCKQ"}]}
    - cf-ray: a064a888f900f061-DFW
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 04 Jun 2026 05:50:09 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2FeIFfCkckYm6yfRj9ygp%2FaZmUE3N2%2BInaaXTC64L3z9KtXfIr8vqLOXtPre95YR%2FuMzrWuTu792CwshS6osey5I1HUfpHCJh9M9jYFVl3IF3oF5%2BXg3ZI3l6Bih64V%2BCAQWvUf1L3EQP"}]}
    - cf-ray: a064a88beed6f061-DFW
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 04 Jun 2026 05:50:09 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=TW0iC7ogH9gs0cw%2FIeq3fuGGMFbBA8wYYNlxoiPMrwVZEgpKEuH8FNt2Syers4v7nNk0vRrhJuD7gyamaTQ4pn%2FzTzwz2pnrgxch%2F8oa4zWxS%2BwvzHHwxxrxkrRZ9H8bg94lqiWs0iMh"}]}
    - cf-ray: a064a88e5b2be1ff-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 04 Jun 2026 05:50:10 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=bcxadU1gTW%2BnMng8ggVoEpIIlfLSpDj0uxaT7BaKyzBJGBvud%2FXJIz2ivuRif4mq1CK6n%2B5G0e5JFTVph6S8AyTdGvC8AfYzJuDXnxY7gj6aTHJuRFqVa8CBQrFYmfqnZAeN8DknBrfJ"}]}
    - cf-ray: a064a891d818f0b4-DFW
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 04 Jun 2026 05:50:11 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=SvRw9zfQeng4X1cVY9dp95DKzyfO8NBDahcugK1TNeQSsSv5d5xA6cdWy2nCwnnUN74jOtUnRVDPC%2BKivp9xJDITb%2Fj2sAgfVvP5wE6Of1su3CBjyA1ySvhYPHIO99u9%2BB995O3Intsa"}]}
    - cf-ray: a064a8959f66eade-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 04 Jun 2026 05:50:11 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=u9sMWF3kLFv59yZkm5auDmwRWVWX4DwP7ZcLYC8Glk8FjX0gIgA3fQJjwUVNVX3Iiobcf66xzVMWGSsY2w%2B2EQPvDUG6dwiQFXUc04melVUqhuCNTMtsCPYupJ%2BQ6fbuMph2qtoxyRiq"}]}
    - cf-ray: a064a89909e7f887-DFW
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 04 Jun 2026 05:50:12 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Ak2hgOO5UNkFBSgH68V0ys2tMlNV6XAr37wHB1q437OgnhXO0nYi%2Fq0BOOxtBFXFW9wIZPzE3Q306R5MfKRyo2XFwaCc0mivJa0uzQL1MvRkDtvT2lxb5OAzGgjvimoFPftXmKQFvRFJ"}]}
    - cf-ray: a064a89e588c38db-DFW
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 04 Jun 2026 05:50:12 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=zKwSSfUZEwFP%2Bhl5sazwcbdVlsOnaN5KLCB%2BrUQuOTZaY4Gum5MX0qWWpe3NhCa%2FwIv6nhe68R%2BZOqGbQhRvSBMoQAu3%2F%2B4kE7GmCH9lVyryb5glt5sdWI3rJprLup777ZtI7aJgybS4"}]}
    - cf-ray: a064a8a10cc2eadf-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 04 Jun 2026 05:50:13 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Az803svGrrAtA7n4Cz9E0qHHTxi64chP7%2Fn1cZsd70NTedtj1vh%2BfZBezJoOGqWeNhjEgBLJ5xJDttNv6trzXvuXSOTwN6XcVvmxMJA1gQazPFw3GNyY2Ip32LsO1w97sAbcZdPdxscR"}]}
    - cf-ray: a064a8a38a8df061-DFW
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 04 Jun 2026 05:50:13 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=sjOdzlwQWkkRa25wGJeVd91l97L2hyOo%2FWxQJL9Dkv%2F6x6Eq%2BUz3NUGvrZUze6oD8HhJXxo8%2FtzBacP1gT2edZyE3m3v6bK4gaBHN83xgzMjc89NHE0n6S6yMdIbcb6hgMYur2EakwQV"}]}
    - cf-ray: a064a8a68cc21246-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 04 Jun 2026 05:50:14 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=oxG2mM58GC2l481n2erDgmyn%2B1NVy8LiiHAWmeoJkNM3Y2zRIDBBmO%2Fj%2FUm8g8MZY858FI%2Fdd0FEdAeQvy4DbOcqd2pY1v3RfJTEYTniUMvCciQk%2BXag3E3NTYco7GMg9F%2FM3Izw%2BgLR"}]}
    - cf-ray: a064a8aa09fe2cd0-DFW
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 04 Jun 2026 05:50:14 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=M5IPtNN0EDtbu6C2aizdNdXZbRq8gBckenp7C%2FHNh79S1jvCTiu5XzQq23JvAUqSMm98lKF4SUgGWxiiP4UKyw3u3KCsRaUdacslwHryD3OjD33wEd9Qvo5er0YO6tC9rKIOecvmV6jl"}]}
    - cf-ray: a064a8ac8dacd990-DFW
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 04 Jun 2026 05:50:15 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=lQOTsNwDwgWjOpSFKTtfoEHyIufTHDXCsQN1UOc%2FaTE4yTQJiDbxQ6ybGcn2p9l9BSAOuuhW38lZtFlLtp24QrfAybnQyov%2FLuM%2F2ohMB6K9rNQOwNancfnp3ehRnBajGuRXyjvU38Dx"}]}
    - cf-ray: a064a8af6c8ff061-DFW
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 04 Jun 2026 05:50:15 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=AQ0Itqxv%2Bql%2FCa6%2BFTNkH5Ki1qxcwBHk33Dgd%2BiHEZ3ADsr4jU2SZSnfPCzEeHrMa4EZH%2BSJ%2FkxlNZ2PKiAESTpj6Tc0X82g2po3Pi6FQ8wIEau4BvN90uy6Jn4yeidTrE9Lusk6UQbI"}]}
    - cf-ray: a064a8b26c6ed940-DFW
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 04 Jun 2026 05:50:15 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=dlUXSud77wG1PQBqcDWUaWCOftjqPfl73N3LHYvUDOsMiYPrP%2Fw8yUiUxWqAQMxubIF74v8ZeJ4GcJtTbd3exPIUCmMvjF3706C%2FKikELdx%2Bo%2Bdmdww5qdnrPR2cv8WE0LIuAK7cVu4p"}]}
    - cf-ray: a064a8b569b4f061-DFW
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 04 Jun 2026 05:50:16 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=rIco3o%2BzhssdMwOwofTwFFjWXcqPe2i7MU%2BXH7it9CLQW8V%2BmbK%2BtDjbpSyagKwuCB%2BD%2FXWfWouZIyPTXIFBTfo7ejQjfKwVs0fGN0%2BE4%2BbU9MN3K2Khk9iw%2BaelYmiwtpJg4XK0RrIa"}]}
    - cf-ray: a064a8b7f9bee1ff-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 04 Jun 2026 05:50:17 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=I9qAJmQaAP4v2dHUuyz4ASMPBoDzxffSFVfZ2XaGXGszhYegL3xrvwyIVclXh2eWiMbpljzIxwWVUvu4DJIb8GPH8Vxyf%2FDsFrO0t03sb5Lm%2BsbQsMyu1eD7E8RxInEHWdg%2BTEAkFfPg"}]}
    - cf-ray: a064a8bb4eefc694-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 04 Jun 2026 05:50:17 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=1IaBd8QNQkjm9cdPEGTXjGlh%2FX%2BmODxx%2BoE4yoC1tmphxurIjGPaNUp7Rd4WQoFBxfXquRGm9QfhNf1XOlwb7uju85my5%2B2ELmLbEiD2GstcP85pQyG0NykH%2BobMofqKDy9Am7zW1sy3"}]}
    - cf-ray: a064a8bf0ef4f0b4-DFW
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