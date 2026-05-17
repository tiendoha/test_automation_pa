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
    - date: Sun, 17 May 2026 04:47:08 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Tzuh8n%2FN7ebfZMXm0u7MhY7nEMQlwgZ0RBdNaXy3DLseTJDLe3z7D4xzXS3hmJbniHyeCM33NUa6YuK3UHFEKTyQW1n8npB59y0Mfj9z2PRno8aTqcklXa1CS3jHrTlBaz%2FPskhc%2BGqU"}]}
    - cf-ray: 9fcffb7e0f6e1354-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 17 May 2026 04:47:08 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=JbifZpfcoGjP2B1TBLGrfniMkQbFRwpTOAuHJ4wf1YD9ttUAtXKVnZH6BmCLCAqxyyDNxENUSfVpy%2Bz2oz8mSva4ac4hGYQ0Uwawzvf3ZdB%2F4TRi8P5hddKbFPmWd8QRTNfTYy%2FVryZ8"}]}
    - cf-ray: 9fcffb803ac5f46e-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 17 May 2026 04:47:09 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=GzcgXy7HXwvCpugV8UmevBX9tYoR16q26RaNsFH1wLkQwAOUDu5hXVIGVCZqBw5d8JDlfZmB%2FHuoRguXzNQNSkWSFASCOlVZe77b2JYBHeLjRpbEIis0V6HOwLBC10P%2F7JyOC1PuBx%2Bj"}]}
    - cf-ray: 9fcffb828b3f4b39-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 17 May 2026 04:47:09 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=a64cDdNtOJrfDKNTBb6TfPWzi09EFXK8sAvEMe9iRsWiel5u%2FGaElgkBxvby%2BoXi7UbNz4k0DMlzYoOA7EXrJaJ3CJw%2Fe%2ByfPDsAZvAxR2ErvLCq90DN3D%2BYuzXBfbTCoC60vaXyyFEo"}]}
    - cf-ray: 9fcffb84af2115e0-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 17 May 2026 04:47:10 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=OH5crfTpCeT%2FcMOSvGrkJ8CuTHXph%2B8AlmXlJWMKcPj2iVlLxC9NLEdftCRNAJ3PLJ8fJQ5JmLLOQokg%2FexcHTH3zK7%2FcVDAuQJ%2F%2FD2mFavlhXgyvnI5g4hbR4pzuPyAyO5n2TVdlq09"}]}
    - cf-ray: 9fcffb86ecf3fa6a-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 17 May 2026 04:47:10 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=e1%2FEu0OoDkRro0iryp20qGfshzsPjegsyPKeugl2WfQsBcALdTdCofTlJllkswF%2Fq05P0PfrhYvA5szzz2tk%2B%2B6ZOJW4PPAEl9VpmJx34B3tLWW9uh2EEDpZW0YYN5BdFR4bz6i8NQnN"}]}
    - cf-ray: 9fcffb89eb7d2a56-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 17 May 2026 04:47:10 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Syl6x8WYcJb0kLFs6KxwsDulZVQ7xExRPesMto8ad6iUVIWiOQNMwu02qGXbwhIvxGS%2BLkUAnLUMsa15yTFO21WHVRUiA2i4u21l154pgwPT%2FVBL9XyzTv8O%2FgkZEOhhWDGkfJWC3su4"}]}
    - cf-ray: 9fcffb8c682f0793-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 17 May 2026 04:47:11 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=FSs1IRQuY%2BgNN02UsJI8vg15jyjfZHQQCdFraauRXNHNhPY%2FYcgTWgs%2BvdoHE5avSW9lgbK2GVoDyEKl6cSjkSyEpfGgEdNl2EOCGvBYTLLOeAZtNoCY6OCpH4Dwu6gCKMlXxDs68iyg"}]}
    - cf-ray: 9fcffb8e8d4c64b6-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 17 May 2026 04:47:11 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=vH8114aNuuaNGuOvFa1bbBW21Tl%2Bbq6EAg%2FoqPCG18WeZT3IjnjoKkZWyXLt4nPGWJqSDuLM87dPEthlXaPEmabTIWbnPsUAmZFxrUR%2BvtwgZi78PjHwtsnRUZxOcmMdGaNu4j9QPUaK"}]}
    - cf-ray: 9fcffb90b80ad049-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 17 May 2026 04:47:11 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=gQuWHPyO600HjXHsgbxdD4MrAbDl2%2F5dkDuzJ04ZLto1BJK26%2B1OGZhE8ZiwtRgDtwvNEz7Hs8BxKUC76G7jF5neKlw71nhXioWDQlMSk5knx4enARadmQ3Z2CIWgd1cH%2Bh4w8OBpZu3"}]}
    - cf-ray: 9fcffb92ea1c9100-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 17 May 2026 04:47:12 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=sinaLxQwLDWeW2UUpvKbcIOMSK63qYrHUQZw%2BN%2BrDhzNX9eAXocdKha6a6RNphYB5csGf%2F2Bc%2BVtDDYaShms6G0DNjyXVG5o99ZtaeosoDmruGgPJCh3iqo%2Bvfb0Lz8IrLZ7YNfn1Rij"}]}
    - cf-ray: 9fcffb950d2afb38-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 17 May 2026 04:47:12 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=IFOUaSUwvVZJFHItRIBLvpPKXHN1Dze2SwTsU%2F78HosSEhl%2BPiAI4K%2B2ZLWLyJuYFxnuEz9NeDPG9w0YHY4r2dXFQxsPQCW9p5MwzXH1qCsS3V0wdH7uAwH%2BtY2WC3mnT69%2B2iYwbKnw"}]}
    - cf-ray: 9fcffb973dbc5e49-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 17 May 2026 04:47:12 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ITihaPmnHg74LDLglqOZUC8UT56RieqORKafpwt%2B6Lf2e%2BH9Bb%2B5PRXykZBbhI8MjirooxQZVEoW7spiC2CcPCSK%2FGKQvffM3ed85mWzXZjtX4ri3chEc8DKVoNs9hZIYEO9wpoaiSQk"}]}
    - cf-ray: 9fcffb996ad75fe3-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 17 May 2026 04:47:13 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=RY1mQ4FWYSXxAdL7bMCy7vTUIkOARAOCW87xFBswArqKrySHRr1P37yhA276vktn9ahOVHA0K1TZzqFan1rcIkJHumqa9zEI1fVqZGIf9zQH03pjROw9vSmEguwOwvc4umDHDBalNOSE"}]}
    - cf-ray: 9fcffb9b99d20a83-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 17 May 2026 04:47:13 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=xH7Iaxg6eUMOEzwizno6CSMzdKxc2WEndFwa1AcvoUyRp3EZHUXt8%2Bm94k03MYL3WW0G5g6uZXF4eC0kEA1Y%2FNoeLavaT1Xk6nzfPwTe5hCEXnC1BC5%2BSzmL3iIB2LvhQ3%2BTnYe4rCTg"}]}
    - cf-ray: 9fcffb9dba77086b-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 17 May 2026 04:47:14 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2FfrUdLcR2WZHI74zmZWpElFfyoJt493ZulatQH%2BNUMMwHbXqjINy5rgxWBx5zOehxPcFOncEdkGMvIZBSimH65B252qOZqPiAxYLGIgzu2iHSDiqqqUdLiD97rzhsjQ5a23ckfuXHzix"}]}
    - cf-ray: 9fcffba04be1eb28-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 17 May 2026 04:47:14 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=fwKofJlaLIgXNZaw7HYILH5OqA15x6BHzrGZHCBxSwo2TjWZdNTn9sKDLfYjviPggiXCZjRxIQoW80%2FRzQu5lJQRqDH7DozWkipMFR6OhBnTFfrEbJO50ohuJA%2FYtrVYpRnY2nn97nwz"}]}
    - cf-ray: 9fcffba2de2b5c19-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 17 May 2026 04:47:14 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=X72tjG2JH4lHHKgZKHrv%2BozrRTDSKw93kdLLXak8aBwsl%2BjhkA5RQ6oBbAQ03Q%2FLP%2F8lFy9HmurKshe8xv9z6RyTGTevaa1Y4bS6V%2Fi1uvgOi7AVtYK44MEe6Io1Rem85SgNdbP2h2aA"}]}
    - cf-ray: 9fcffba50f5138ce-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 17 May 2026 04:47:15 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=LjeLdzYakMjPAP%2BqnWD1ONLYQB8v5D3cHzUGHxfH1%2FlQwEoCmkR4uHbyg7Cs6hp4DU4HTk%2Fgb8OWEDm1w70OGi9CmlL202XV0TMEG%2Bvop5TltTu1w12wsMyndw8TjYZV2VM9UNajrGpf"}]}
    - cf-ray: 9fcffba72ed1ea80-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 17 May 2026 04:47:15 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=PPMvXhDlz4%2BIRES50jkp99NR%2Bi2h33f8HVc6azYko3sbTZCOF0TKT%2BUjlpd31Tzjlms0fabWtudPQRqghBeR%2F%2BaFgI9%2BzGKUHmsiQQ0ADQtYhcI5GYq87ajx4lLQexkwE9fydtsM0mCy"}]}
    - cf-ray: 9fcffba95d87fb50-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 17 May 2026 04:47:15 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=NB66KJeiWaY%2BykBsBroMsV0YGR5ERVtJUGADQk1jj8Nx2CllZUvhxtE7Di7s%2BZzPKkKbUTt7EFNFL7Pz2ISv3mHuqdV%2FBFprM3iOS7M3YQ93TrUEEQ5%2BFUhBQilTKi48MUoK5mW1FqKr"}]}
    - cf-ray: 9fcffbab9e4a15e0-SJC
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