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
    - date: Wed, 17 Jun 2026 05:58:46 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=vsiTVLHrOpe%2B1SmnFAT8YEMKEWVoAVzDQItb5Hxbbzc6066A96auPZNdYY0v0eHqmEfGzBUHlZ0%2FVmCVdiO8foxofgX0Mn9xvTs4aw%2FBvHxYV9BimB4x5%2Bbmr7Zfmeal%2BG9q%2FN7HqwfR"}]}
    - cf-ray: a0cfd30b39059d52-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 17 Jun 2026 05:58:47 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=p2n06WC4eqg0ALU%2FVFUBvihC%2BBHnQ18NUrKIQH3lqupaL7ZWHT5XExwX%2BspjGyYMK3IQrmKE1RutgcWDIFCL%2BORGEYa8RZisbjXSesdOuZZGbX%2BldZ2aGqP4fuOy9AtnzH%2B%2FXjNfXH4q"}]}
    - cf-ray: a0cfd30e8fce35c0-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 17 Jun 2026 05:58:47 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=fLXrv4Ax8O2SxlTCvHUfBt3w4fIb6N%2B2K3TiKQTgRIqg6dWm4byQrl%2FbkJ4znehUjMD%2B1ppObztLKLbLFrRA9KfzQ5H7id3xiqI6WgE%2Bbc2SWwnzCRLGthdxv0CdbUNzAmaATsPqqeDH"}]}
    - cf-ray: a0cfd311c8bc0012-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 17 Jun 2026 05:58:48 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=MEP%2FnwN4Cv0c9k%2FrFrT59KDEylNbPBHhzkXl4oN0BCm3ff7Z9jF1hCl5%2FgGyWGhUKwM1yJn%2FDtKTl%2FD77YCsaXz8%2B9O0VRqKzPDTnzgqvyOcGfa44xTPXAXCLs4LTGRDR8w8kKzuxhj7"}]}
    - cf-ray: a0cfd3150cb91e1a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 17 Jun 2026 05:58:48 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=4AJMFnvrq3%2FhcbOf3JRlP9JlryKLeOA2C6rsC1MHpLujrH5OMYnv%2B3cjte8MeoNdSp4ekiqxzshpcRe0X75IN7fwbJh%2BtOk0K30GLh32KIFz3TIrjN0tTpqzTzf4%2BBOVKotnYADp3N2C"}]}
    - cf-ray: a0cfd318bb4de804-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 17 Jun 2026 05:58:49 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=zaJeKpgcS%2B%2FzY0seBmlZdzMTDUv6z3WV%2B32meNyyGeQu3aqQ4g1n%2FjLfHuTrATjX%2FIvIZnsB9wQN573ml6ClkkauzopmapifhUK%2FfwxWcYXoq2GO0zVLsPG7QxnOa9wl7snQ7x4JYkkF"}]}
    - cf-ray: a0cfd31c0b75f13a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 17 Jun 2026 05:58:49 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=WX5FypqqeCHP36jwCErdsJLXDFyFVqSQlZogBxw4vT7xSwOfrFpe%2FoQoWEjnP2j3ZPo3dOwUYPN2qmmou4%2BaLPLJ09D3SoezsHJQbwCmSO2DQmnPSkSfeTa19phUhyHUlNiXt54jvhiW"}]}
    - cf-cache-status: DYNAMIC
    - cf-ray: a0cfd31e698ce81d-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 17 Jun 2026 05:58:49 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2FShR41cYHI2eQA7Omj7of%2FwdtU%2BXBB6g9LdCR7UuezgB18qrUC2yR5eEw4kyZdHrARAcvPXxkaymIR%2Fey1oxYxPZnECfy0Z5AJ%2FmVOYBh%2FO6C2gHAXXweoPN59kuAbzHRVQlFkJHrg9L"}]}
    - cf-ray: a0cfd320dca3e82c-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 17 Jun 2026 05:58:50 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=WeIwyDWnGmgi9VOqgeP07MtO7O0ZYLkyHZGKQNLCeq3ZlbW8nKEjcIL07486gCXknuzFjy3zNlE2%2F%2BoOuCeKOgdlbXhUO2NwLJK0Q8O%2BOnlRzcK31ieuBW3QxUbG8R4pDkPRSHE4TmLL"}]}
    - cf-ray: a0cfd32418dbeadf-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 17 Jun 2026 05:58:50 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=dEf3Y89ku87fkex1jPwjAlf9lpiNVOoBfvX47YaRBkEfFp3KKaYMc3H8VbbNs9DHqIEYwCRziaGJHqTD9NLjP0M5Vx9MMDhhVfNeOw0W5snnxVj7XuXLqQnxcYeAWMeguiY3dSX4LW1u"}]}
    - cf-ray: a0cfd32678f022e6-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 17 Jun 2026 05:58:51 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=lzmIr7AX2vAaL2ISW1AYUdlC7xSllvH4Pm06%2B6%2Bu%2F31jBkrsOprUv5v9sELLiGfUMy7T%2BYCVBZrR3W5hiHxJUOzkqsuXeR2OKIxWGAWoVg2PJZGhSnHLkU3aPFFyZaq07G8b7yWMEGhY"}]}
    - cf-ray: a0cfd328eb7e9d53-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 17 Jun 2026 05:58:51 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=6yNpe6h%2ByaH%2FWViZMp9wBkW6e2tQhiDXeuZXphInDroek7bJ7%2FIoMnn2%2B1YOTSnFjuDxnZqL%2B7Ogzeqmg0h19I7qPjn7JKO8J6w%2FHLk7UeuTOG%2F6osNrUUtB7wgxHxg7cKDTj2UoIg8K"}]}
    - cf-ray: a0cfd32b389cd8ab-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 17 Jun 2026 05:58:52 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=2yk9G4WpVIwHwDiP8vZP2sQ6vNBvqR9MfbngDtPdx9sb4Pms91ZA1kLwan5AddDtyJZd5XOjFjBkg3uRrALx8PcLY8BHa0pOWHcn14rDo69Cm8lUzcL7nZQxCUrV61MDelCH9gAdPeFp"}]}
    - cf-cache-status: DYNAMIC
    - cf-ray: a0cfd32e7ec05810-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 17 Jun 2026 05:58:52 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=r%2Fcw%2BoRZw%2FywFTmg%2BqHEwZfMl2pLEgckN83dtj7Hxhe5Wk2OPZPNzhlUD1rT%2FNzxFT5XTgHJEEwM3z%2BF4XEcWinRpU4PccIGmU8LpvuQdJ5BaFt4oodTaKlZwZZLbVr0dhmky4Qg12h8"}]}
    - cf-ray: a0cfd3310d109d52-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 17 Jun 2026 05:58:52 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=hmJrG9TTsW47ymmnaODxlZriRlDvkSu1VXcwNjLa1gcj0VvW0MdpKbhh9j5N2pBeGIXgeU6TajYRS%2BklEGZMnw8nSzcUbHLM5KiKyiUvyzyRLQcTEfdVU68R9prMMMeCfHWM7yPcS%2BAM"}]}
    - cf-ray: a0cfd3344de0ab71-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 17 Jun 2026 05:58:53 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=X0u8iCBvEZp3Z7PfUDaHrAQlKsUaUjIKGdus5MvyBOJ8WqArU2wwib1%2BQADIVudMgUiz5Jcvf334GBFbgUUGvov3o0xnZfUUUGH0KTXmcTyd4V4V2rJrgtWeddmqrmxpWhucUPrub5zj"}]}
    - cf-cache-status: DYNAMIC
    - cf-ray: a0cfd336bc902270-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 17 Jun 2026 05:58:53 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=3BOLgtcVZehLPy8SsIZAz9Oj%2Fad6gMcR6vWg6hqsnnWejqZVdrlaVL88eSp7IUcZ%2FFleuO0gUrCqn56lhBKQJ3AdjZFzyqWykT79Q%2F5sEKfoyWeAMnzJ0e2TfjF%2Fa%2B6eSp4ijd8PIy5I"}]}
    - cf-ray: a0cfd339283fcc1a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 17 Jun 2026 05:58:54 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=o1Xgj7zgYcTlXZ2mXVGoRo%2BLXaNMtPDedVIPDYMaPeBINwOivea%2FVkpJnqpaOizIrMA%2Bq%2BxSRVdJljV6n8ztM0TY%2BMt%2B4BFANfBV6CR2SnLxyK7z9wEeo8WqU2Z%2BvnwLTiuwlkLgr91C"}]}
    - cf-cache-status: DYNAMIC
    - cf-ray: a0cfd33b8bc91e1a-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 17 Jun 2026 05:58:54 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=pnGpM7onuj%2Fe9YDHFZmlwTT77%2BinMQPo054BYIlQpz7MTtzZSYesaPSrCkedLPOYfNBS93dyPE4wPXdhxt91D0Wj2RFXFRqwamuGISHvssH5wzjubmS0qZ%2BSebB%2F%2BVZHS%2F8wBE5gsE0M"}]}
    - cf-cache-status: DYNAMIC
    - cf-ray: a0cfd33dd968e804-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 17 Jun 2026 05:58:54 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Omn8x0UmG4u3gDrvTNOGpx7tYrbd9E3pnuLLXPlwWjYEuK2OW3609h8QV7J5LOvVUQJhLJhGwe%2B6wlnv4VxTqSZukSU5Cw1bRQb4nrQ%2FqOEFH9mqq9viANTOw9%2F4%2FZ5UfJSwnosKKcAc"}]}
    - cf-ray: a0cfd3403ac835c0-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Playwright/1.59.1 (x64; ubuntu 24.04) node/20.20 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Wed, 17 Jun 2026 05:58:55 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=mPKO7Z4lPCMSbTorwUB0EIQKuIx8W7yp4ghXiufki0MZAT6%2Fw%2BQT%2F7Uw6gUKq5H1GF2oiVBwJumcegDZYTWHbPUIoqDOqMdm%2BS%2Bt1gN53JGvpJ5GBCRNN3TmEkSSxePVe7g0byqprTQ9"}]}
    - cf-cache-status: DYNAMIC
    - cf-ray: a0cfd3436a0af13a-ORD
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