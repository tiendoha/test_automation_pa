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
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 323
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:25 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=n%2BVkbKTm6wyvhk0at%2BA3srgwZcqtocLg9d834Fu5%2BU1RQeOo2A2GSuZK0r8%2F0cTkNokvbnjie1CkZAhUl3%2BGeH6%2F%2FlJLXQiJLmE9uzw5KE0WvrZc4toJVx5IbYdmrP8GIlFsK7gvLSnr"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0d669a37e80d-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:25 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=aisV1gqRPLseVX1NOcWm12bnKoduojiFAV%2FSH4hKy6vEcsZcOv%2B63nJR%2FoLlZp0GdJey98YLXHBUKwHZFNuaTkSXCwV1Dcz4on%2BCjLkW46%2BrO5OAlh3W0t2qKfL9HyKAX30fDF0I%2BtRm"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0d68fec72331-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:25 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=UE8arDsvc%2FW3nui2mP7Ou8PIz2Euxvxp0dO9yz3E6gZHmCZveQ6nxfC1n5yvQY9fqXO8tHTsfsXpnAJOB7ul9pTmEdVuUGAU3kNbgh3ufyhIng7Octhn8oWr2c61kjwxCJHWz%2Bb%2BfqJ4"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0d6b5d407b1b-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:26 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ScLeGssGOd654T%2FtZsHPeE8dVRhqdZclaEt6LRd%2FNvn16Tqfp7%2FBOTVHt75XoINe8XHUzCftqJplHRSANHRUvSC35738QRqmzftCrp0UFKxI2MjLddjLZelX5LCp4YPDxP3FrHHu4FCk"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0d6daf4f000f-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:26 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=zosaKHOSySSHnJjEl0L6QXaZq94EExMhYktVXWeBf9aao2BPZIFbBu0wGGy%2B4MQQv9YhdNQnHfUPtYtEyzn0v%2FDZ6rddFuQu7lMs%2BlAkb5Zu%2FO%2BoM%2B9H9bglmnL%2BsUoID1rn9J%2BAcWCp"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0d6ff893454f-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:26 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=h7sl2d5eBuLN2mDFYnfUqxQRApD8ZlW8Wg71dm697Qo7rGlLI5oNO4qQD97HlCLXVBFjdsClWvjVErEOLAKZP4NKxwwve4z1bhMgIwG6d3U3FO2bWLnx5rd14qm3AyTOuHlBb4xFQ3Jk"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0d724ccce06d-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:27 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=d8E6hJcDOT6j1VfqbTb0%2Bec1J0kbVJSck4XNgybXdCPDI4J%2BLn8rREyHxHqdnYjAws6fkGwY%2FslLeU86JP06ngn4%2BWy5e0I4s8XSciMNDRwFodQn3%2BQhYtYDOG7auZXY9UmWmx%2FeFVwf"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0d749a1661c0-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:27 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=9%2FvZmGk1w%2FFr3hImaUWeUN0MMK%2FL%2BsgxQXdTAFke%2F%2B%2FGhNOntI9o6I9xZznkLiKnsXSgZ2iRASvCp7TK%2FA12oD6oB45lCMN19VqZeEpNqi%2FKzz4Nqo8bl7229BaHhPhF%2F1Rl55lLhVNk"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0d76fe9170c4-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:28 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=0WKc8r6lsHxioj5hLxCAPvT3P61AMxrAng4DB2VZPk10lUHBilZB3ygqS3uvvZWT0LqqdTKECzQuBgYTGGtwhheiywKj%2FT8PN0oUp%2B7B0%2FcNuuR%2FD6VB%2FXeF2pL4hL4YL8PtOlUCjDPW"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0d793bcce74c-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:28 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=yYGNTnIcuzcwClQj0Nm2Td4qUc8RWS%2FxiM4EI0sXbjgZojCHAApc8WuYOkC4AUnUsMyDz08SAXpBQ6uwvDaSN28v8v40JMLTQvwcf%2BYy5q8njWOluhTPX3nRvDmIsdP61AK4X5z94zCC"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0d7b99250008-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:28 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ZgSFJO83qE4trLFbbnTjy%2F%2BG2wuV7duzL7I8f%2BBjVTZILlFlym%2FfFwXC7g0Dx9cxQzT0q5eocqjYRelH8THiWOVB26E%2BDE%2FTojt4iSYtpNyLwPtTEMVNG1jNi1rDkXBqwpRbiH6x3aXC"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0d7decf086d5-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:29 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=RN%2BPNsjlqL7hYEFJQPCyZNjWANL4rf6nHD52bId7facP1hdnUZfyWX11lsFsVVx8CvTlImGLFwN9N7C6PF4LIADkQxqy3Z%2FGEnlsSg4H2Hs%2FNzrNu%2B8hNWvda6gnqOQCtSXyGp4XQIk1"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0d811c3f2309-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:29 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2FCoNeYurTbbD08inD6IA3ZNjwGUUv1WaXWUZbISb3X3XQwu%2BZB9%2BBkyYV6R2F94rXSr5yzY88vwbw1d9kBjUUDTGYYAaMFczH9fdFPhc6kKkWOPcjuIsrfUb2fw5c8EQayfd924exGAC"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0d837f69e578-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:30 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=NpajJb%2F1o%2FjBnHjLR5RgXwOXa%2FkxXtzWzFq%2BAtmZPI2Z2rr1Tfg6Q25yG%2Bw%2Fq97zIDpvZPecQZ5I3e%2FKCImHZjeMvpD2kpEnZ6znfn86lEMAb7jXHHmjGJu8S6halayAXaR0s9syOv22"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0d85c8da6689-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:30 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Tf1h3UWq4%2BcxldPtwUyvJwjpijdw3yPeCcJdF0HLJmDKl5sTHgwrWuJ%2BxLmp0x3aI%2BJGIJR9XHf61Tf%2FnBhHgnCAao7iWYL9qn%2F99jJoB6vnXnlrxhM5mNDOnthsQAJjuOmI%2Fzi%2B6r65"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0d881e45e12b-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:30 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=mJ%2BbCXHBKJDlqHcOIc9V5nAty7SMWyhYgZQzzDiDl8aWkw0txw1T%2F4uqheakSVHJvglF6LpUa970Q4sooCTpoplkcvnHaUUxBQs%2FV6NtbZJDBaMifXxAdfUykKRo3faCuoUyB1x5Mnns"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0d8a7b8be80d-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:31 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=QwezCFtoA9PUdKtkK4XXDzmt1bu9RQkYduF6N3cc5UlDUa5LHN52YvaVgLM1u4RtTggr2N3bg7Y5RUwEyd4CvGMF8wwEC06vfX56tsqsexi7JphnbvYWmRh6Z6w33PWAnWR%2FEp2ivkuO"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0d8cc8da2331-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:31 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=BZUqc4ScijvQYdMKAvZsuwvpPKZ8aUluDGVIkTyF3IjzJuaLOVjG%2FkkiAKnQBrC%2BlUPGpoPq%2FraT0QiJqJ8QMmtaP6Rc%2BVyKDr4jbFEKbGF098vLuL5iq%2ByVuOcKfo2aYpOQu6p%2FXFMQ"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0d8f39267b1b-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:31 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=68amUypSbFo8Qj5lXmcKYMdZA23MILa6nuamIRXWgkCjZ8uD1CeA0BQitknsykjmxH%2BnY8EfY2d7FwI7T4DZcTK7UY7WkXUdiYpka3GIjZCDBk8VulSoztXihmBQWkr881sop2yR9aF4"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0d9189dd000f-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:32 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2BKdpfVu6CCCmy8XK4yVv4sjyTHRp4pnsWMUMEsm7MgiA%2FFUy23WoTVHM2rlVYzbJO6RPMauv0pU%2BMT%2FmmxfcjVFcR6FtPyhcdNvJeYyRCcxjcY3ldfSK8J9gBUPiQGqtmkHUTivcIXXz"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0d93ef08454f-ORD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:32 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=PYdfzvhN9iEQjIHOm%2B4aJnF4Rx%2FMQdqviZEPtmNjjncqqMTIGYKfEmA3gf01cpavC8NE9CTwCJrOpyMt%2BVT%2BGJbYkjgoF2PvRxW0pr%2FY%2BttNevVlYkrUnGTwW1%2FYsNfn98pnK6zJj4WD"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0d963ca0e06d-ORD
    - alt-svc: h3=":443"; ma=86400

```

```
Error: apiRequestContext.delete: Max redirect count exceeded
Call log:
  - → DELETE https://automationexercise.com/api/deleteAccount
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:33 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=fQ7gpa9GEOzCsBjtffR53FYjsX1J5LoPjE8zGOQFe%2B2yKpXYfOLVRB576Xhv01wg4mloUP%2BCFLwRXwRny4nscdoki%2BND26tHHRo0480OGJdjRzgNuwqPyUxLtesLhIUgwnaTMndprBsq"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0d996e5261c0-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:33 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Roqfb3S8LHtM1neME7wHOjg2US37L73JBXRj3lzpeXt63sCxJzaTjh8GsS%2BCd239I1Pb6nfaSAuz%2Fecnt%2BZSDFIDOEIhr7vv49atn5%2BUTHDMzob05%2BvB%2BSzwkr2aWZ9RiAwBk9iyMSKZ"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0d9c9e2470c4-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:34 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2FU95XP0jCvE5sGIkqgh7l2RCUxFV9KelivQphKEdMvWqfamMyIbz1NHOD7fe1Jx%2BzWLcKUliihoHWfyol5AFyozfj2tFJKnd33NMGUq0V4xs34XG3XBhO0o00xFOskTt0PEerzrB3vma"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0d9eeec2e74c-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:34 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=bpVAtuImTn51YDMHV4zxVOH4uFvf%2FMDo6XblUDQwRNBSDcRs437uaVeA%2F80Iw5NHAtVH%2B%2Bykxew7MyDyZprQ6a5sB1WhKEbUd66RWN0nv7dnJu9yAA0mesdDXzqDhJKqaVXX4n1%2BN%2B%2Bh"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0da13e1d0008-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:35 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=TyvSA2U1LKAOB8wrossdan%2FI9FqRYVHbPVfW4%2BG5msTMV4f9NgfB8Hehunv65PwiK03pWlm%2B9DlkZO%2BRUEAguyDmtXhR%2B2w%2BXUFxIx6hOkTDbF4MV%2BwSXzjk8XIEu88R7QJCG%2BPTx6ug"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0da39ab186d5-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:35 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=1PmBU6duWt2B6XGOVEieqgfrs4V9OSG5rVfFQpqz1GqlqGOG9%2B7bMa10MbR1enlqLoVp%2FmH%2FhuAIrRwYRyVnwuA%2Fdf5udhrY301sUocdIXIUet0gkkyLm1eTd1vYWGgKJpARKA0ElDZ9"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0da6cac5e578-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:35 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=xbnS6VVY7Q3JJF8VCGjeVqOqAj0vdy6HExIY3pGCvy%2B5FLHbfteAljUca3mVyzmk%2FllYtTfOA58bng504MguYdMQwp9sqT5a6YcysEdcblbzfbR2d0jMDZv0ZnDXjK%2B1W0hIDa3cfKo9"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0da91e0a2309-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:36 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=8WBwAz0o%2Fila30ZCASpHtwLVTl0DUgBOk0AYUh1a7K2HMK9%2BCGMYldMHRIr9qovMjWnNeN9hs9AGk3sU5DrnEr5abE%2FsdrfQnLnqwqG4QHcpS5v0C7Sde79d9MVHNmaDN8m2QyDs7fp7"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0dab78fd6689-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:36 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=bflwEAiA%2FvmZCveeZMHTcn2lz%2BHGqIiWoMLfgkys3p962XzYkdSLsJqaAbGw1gTxn5Mz2sPrQ28o9BZX%2FJgjsl5AwgxyyfusRuRq69sKA5fv1QsnGpFRfKY1kb9vWGf8ZoOavj6xnw8W"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0dadcdc7617b-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:36 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=HpxPKPHh98aKsCZ28Z9X1tSQ1KClQlk57BWJSL3kFq1NcwJEdWTDABTCrmrGtrBWWldmXaAwZL9L%2F4uCD15ylXBLFM4KsspWk7dRABKbzW2jExah%2BhDCXD3vcnRPsIdFEeG1bKHKIFSc"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0db01a77e80d-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:37 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=IDM6RSfs7%2Bb9ne8r5HsSuSFI4grmLOyN8zytwIe5TnirGSYKRJqGugHz%2BomiKQGwWRrNd%2B2K7ORUHx%2FarHaI2E7JXaDMjCEjYnrsi1yWXC4fuJypydffhl%2B%2FtQndZ4cbmgEPAUqNg4NR"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0db26cac2331-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:37 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=9HMTuJvlzGVnLFbm%2FjEdb8THcayUizzV7EBQr0qTVcC3JDPuV4camd0MGWal5QHbW5Zz38m6xnEzMN%2BmRHMWLW1DU6V9IKT21NDRkvNNMy%2B1cLRIlTM%2BrOnx4lXmyg%2FmmXAciZUNcK%2Ft"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0db4c8887b1b-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:37 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ekUo%2B%2F2okPiLwqsrD19P2pP%2FM4Zjs%2Brs50qqeCQ%2BX7TKbycWkknjv1xUtav%2BjZn4ex13WW9DnyAvjlNVpeMDysZgQs34byD1HPNsEQTvbA8Jg2WctkCWl2OKpFhoG3xH3MesMqMrbzOL"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0db72872000f-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:38 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=4tf5PIRkh%2FH0SCUNLbbr2TjxY1icPY1CSGwaOij2q5AKnD30HExbdB8hmyztL%2Fr55KjHwc5BWHqSTgF43NeYxmtdLsjpU4%2F0CUFoBz43qxJJPFyRC6%2BZWzMPgqnvoxr37MswYN3ehtem"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0db97ed6454f-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:38 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=s3ehSIMJXxe7U5Q9gvt9vb9KeMnyu%2B2%2BPIF82fCjHwY8lwVpJPLsd9d2sleF2rafjQvFehhCEEYrgc8AjYITPGgAiWHrrTyclp58Alnl%2BMaR2%2BrDCbBHvAf0o%2B6GnPdzCJcPR2nhGSHJ"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0dbbc829e06d-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:39 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=aaXAMx4sC9Y7Mi0xzC3E4VkG3OuLAK8G9xrNfo9kd8ruwQDLKtuCxT66%2B848%2Bs7T1FLNVB9zJMtATXiKRbmAstiE065ZnsQmemWyr%2FPFU713dKj8dPAagsHe5fhA20OAWKn4ic%2FbDu%2Bc"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0dbe186f61c0-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:39 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=T2zWAQamCp%2B3ZUsuw3XgPsMXuTV8XV6KgaQBaSBZfq%2Fpx8RhbrCydFdYj0Zy9mVo6cfKrLj4xy7VrHKjLDwrckn4mRQTqpqVJxwN1bv%2BRiu5rxx2B9HV00qnzX3ozDXwrt17nLoDFDoF"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0dc06afd70c4-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:39 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=OE8a2NxxIN3EJZpnGs6MwBP1A4vJKWYgIofaADyfByfSbq%2BhkLfwaOxQa2k2M1t7g5s2Qt0BCqI5Nivg6f3kaeQSnzbQanGfa8%2FPSeYjfSyXXnKGumieWNb%2B%2BOVinmLXaWFzn1IRWC0o"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0dc2ba91e74c-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:40 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=6W3FbN8W8Mlh3vqwYVO6JNvxcPqc5uI8FrakllVd5MN%2BNTELZFiL3MLTlVWYnLG6lNxhLYYnKMoLwT9R4jPEK0GAeDGtf7hh6db1Fkbl2YZzhSA%2BCxfn0q7J%2FdNfuZ2NY67E15%2FwNZXw"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0dc57f8e0008-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:40 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=NWrQJ0%2BNRkqAxI%2BvJhW8Ox0picPxjG617%2FZqGU2fmyX9%2FyuztlfpXF%2BsKZNLoL7bgPXv4Jsl8H270xxmTp4jYVJlYiWQnoKfVGN96ULXKfU67Xxrcu%2F%2BJSQUGvhPdmm%2Bj9LliS33PFdi"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0dc7cfa486d5-ORD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Thu, 02 Jul 2026 04:54:41 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Q2lYOPQbAZGjC%2FlylWefOKmgVvzIZAnaomIP8kogjm0uShaPEWgktG9MKBYYhSM8rWORv1TstMFZdYX7sQ4ljZoPfbsm7HuA5pCzH7bAL%2BtzZQFog2EyEsgBoCjMP7BYiXcJbNdStkLO"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a14b0dcb0de9e578-ORD
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