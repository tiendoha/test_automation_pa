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
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 323
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=2nKBq3Guy4vZbBUoX%2BaaEaADqsq9jijcWuLgquRnQO0gV7PeuFCOIEhP9iX3uHPRfayajXmWGl2R7tWiOBV2Rc6f9zk9%2BWVExZhy0qeF5Baj7cHN%2BC2dgRRw%2B5MpDbKJnxP%2B8tGA8qp%2B"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33b38da236e8-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=KW2S%2BBFTrMAKqR04vkqaegOHabJIuA8QiMGhGlzit8%2Bh50bCTzO3CRaM%2F02NOC3k9QZEai12dx%2B0JdIxaZeF%2B0S6%2FGVbc2htzvlc1q5ah4QyAQd7QIkBrFHcldFVpWpc43hgincvO6x1"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33b5cdfa33ed-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=a6F8w%2FlXLjyxX3daoyEd0OXwGZXkyZDtJGrHvcVICGzCLuaZWe0W4MrUZsHqhnpKRGxDKaOvzyWe1%2FEtQIM5bzBEBEKN1rhVoBnqRrW7hKb%2FCeQOnz%2BoVVZLuyWxYkTXDITO66EZyhM0"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33b808ebfa2e-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=QQ5bUxU34EC5n17LwFnPRQ6yzTNNNEgUlzGpTqR3PFiRvmYfC1zFXdWXfzCLtU7QfVwEvOcp4IEAgdNMK%2BwkyfJI%2Bjsd%2BevdxnqnopdAjkKQaiD2KC8h6%2BeVU3WamY21iqCvbs%2BzNFeq"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33ba5ac22734-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=juHA9rzlMV7VC%2FcUmqkXie8Jltvom3Xk%2FqF7Sds6QjkSn6zZ0xxI%2BRAAUGyo1eIZw7fqIyy%2FSDh0niNU%2FKszy83laI87dzapLI1lQJ0gZZWFsgpRXztLw94ACoWy%2BmNpTinar5BynKbB"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33bc79bdc67f-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=q%2BAOtJajefTa%2Fgy1E9csJ9Hqb1n7KI51OIKZgcBFxhNzHKx1RaCaxFEQSQO01nUdmyISK8W95PWLpvljeYLDd7FAp8BwAJZYBf3GZnYeEvZruPxuqfz2Tr%2FDJJijko36ErSjIg499PNW"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33be98c0cfd5-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=V228NHaVgbOEhvvByPx1ekCoUlHChh0Lp9QFW84TBhoweWqcz%2FpAz3%2Bxa3HLPHDYoTkHBn201ZJWpWyThDzn5MBOg5ZvmX6SIuu3goq6Tlw9X6r%2BbdN86WyztvAd2XZ%2FKC3pZL5AEIbA"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33c0cd77fbec-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=HCJxol83LwiIIGLcbow6MKBDF8fPzH9kiO%2FIwDBK07y6YPyxHKu0CznJ%2BuwW%2FSMWoXZPET75pEWwVQCJ8x7%2BSQpwGYFY9qJoThJBP0tg7M5jRcOiAenJIBSWLV1CJicr%2B8T3DWOeyRlA"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33c2eacdd84b-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Nb9mdF4DAoMqSmEzidUYh%2FvSqieNjqWd0EVQNgGrN8AAZ6b2NIxX%2FR0%2FoyC7THzwaALz1nKf5i7Rp6Ryy7XdQ9j742TEJ8BqCRXQGKHbmnchncoSd%2B5QHLqBUKPZJnqfCEpK0diOlPnL"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33c51e6ff3e8-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=QJV8UqpMxgdwVeUUCuNPt7G%2FQIXDZcwKMPFiI7hokv5MdcUJPmQ3MouCcXfN1pKn2NBO8pXfBTg7Y3H9W1aN6K9%2BajPU%2BiyAiBlMOTVcL4hAf94VIssEwKM3kiIqidWZHHQP4a3Bzl4p"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33c7980b4f1c-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=7yPJ2pQ1gIu6NuP%2FMVzSj540VCoeoBAn7%2B4Q3GiLhPuJEXXBRKCZnSp0IxluCFOtJPUNduXxMZNFz75RmkoFRx7Iu6%2F6TG8goJazbQt97E9GYihKDK1NYEAYINjIyKWJt%2BTCcJpXZtoS"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33c9c9fc2847-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=taGomtcjzhjr4s1g%2BsXzvKG6r8026aQHMNJMhiuewwFGi2cwhMMpnBeHWDS7UEZEFDKW1c%2B1pfVBCqsG4wc0gRQSMouTJ0UUXfoZXrz1p5ksuLokJYxC%2BSak8QRNGrE4QWHTvoDozz%2Fs"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33cc0ecd7af8-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Ug6DOwyuJ6Ajm5CkR%2FUppVUQyvgH4HC8Kh%2B0aXtdOUF7mAt1wlUrqbLhAiq%2FHHnhb8Gi3HPXLCsUDzwgEkU8TaJg9eKcPCqvKny8QYZ2nLxV47PFO874X6ei3%2FdQit6fOg1oftc3D69s"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33ce9d87cd36-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=JoMTajV7undLke1rlEbv5zquGOa0HMoakaCzrXTd3rq%2BoYspU25ZqEHVeuaCMyE4g8I2R320OZ39nPKnpqM%2BbfsT23qOp8uvK9%2FGxjjfC7obL5wOhkZfms%2BcH48XVmp09b0xqh%2FlWP3r"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33d0b8e8fa5e-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=u5V%2BkHjRWUqDZUVhO2mM3YviFdSFHiA6cMxMDnH7NQzl4WnKKFSNLmc8VfsWN5BdyPwy%2FqgAmujz3LYJpmi8IpvHpeHTPfx07cAapT99khs0F%2F079n%2FaLBFrLD4iYzwQJP52J%2F%2BfDRca"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33d2eb9b07e8-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=jxA3X5SloS%2FvJjlEFRruJ%2BZB0APE6RumcvKYckxE2CzWTuxh7ldChmoSJOA7Ov%2FTACJY9Q2i2TwIsPRRy34ezaL2f2ec4sUga5m223dYyjC5OnbsJqhp5%2FLz0UD%2F3X1cRNqB5%2Ff7yIhz"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33d52ca3ed35-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=wIkUKytOd1q7K9PUxOc%2Fc1TLiX4Z2pcv6HoukSPxwGMfXeeoA6%2BglZjjGcUBdDSPXmZXZsYQfS9C6XgVtkqkcq%2BIrTi8mJHULNiJhBP50Z7rBNdKMLxwftfhqWmCbfZnUoweuOIL1CTT"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33d74bdc1a0f-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=PhnGLCQWc3hByPrMYF5GOwCqrXiYBy2mPNuuEkR%2BXplk3wH%2FDNYajhQOh7vnXydtDtc2r9EDgPorpTkJ7JtGEiifcVi1IixsjZ50em81rSmR3gzJ%2BdLv6FpYXVin%2F6o9Bb3kCZk%2FSIM%2B"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33d979a01990-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=4aXYyJk0YOmTGIztawOQWdtlmzDSaKGoHPsmKHlWdTzok7JEMXEWjZoFX4xZqxeqUNMvpsvq9zDCdk5j47vp8IHjbIlGz2YG4njBnhbbQWd6JDz9sYvK5Q1GtfQXLS1S3q%2BpLaa2GoeO"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33db989933ed-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=RlqBsQs791aGH7sL112XEOU8zUkKIiuPbFUwGCGqZtSwikgdDQ243IpaZKnixdOuoG6hFOO2oLzSLSurBCGDsXZjW7XKFXtPYYLiJvDrbXOdRnU9C4FcbMEsr%2FDOzfBd4SaUvsqFHDFZ"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33ddc8f4306f-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=1o0qJ%2FgpxkNxdSzGJ3oQBWNNVOmMMM7GT7xQdioFURn9GO%2B3ct93%2F6oMK0jtmd%2Fe%2F5clMzOyC1F04inDtSpUqvQ7YkXXd6PUwVMOi6B1gHr6XpeUhOmBINgYtNyy6Ct2WL4Y6F%2B3KKpB"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33dffbdc1666-SJC
    - alt-svc: h3=":443"; ma=86400

```

```
Error: apiRequestContext.delete: Max redirect count exceeded
Call log:
  - → DELETE https://automationexercise.com/api/deleteAccount
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=HPVhN2QA0Ps5zsYYT%2Ff8w7SJD5ZI4lYT5EjynGN1OuPEYG1lQbC%2BygTwhfCl5FSLGH6ywatvEBf9XC0a1oagvjKpSFSF0mIjfht0%2BdlKloCWhYZ1MD4eABWjbQ9Bnz9ZiNCmxKiqI47y"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33e35e50c67f-SJC
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=QgHyO7vDA%2Bht4O8hggIiM0%2BzrhjDZc1BYttz6wCci59%2BptdUtqb8v0LeA%2FjF09JeV1O5nIwqV8Sh%2Bnx%2BEMz%2FncWDl4bWVhEwArZTHz%2BkHRKfI76RggSXq8Uqx5WPlzXrHwNJy3e2FIOd"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33e57f7733ed-SJC
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2B8C0ZFAgMWlDTzZtTfGP73C5ZRzBjbRaQ%2Bn08QeDMxQEjankPq6CKTdU3ygYBFTAYKd534aAOvaY45RBh9RiIyiyWwpSPxWSADV8EtU5ZEib3FnIP77W50wkv485VoLle0muqrgXF2%2FQ"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33e79c33cfd5-SJC
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ErQqNvdjQx55bb4%2FM6e4v8eG96sGEqcH6GWL40K7vmuic3Ni0%2BdCGtOuXGq6GaLYbJLRe86ifByQWECzeuycxQigoEPlylmlyCs73avYoU5F4OMXaV73%2FN20vAKdtVTlx9HNEY1keXVx"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33e9ca84fbec-SJC
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=GAWg%2BqpJ3H2VbEbw2Yad5PYh8zEdojrXvlvrj%2BsF3Xb5yehPWPTNoYQY%2FlnBOI52JbqUH7N5Aj4CpmHe3Anebdhy%2Fz7HxltNzmf3bYusp46PStTzwtdGJ%2BFLUZXM7ndWW82zu7yZL51s"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33ebfbb6d84b-SJC
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ylLasj1pC6%2FByoTyddODh11e1NasRmJnx8fku7hKDTO0Y1ypsfkvBNaqqUYV55Lq29zIX6NEHNdh2yuwbLJJ4oDuZXMPLIo4f25R%2FTx6COstiM7lNAEvD4UdXhyATkSoZFdkr8WlUHgN"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33ee1c45f3e8-SJC
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=LinX%2FU2gfyhuW0EZ4Lb%2BWcqO3G%2F5IDIH0Rd%2FlWumpImgNofr1YIKgrmIanL9Q3D38z9z02CxWV1V%2B%2FSFJ3tQYiuAa4gOaKrUi4mqSLIAumLgp6Wp5CLnTnbE86vVUry8TOBWH4wIDqM2"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33f04df0168e-SJC
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=A%2FNCcutCUxzW%2BXGUSb9qKkqvCvn6bnooo%2FvLADpdzWSEiIM8stDpEGirlpKs%2FTphnx6Vf%2FtDze6055jrv2A5jB%2B5J2f95QGu1s3tLTa15E4udK9qpBmBN2bvCJ0k5qwluWslmiwUGfqr"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33f269292847-SJC
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=AOjEiMm3T6tI%2BfBnDGOouVL9r7qFZ341HvrydSndeqVfM3iglcpTRUyGgwIvv2OeByviek499H3T%2BQwHYb4kXDFLxdzpEfW3%2Ft5J3nm9xABLYC30IOUBx3nT0wjAbTgkEb0U8NfpILfN"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33f49c54cd36-SJC
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Ow4pbbclldH0rFM5yM%2FipIF6tadDzY7zvBYSGnGYQZObnz%2B9ITH1JRMu3aoo%2BDN7anxNPoag35NpxUs4QASxonG7NO2wq3HQwNXNpGdauulWh8NirhP9CaY%2Fi8DQ0Wo9qHJE6vuNGupF"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33f6bd5b36e8-SJC
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2F6uc%2B2uanH9BqwEwrQmTjjN%2FSogQRsBJ%2FJpkDFIgQBmkGwK2ggOKJNvuEQrXx2n6vScdqJENpmJ9jiLxRKPcFmnpqhsEj46KAl1LB3Wd%2BlitBYAIu3jFfIBgNOqG%2F9%2FxpAjZ1byW20Mp"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33f8df100065-SJC
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=wbZtSENXWnq5XiBl7GzM%2F%2FYyX8RabDCYEWiWdyIHEu1vQ8Y8Zl9vuoNmrdsugDPW81CRpeOpfNdng7xU54Pm6tvcWhyjfIpWjkzu4cLft5IDW8VMIcAOa7b5szmfWVDuYPkX8oR2btt%2F"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33fafc724f1c-SJC
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=7Tm%2F8aeKmZV5hfcltKnw1XFTgdCUvAJGs8bYG8MXKJUI5qEB1iuJhd1Y8elsZR4cOF8o5MSZfgA0TUrgfVA3uENMLogxHQJvsN661zKcFW420Cz1sXhhrUwVjiIbtNVg54OUtqXnStu3"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33fd28111a0f-SJC
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=gSOKaeyvf4mgOTRF8OG%2FfwBVivoyAN9wnM5dGDDqeX8DJcw0M1ulHUQABcIDNqx1CSxv0vnDZajF1Yty8K16o15s5v0ztWG1KNBrNOINTzMNk1Sy%2BVzI0OLLv%2B5G%2Fd%2FoP68PS45nURyd"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a33ff6d67fa5e-SJC
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=CRRHawOhsCa%2F9qSxqf%2FH3CiZu4fVLKLj%2BFIrmVMCqoFzkSsfcypOp50n4Y%2BXRDNe2mspCle1FPEXgQf0oe3wUZoUiMpupDAMqpUPbr4Gud3JAHmDvnrBOGp3Hkq0voo8EXW9KWax6OGd"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a34019b6d33ed-SJC
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=rEKJ3dM9TWcVXPS2JeYW%2BrfwOnDSmJZ2XyYEFUCou5qmWJeO6AMOD%2FQzChMLnV9UAZT3WsSJ3DW89oMQkIo9c2pzCIhjF10y36zggh%2BB%2Bfx%2BP1ojrnqH0tiaa2SBzHsDXIMFwcyzxTBC"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a3403ca75cf1f-SJC
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=NOH3ibvIBZZgbz0gzP24hlCeCa7uTgUm7X5CI5SlbiEh6fCtXfh3vgh%2FjEjBZnrByrQw4Sg%2F%2BLaytqQxapQYDU%2BlRRIw2kk3807cuD%2BqvSCm5VBHYjOkmhm0opx563aGfmb%2FeStq0bse"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a34065c8fcf2a-SJC
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=aDUCzj1gyLyygN47s46Ct2mC%2Ffz%2BnHOEvW6agnZBE0WuhiON5NEJUtmfDa4P44Y%2FHmjjQlYR7M4IW3lSCFdGhFvgCqzNGoF1u6VKfL%2BQAKe8%2BsBx%2FlyRqrnz4cVBwmPUFpbMy3u3ziqw"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a34087fe407e8-SJC
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=zTyrI2kRNNc5FiewCFZW%2BENQ43GUNC1I%2FInxolOdSlRoSb25BIfsPdOoX5X4Dv9ffsss708LDqvUFU%2B9TT0HCaDTZt5%2BLd326EgXEO48p%2B%2FoKj7abOReb3jvGZiEOX6TJtoGue0BtzMa"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a340a9d2cc67f-SJC
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=1UqUS3KlI%2B8AMUttFovCiltlZeq7Vj3wymf%2FtaXdE9xcWHJ%2B%2FVizBR4iASyjdbvRDJmol8%2F264h7k1gQaLLKGr684SVbrg30QY5fPdf3%2BlOm93KhrPmXMGow7CNQ4uebklUBEBQF%2BmPJ"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a340cbb5f1990-SJC
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=jsXu%2BWmf%2FKy84tq%2FUsm7Fm3oDlUyBXGXA6RXEB2EL7Xgc%2FpZ%2BA00B36Tng8vEvc75%2Fv9AVsejp%2FMcP5xOpXP4RgHtRD7yZ%2BcLTnqWSOhZnsjwPpTIU5slAYkLydJzPtVDLZO%2FIZnOd3%2B"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a12a340eee35cfd5-SJC
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