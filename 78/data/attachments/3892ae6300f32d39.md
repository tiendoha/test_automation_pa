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
    - date: Tue, 09 Jun 2026 05:00:32 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=uPsD0T3DklwA3Dlib1rGlOLpndtnXrQHLaiut%2BmaHQ7QNbiOgwNdtKLEWm4ZK%2BWCqLy5NKQFjJUVedjFPix5T9BYg8%2BMbMdqC1JmEQ3fIO%2Bxv0MeiKUHR1Jb%2BM6CK4NQOo4qcZyxRsHm"}]}
    - cf-ray: a08d92bea9d458f1-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:32 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Vw4Xq68LYoyQPPLGB70Cd608YVb8dTpkzTWrfQVqA5vqNKB6Hm43kZ5hFOQG6SLkfFgxQ%2B5d9WoClI1lapiB8kbMZrGb81Wbfh%2FxFoG8VO98QngtyTgR%2BzThrpqgDv%2Bcf9%2Ba3229jJHm"}]}
    - cf-ray: a08d92c11b7190fe-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:33 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=y7D%2Br4dPoUvdP9Gn18P2TrCB1WP%2FpMQOPlxq%2B07Xa%2FXncypR70w%2BCrvH5jMpUtuHnjX12MMrgiM%2BoYVwDZKwXZMj1atAszj619TEtBWW4th%2FNVGyLfY4hAt41Cj2uHna5M5R3cxhC95p"}]}
    - cf-ray: a08d92c38fa9c8d2-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:33 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Vl3n5QXXApbSyzIwUVCJT9MlAw5VFNiXPjUpcJxRaPMNYGTtt7a7O9gotbHnUb8WwzEthFdHlPId2EIy5pkofGi4k5ihBMs%2Bm%2FpWa8XBntBSJJLBN0YjFUq9xlRNvd7YvQ2OjvVQcpsC"}]}
    - cf-ray: a08d92c61b400a83-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:37 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Mx24L9soXgMae%2FnIh%2BTj9d4bdlalDbVXJWCL8luqrUFgUXw29X36Zn5Axxgmi1jtV2%2FTbbq%2BezsluEqF3ri0%2FJWMVbB2vcssAXc5ltkmsbsZ%2FtL94eS020s9Pl0e%2FnjqjRYFNfrS7HRK"}]}
    - cf-ray: a08d92c92bee8e7d-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:37 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=FdbHova8WcKIsAZCEyMz%2BuS85%2FBZEzZm6m8rTs0QkAIlmZWyzg8a1H39HMhRQ5PDNZMBaYe9S2%2FDEgaSqrho5l7vAhOWRpLwMgnfDm7nZCKC4zFkZFoQXVQq6CguBUGijrBJoAi%2FRIO0"}]}
    - cf-ray: a08d92de9ecce9e0-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:38 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=YBhNh3pVVsarbGsgAHtZWRb8TI3WWxTtVq4Zg2F74xt3qHEJ%2FOXFXUtmUI5oitGOuj4dMGqCqhwrpS2NR8Cox6G4RBHXD4mcPInWYLzklzKbDUnCYVQFcUiVhf9nokwAql7z75UEOowE"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a08d92e10c25055e-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:38 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=rxQRjsEHOh419iYjcBCRkthcmiKV5sBOQtCXUbZcBAy31XxR7KTmZob1dk4vWjttarSPBiHixfqqkowEQqVGPAm1KNxQCqUdqw%2FM%2FiQfM1wehcshTrXGSIU1HizPFcYilpHhd4cBCCUU"}]}
    - cf-ray: a08d92e3e96b33ad-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:39 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=FAA%2FOeDhHSqRtoG1CA7RocSyyYr2VOQxEqbUOj5ARcheNglTeV2OYcC9i405KUstxnZYpTy01tn2J5WHa8JK4xR1uBi6jflHHP%2BGTSP0KmK%2BxA9RKJu7A1Quwl%2BgED44vO99nLECewKb"}]}
    - cf-ray: a08d92e69deeeffe-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:39 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=CCh8bwQTuXtQBuBtuHU2W8PP6EPxo7QQVv6aqQtvbepFAwLyVWk9jFUiOirEkP0fhcGyPJr%2Figbo%2Bp0l5fBmitWYRLwdjSCuwhaSDlKWEJuA7g7ehE2W6uQglQxwjXrI8oekcY69Lwdd"}]}
    - cf-ray: a08d92ea8addc8d2-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:39 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ArLYA3qlOigchiJVaMKY2Uch0c4KyD2qgInrmicWDGAGEsRB2U38XoiwqC34jYQwuVD15V%2BWrWczOp3fuHqgorXhYOhke88K1oMzuBrFin%2FXsrMvkERc70uxCnroKcYEzA9%2BoGM9xTbZ"}]}
    - cf-ray: a08d92ecfe2490fe-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:40 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=0NlyPHEyrh9Lstfq5vuTIhg1nYI%2FYSK5Vb85p65BBcf2xEyWVHNN5z%2Bait1ORAt%2Fr72YutT8TeyhsrzAGwM0rTHa3YZYDkaMBlSqdGuIMk191QXncSKyFMWov2hO%2Bxraqzdvm4bxnbKT"}]}
    - cf-ray: a08d92ef7c511d4d-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:40 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=qyF6fIhEw6t6aqDBK9TBRjj0uPiMklx6I2lvSyvsbLrbSeggpNaykSulnB%2FRRxs2DGEVCp35crwqw3TKyLSzmQNXzbMaIUwN6PY49ek0WBhfqAC4xgxk19l6RZsoLiBVJccrXqItW1Ke"}]}
    - cf-ray: a08d92f20e8a58f1-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:41 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=wKCsgpHxqYLtuqR157bSDfmn5IDxim35M%2BmWLVKJ9dixcvM80bGP67lmcjHvquF%2BopFizwi3fS5qvsj9i7Z7G9XznZeHd0HwK%2FgcE9C8EYdGmpSJZjdJTs7MwKwvNX78Ph7G8gb0v9nx"}]}
    - cf-ray: a08d92f4ba78a8a6-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:41 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=JrlvvbaqmH%2BmCHQQ6cW6MJm5AUvhUn4V1mMnYmrST9okugx7GkcsJNMg%2F9icHcd%2F8%2FD7Hyut2r41d7R9A3nFAr1oNE283MduNnZLpRS8AW0nYLPuS4t%2BCvOwOfOQ0rLIFeqKz8Nt8mkd"}]}
    - cf-ray: a08d92f77fb0e9e1-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:41 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=9LL4Pwr4tpjE7tz%2Fgvc8%2FWQk6d1zjoHBIrcwF7rEBiiqqAR5GPju%2FpZMN%2Br%2Bjy5QSNqCzLOAoEnekIsMlTFTAy15Lxp9VbMQrba%2BSLfoG5wTlfhIpOXX9rUhupSQ%2FPHVHg2rJVq2n6Ob"}]}
    - cf-ray: a08d92f9c8371ffb-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:42 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=B%2FN9MfpGbUuvrvuBnX5Iri3qO4Behx021bcKaqW%2FZYZOjOVy9yV5w7q1zZFl1j82XTCgp8Gh5ClaF9loLxrlamUtWH%2BC8aPWgViNMnH1VIXOE6PO7wsEkw%2BZIjkqT6Z1XB%2FegtBNmlPF"}]}
    - cf-ray: a08d92fc9ef5eb4b-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:42 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=6LXCP83XmzurqSqRc7CdhrlDrjzRS3ev1K33PJ%2BsMUiSUtIwj1%2BI0wYIH92pRDSqXNDwg02WD03Lh9B3pWdER%2FXwVUYcUKAOnOgCmn7iTnMteG%2F4V9XZisoz%2Fxpru%2BU1UVpWj05K5zdS"}]}
    - cf-ray: a08d92fee8990902-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:43 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=NM5bkAbXC8%2Bw4S22GaIgEJIjwn2W3BCq9HcciEYsnYadloPhHc3OB4xDKUEioV7XZQ8HefhoP7REbFblgwP1jHDtxm514HQdav%2F7zvduEuFZKnJYWRI9kqLeq4p3R4GqUMTHKzLn4SvT"}]}
    - cf-ray: a08d93015a120a83-SJC
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:43 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=9eCDlnzaU28APoFjjEPoiCIvfj90%2BX9n5ol1Evn1ToO73tPLEQw3xS6JF6FSJTumVULoJXb%2F0DOEN14FzTJ%2FCNrdYREX1mZwSz2FhcMwe5T1Yng69IdPfYOhjMcHwZa11ho5pxbMTLjN"}]}
    - cf-ray: a08d93055997e9e0-LAX
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:44 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=TgPxL%2BEp2tMGW21hnCkkDS81lQd2dR89GAd3xLjXeZ0v%2FY8Qdd9lQgV1zAEiHxLN2J5D9H86xmXjRPakR%2Bf7IwlLmDypjn%2B0AqNzaSeZoqGUV0iLoGAqNazRXVwzjajscPaxstFvohch"}]}
    - cf-ray: a08d9307e9ec055e-SJC
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
    - date: Tue, 09 Jun 2026 05:00:44 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=BjwAYTTwzUlqgP%2FB%2Bkj2oOoa7SX3gorqW34wFlSQRZcbmDMmE19Cqj1W%2FGRy4yQEmNvV6GIyU3epzn%2Fxd49g1rmpxABzNNf8KIBRHyqGOFKVJImpW5KKAKaK4%2B3aZEkt2TusdF8bCB7a"}]}
    - cf-ray: a08d930b9c5b8e7d-LAX
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:45 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Zc8u6qiJNbvq%2BF9kI8olhWP7lF2UkDAJ%2BE1eXy5vYVngVjO6VCRlE3lNOV%2FyAt9QqUGNs0wAd%2FephEUpTU7SNWY8Xkpe9WmdDU4vBhKthZB64ce5ASWY5qbs%2BNG4Z22XNoSeotwuz%2Bdp"}]}
    - cf-ray: a08d930e18501f2f-SJC
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:45 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=s7AFlxXTuG4Oki69bLYvBU9ngLJZUM6xPFmQi8Uk9%2FvUYqqF5%2FlEYISS5drDPE8eiB6T6jLEnxDL5hT5RX6uiFwHf4D7ugqj60zJz9c8tcVKcULLD1HirQJvcoY%2FsT45fSD%2FKNLtXNjV"}]}
    - cf-ray: a08d93109e46c8d2-LAX
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:46 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=7%2FMblyvngEYes2NmgXitzYJAShwAYX%2FzPeC9JDVuEGqWH4qx%2BanCObXQS%2F5b5Vpz0N6%2BuwRD7FyAnHyBhVNR3KJhvX%2FgfltBSxR%2FqlMTwqhdhaQLTLpI5VuIV96IAqgd4tySWDMwC7q2"}]}
    - cf-ray: a08d93135e0e90fe-LAX
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:46 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=F3JTmgX3hu80nH1UTde%2BRgOhNO84%2FD0pMAYrxSiEbYeUUQ%2BYrJA%2BnhDMw4iGxdnpCqC949DXqZJhdJcAgaiPsSclH8g3FZZBbaoA21Qbvd6VlEJkgl1Lp%2F3HZn092t5xR4N5k8Kx3OyH"}]}
    - cf-ray: a08d9315d8f1208c-SJC
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:46 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=r30Mad08UhiCk5R1Lw6o9GoQtlB9nMblG41eLrUyKPw%2FqfThEjEwOeUHKhRh3i9Ifes%2BnLRRhcp7uOuUR5UAI%2F11dMBqerpbiiCfxRb8zabDHKjlELWSiBc1%2FC1lFD9b3m1R8x0nviut"}]}
    - cf-ray: a08d9318ddf858f1-SJC
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:47 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Klw%2BaIYoHLcFc8%2Bj7NKNc%2FSLf%2Bh6Ydvu9gy902OW3U9fZts34a4GxiEJcPtlz9I5Ma3XUQ2jNnE77kKh0NPdCpbtVJdZu8vnWhY1hx9UNDY70j3Yy3WjBBrG7P2cG0TJK5R2oLIotfJE"}]}
    - cf-ray: a08d931b5cd61bcd-LAX
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:47 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=EFPcEL9MpOPvBvzIHY6jirAvVDChYGQ4oKnZa036lkliWLaFeEHQ5CehUgDK7dlbFtOyOH17FGG%2BZSsN%2Bbr6W9j%2B92p2daeVXPHXf5W9TTkKDSNO8Z4iycZ%2B%2Fx%2BJseYUiG8J9UR1rUdV"}]}
    - cf-ray: a08d931dffc6265a-LAX
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:48 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=fzR0JTsw9PDE8LQxn1CEQ%2BE%2BhJYioT%2B2apDDGzhdf9jRHsgZ1B3b0K%2BC3iNMC360aO4EmH7IByQ9%2FrSX6pt0FNkMzSDy1yWTwYcTUe9KAncFKvl0%2FRkZmy%2By2lZxy8K0Bewm9RsH2HV4"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a08d9320b9391ffb-LAX
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:48 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=jjJBOLN0Xw42WgsEKkGEKw2vTvlj%2BJgl6zo2Wuaqi3ZShkzLZ8rbY6wPGwko%2BP3qUC95ognjYvSmcCI8EnKM62ZZAing5ebL82rTxVYzjy8I%2BjNRYNKKuhJkf5f4d%2BMHkOnQr63tAScI"}]}
    - cf-ray: a08d93238a53eb4b-SJC
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:49 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2F2GE8BeWsLovOI9DmlFRweqQ%2BEMK9nKWfxxkzSnHoSwkPB3yHLWpOKt5gYsZfMVbUmgxkxiqiZveE9QsS3UfhUNG3UrOwR3U6XDkFES1RhFmIM3pO52PpZ3wJeR7p3%2BD8xRZmTpLXu4M"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a08d9325f8f5effe-SJC
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:49 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=GrXIAaYjyA6a%2BCJYeC7fzSV1qKRzcXxUbE%2BqRAgNYna6kXEG456Rj6Rh8p8vQySn8ZGD0qjIZhi%2FzDupJD%2ByfO8ERnPV9Xa%2FpnbbqJ6eo5%2F0TFI5XQUBVJ54gzyUTO8vkpgfanwEv8fu"}]}
    - cf-ray: a08d9328ce8333ad-LAX
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:50 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=TV3mOjuW%2Fk4LPvJsnMp2bIAoNvCu%2FtbQ01pa%2B1xbkRn4M2DH7fIEvKt1RkrMMgI2CTx0KFLfJVwrgv22BZ7bhUKadsn6EnqkII312yQ5yIIaQULkodVQAB9c0fgDBEK7qmlypbLWwZif"}]}
    - cf-ray: a08d932bfb4a0a83-SJC
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:50 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=b%2BmMhdoJCNxoDfaTQXEvS4xrOO2%2Bx7YQHwXz6P92iK97Zc65uAm%2F8I41Scxk5Lexat0Cwugbrf%2FqWDglN8B6nfrAdcxr3uGSc9a1vbGSLhA0aQoSx8ZvfQA4rV19KtDyTdJO20%2F2x8UB"}]}
    - cf-ray: a08d932eccb1055e-SJC
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:50 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=JTgUiTNPJHMeSl9e%2FuUVJ9PaAMoF3FPzCjJLCaAkVjkEbK5QfnwN9EwZ1lZG%2BqHNcmWMd9lgX40Xg73Na3w%2F1si9VMo%2FTQOvWcBvTiHB%2Be9ZL5LyHtXB3H5GIIA9a4bbX%2F%2FJs3J2wU35"}]}
    - cf-ray: a08d93318e208e7d-LAX
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:51 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=9To7ZtHdPZScAMlYf8HrRWPO5%2FrTzCyFdr6jUR4SgTmtz7TiV26hEkl7n5w1FWgIxFnzHO5hZIAPRfhTGOTMNCNspb%2FBx8bUWpGoQVF2rgZY4okWcigsr3MmM8iNE2lL6Of1VtKJ8eVD"}]}
    - cf-ray: a08d933409bc1f2f-SJC
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:51 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=fwiSVVy6Scc2lMG75JZ0p2rkxV%2FfIGrOrm6bERlY3Hcuuc%2Bi9%2Bq5%2BHeZwpOxeBEr0OmD2VleJZ03qL01PC9onH0dLcPFgyrJ541HIzeJaDcC2zxv1kMJJ3DjpPVscHesACvmfCWxtcAH"}]}
    - cf-ray: a08d93365c34c8d2-LAX
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:52 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=6whxDr4Qw4kic49Nyd6YBirwSnenqnXe4%2FNDdmI4S7XIJZl92z7apDLYkPtUrnuKtGVPY4N75jgc3o2YTleJK7HpqeUtnLQNsNx%2FlnEN0wb%2F6YF5mmbliPJ29WX2Ax8ZMaMPwG7A2TSe"}]}
    - cf-ray: a08d9338ed5be9e0-LAX
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:52 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Tz4Ejw2SNmAtLZP78sbbS12qvbGQwOkpSnU6LKyHQ4VsenrDFleGbU72omRhix3RU%2FtlvAUdZvmamcQcAO1goxLuPkEylA9IUKNOtRE%2BM7mmE%2BwZ1uIEX5HDeNTzb%2FDPqoszUbqa4oaa"}]}
    - cf-ray: a08d933b5a1d90fe-LAX
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:52 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=dnj55x7OaiPmPm9yUaTWJN8pkMf8zJjRokBM%2Bt3NaPxvem6vUH42bOBrTXMeXmHsbdGIercGbpSFpcjy2UqDmIjaxCAzKMwYrlgk14m5jr4ohtLsfQtee6JQ6y9bhTP1WLG%2Bm7H25VC6"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a08d933dbb8a0902-LAX
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 05:00:53 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=A0oYX1UIhF5JcmjFicFdmYnTS7oTEr6p3xRjx7bMNiVGFBp5kEXnEFbzwRPMzUjgTFgSL72hW674F6UOZNXeQKg%2BzdFbzdV1rEDf1CXx9h3PKlcbH065gRTB1Fydov4IChbhA7pOafnm"}]}
    - cf-ray: a08d93403d6858f1-SJC
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