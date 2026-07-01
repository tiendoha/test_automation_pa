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
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=q7P4Vfjkhc%2FTJFlsj4%2F8ccCLJMJvms%2F8AgNuXZ2Zk%2Fd%2BOMYpCn0LU18D%2FX0NnMkM0PHj99OrBfHZGb3mm6Q5VbYnSxITxI%2BrJbtjiQl5rRWbyGI%2BCglU7vxAtNU7DGyjNGf2jFh1r4j9"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef678b60a0e7-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=i0%2F9NoAi3bpEqwthH1t913xWfCrRO76ywX1w4tZUUq55WRCUM8fNosv0xlV%2BXYmB7CcWTKNU93Moz5BswZEMEHwQthm7DW9AW5bbuZMvEFnqNDIpiX7jDDN1Dxd3norB5Fb78gaUmga3"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef6a0fc9d6c9-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=TC%2Bn2AnmEN6UYa1PF8A4pZSpYgeXSxzDZUeukNH2Jj6sDk3806Fg1UGgzsmpDRmPaTbudJFs2E%2BiQhBNZp3jaUTbypPIOZhbHu2FWwsJAgBMI8AHl4gs8ITE1wxcL1yXflJKZJnnyXXK"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef6c7c2a8227-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2F01RFh9LgujXaOryEJSIBBMv1bsNNc3wGh14qepg14jH8arr%2BNPq1wDjnpo9NTXrasRV1z9svv8sA3HShsMo7ejF1NNLmQiyZZCiRSQgR1K56E3F2%2FS%2F1TB2JkdgsqUGMfsiSZ0FrKGP"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef6efa20c995-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=NmsCu%2BZ2wlm2yI7CLoOCFYlZb9FMQz%2FnGuxXXLmJR0KVJBLYjKon3Kbu1G0Kut3S2dpCusA9jONtg9VGHQIzZEKcQkNp8d5epg%2F3yzlZ77gQRqop9OyhYvnc1yAbzGkcSYJlK3%2FjloOp"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef728f780bb1-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=sxM0RaeLU5KzExT8ewwEL%2BBxRFrwIlRrHEzmL7ELPDUHq5BpV3PLerwFKQQHBOAdHpG%2FL6ilW9nLwVvme%2FKYKJv3GfOfsNi5nTXSZtiSr3KXVxd4uyVmxi8hj4FmQ7qTwcqjsIdQ1MvN"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef762c48e5ba-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=p5DEumSFJ0hOqg8nuYIMqzd0fIxIKeueVNAY6UDqfZ4pC5KAXVZXbIjenacK80%2FPxH1M1Xxo9P%2B9QDtMkCO6qe9NeCZtf8EZ%2BpbDq2PMr%2FrFJkILclJ07kj04rF81Zgna8lSB8CQykP3"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef789fdc5bff-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=DySNUw46pqjGR1guqJwE%2FBuWeFE9fTkn8bXwTHw1d0NZ4rJqcBKn2EfhYZlI4ZBR9ZYqUDX11H48z4O2RFaYx2jQH8IbuUwsw4VeEMq%2FYZs4sWAsV02zqFlonfPX9bxL4V6fpGA%2FftxL"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef7c4e82d605-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=JspssbgMY5LXDLHcmN2VRixIrBdhbkVnFob%2FJTVNKjaGYMu1ApNQoKdtI7CvHN0JAdGuxJi9pQCr3C%2FVtymcV2dRI9%2F8twpfO9Sx5wx8fiBiN711zU7v7pIuGkxnbdbJ6HUYTrf6LW8X"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef7eb933ad11-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=1r5p80vZMGoFZ0IPIzc9Qtl1lXKPubEdKNEHtpl4kHK41lfvkQU57WzHYnecJ4oqx7T5dIrWPMdPBgvMyN8%2FXrZRKU%2Fhbhgej5aqRu4Anly0U8q%2FaOu08RPLMGGQnpBA%2FEoABkbsSNh%2F"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef812fbdb06c-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=bQmyrannxV62rCHBNM8xYOaV%2BeUFEWwuE9nXWT9km9Yosxpv4oVvrmmnMwJ4sE94wrM0U5aj52sCCjDAuL48UxXsI65iEHcVRhAWvOtnj3hsIdJGTQAY%2FXos%2FSpQydQbcNXyhg9d489%2B"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef84bca18274-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=K4jcb4del2z3%2FGj9uOvXuc8nlgDLltHsk4k6uaYiiFqJSBEjHZurbQco37PC3vMnuMsDJBhwa%2FJS8y9YqVPVNVfLDR6ZJLfLr%2FAvGbkUC5KD%2Fu8hogV2u1iKGz6pDqSknQQ9gh%2F8S5lq"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef872e56d6b1-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Ogl44ItB8lCZ7nYvwTjWgKf2n4pcO9d5edRfG5EofEuF54J9OLoaY17zN%2F9z18YAZRJocHGv6khQwj8mD6s%2FpO0zcz4tHF44ONSaAO7o2IZHhbfN6xvTakOneZOw9DKbN4IdQ1qFuwIr"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef899ea2eb77-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=k6w5Nf3ClyCzk5eeSbKXYY4PdsPXszsFP1ZmRIIP0GIgbxWxqRRlStz6hIW4LJn1wYNYbJYcjoenHzr%2BuxPIBZjL4j7wCboAkqWwZDuXsKNU0A9VTkOXSHrKoOhfbnkF41djmkk5bRoe"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef8c0de1be7d-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=0%2Bo5%2Ft1hBBZwz80M0zzAddUp0K15whhSr39WusmOlLAIHUDg7e2udVkq2Z6PNgqaF6UdktOYenDkYmfYFG2pVkF5Whl%2FulHAgHZCU3eppQAKmiOEE2Scg3XJHLQZ94OHu8J%2Bz7cHhtJ9"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef8e7b40a0e7-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=M11JFBTW58GzXoFeVo%2FTuNMZTHqPPrSBEwen990HjtKThhb9SPSQlqwcUHpRO2XQhJDeqplftWNU2WM3NCkBa30LMR0l2iC8sEZPdnk%2BdrNOPiAmrXQOMAbUnMrF7F17WK%2BW%2FokdnHxL"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef90eedad6c9-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=xjyS%2FsTm5RgiYWJ1JndVRCoEhi%2FsjPyk1adrRbxe84%2BFJeBjsx298iGsczztVmpHv6M1N2AulN0BaeHqrXLqsrDzDkLzovdH2FQUsS7nUVUxL%2FVTaaMMyi1JtTd7tyn26aLmbNCAQ73L"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef934dc9c98c-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=UlFm8iZ4iAOs5CEnwsdcnWg%2BXA9APayPvJqsczhEz4NPdxmBYEcaajnUx3tgzzZccGW9EJh2x2LIdqEmS1RlGsdStM%2FcAog%2FLaiB0oun2nFe7XCiMKwDE%2B22MBR17tMz7yRsH7ojc9p9"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef96df8c8227-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=4oadVlamZWsKzNe6%2BTJqayF18kZcfj3AAJVydflE2xW%2BjEbLNtrlny%2BdCv184EMflFrZDxFqpu1Xz8JetSDo2cIWYdoAAbCIpOROnGsmuCSMdiNVym4jJShFksIEGN123YJMT%2FcntdOy"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef995aa6c995-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=JoJ4ESc7qH9deg60VKnGI1Px8y0Qvea2UjlBCUbKms5L6TXMeORTjPy%2F7BGqQJByuiCwn3OPuS3ZbZ4jVCt2T6ytdwhjsEmoFY5lEH%2BEy1wBIKiIMnpLT%2FJGRiBF%2F%2BZBCxyRO4BC20Dn"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef9bcf962d0f-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=CwxKb%2BcQK6j%2Fx1cG61FQFxuPiulqcYmZb3jPuhi%2FofZtmS%2B08M%2B4osG62tKobgypmlrMo787V9AKYI%2FP1gn3iFG5jLlf15V8Dyt%2BuGxo0K3Vy9qVe%2F5yKW9f1eFRiuC0eNd7B8PncPCl"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142ef9f59050bb1-IAD
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
    - date: Wed, 01 Jul 2026 05:16:00 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=6xtZaswJfeyLqt%2FZi1iacoG1xobgFmu%2FoK%2F7jpIUGYwQCye0dWY1sVSrL41F1GISMj4B5Yk428Cs0Rr0hiDz85nXy91ul35EUQwy0Odg54191x3409UDJeEdosbhYiuYSIAava2Ijj9I"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142efa3e9fcad11-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:16:00 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Pr4%2FgOfpwpM0FhpAE9W2aSODu3ne3W0QhYoHaW19Wsl8NPa1drsUvcdQTtTv4%2F9W50ZIo36Q7peGltdrHIi5GsVVyS%2B01sKtnqUZqcqUIr7IC9452GyMu3Nkbt%2BFp769yqBGWVWl%2BG%2BS"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142efa65edce607-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:16:00 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=QLWwg2AqqkkmZhyzS8hwr6QryVqnII1MlARAewYdkwvufhJqJLT%2FuIDSunmhQBx7Bv0k8nCg1aNOjQOPbIsiqgai94pFsHg3RDNWtWwsyJ1EHUk5iyM%2B8eWLwHGAUIWSgLcrJDtnFe4a"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142efa8ce828274-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:16:01 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=sy7k6MKv6%2FS3rqGomDK2%2F%2Ftm6YX9wGAJXaaKQy%2BRMx50k7Bjn78y7A4whgg%2BcoTYowAMI%2ByeK61RMC2x0YS5QlEyYxMpqjCgTexvRd1Fb793D9pbnfjYacE9zf4mIRnIu43cgN60i5nr"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142efab4d755bff-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:16:01 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=xqS2sOk7piQ6fpj9dfwgqvLQ6d%2By%2BVI1Heo51%2B5gG9OU09ouQ0TPCpTNk%2Bkk9j0lDpWThT9Z%2BiCrHB6xvP7giHBXFBfFveWkwaGEjmyPn1SWNm%2F3wOWBYVj4kg%2B9sdJMbRBCmwCWdaos"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142efaede56d605-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:16:02 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=TPo5E%2BX3q1x1X%2BBMGV5TDRr49ds9Ogscf3ltzRjqsJWqpEYVdnBNg%2BixK%2Bij60bm6CGgAYuNYYKb%2F22Wdtn7dye3VGxhlqUV9uEmXcEXAouyFJ8EgkiKBJGFWAcAwGJbxTJkbHtCae2g"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142efb14925d6b1-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:16:02 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=3f8N%2FtthbWvBa0IabJ34xEDRwKkIufAQDg%2FZw3qe0eJGbaZGsqilXLX8CM%2FcHX4oo6199PD5%2FTYE7oF7QIct3EMVJ9ozEDCJJiLjSWuKxMVKdJNtlHisKby%2FO7XH9bgzZ3QXxrAUJ5wD"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142efb4dd57eb77-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:16:03 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Q%2BEY4uAAaRa7eO8NdCgNCFU%2FzS0fgKMVYxp%2F8c1hbhCe9wlEGypvgGvmiDOBDkqjE2UWO3y2e2qSO0GO62LhOV3Bl6Kc6AaG9aQ%2Bu%2F1rwEBiB3ZSUf6%2FWRlIv2KytSE06YXvmLVite7J"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142efb75ba8be7d-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:16:03 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=gWcJctksODewRDJyhIKHYHF1MIxY%2B9u0%2FZM991ZwbE37vm4UstO4djzH96SB9%2Bx1788dx8RDkXdYihxnSelabbMfckAhDQXcC%2FSqkbW65Irm0tR9K9NxiYZB6T9KvxaG6GFc9jMxKUkE"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142efb9c84ea0e7-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:16:03 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=bKZBcNvZWknHfHr50HmZf%2FTaIVImbwzWaAZC06Qz3nyuJLSq78nrILmwT6cBO05eg5pzGiBlvx6I9erOmhwu180YU5h8K3cZmNCA3F1sfE19xbhm2AfDJV6cZKDhlFRikbavDAYR842G"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142efbc2a1cb06c-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:16:04 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=zp7Q11cdfA1NHhikeVB9MsnyrNGCb4ktwBCHYsDRgiOu5DbL%2FIY%2BWx14%2FFchtEgg0oqm0DZ5Bktat8HekKN3Coqwymjf2gu%2FktaCMGgigdH2Id4IxWKXFpUPGoik0%2Fxq18l0U65rpemO"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142efbe9c0fd6c9-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:16:04 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=1QDYNi3qBiYnTctUoa79kCPONJicuYm9DaMO1CC3w4c7WBSz9QyP4iKp6roVTei%2FeoWJ7XR6B%2FdV%2BgQvcGLhiWhIrPIu4WGEhEoPN%2B7JmAIY6DQrUZ3MZdirMML2xHEdy16fs5mRKija"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142efc10a298227-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:16:05 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=IOwP6p9g3pr6aB3u9dRjawgt%2BVJ63X8TVoQhdtc42ggp78QBGKlwbTtIj2uvxN7Yz0ZER0%2FrM1sqRpolYAW1EoGYGMYzyfKbLfosH3pLk42w5ih7EwOtaoFCYr96zhyYHsbRGf%2FiETqE"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142efc37f6dc995-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:16:05 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=MLA7gYM5cXQkUbDJagygaMQW17dsP%2FuzWjCUnGhJGijdNDXHsHEYG2dubqn%2FpMOq2EWMQixamkbMo59NnjQ%2BBvkLIzqpr%2FvgMZAGkCc9vj7u4fmA7RWLlQHr0qg354v9Ar1hPBEz3phf"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142efc70b832d0f-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:16:06 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=6%2FuzIuCFyeIx0p8VMTYxLoNfAU2BCRiFNIicaIzc5OFi6aKXkh6oR%2BUEQ3eMrquSO5a5CsmX3F2fulK8ZxvdzkTc8o3I7xU62CEByDQRTdmHWBV90FfLvvqApfUGJHkuAtH9TkD6it8L"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142efcaa926c98c-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:16:06 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=wE%2F2rZ7dAqdEv%2FJqKQgt9EeweSP9vwpKIbN61dPKQQ3RcuUAwXQtXFBD5VPa8cLHdDoQoES6KA88vY9%2BuqI8EU59WMU9%2F%2BKsdKAE9OsPwuGIRf4bsn1qCANDgUqbXkxCjLZ7wRxYrEMi"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142efcd0da1071c-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:16:07 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=s0HKGB%2FOYs6utg0kBN87lugwXZwM787cC%2BYubN12uCjRjvZ3x%2FzBfCCeAFYNdMfrwVTGAc5NSrbloyOVrqmdkO%2BZscwrfjoz7Ybvjj3V1SoHxBOwm7UDxWw3TfZdYRcKGxFFUd6EHdhS"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142efcf7caf1b39-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:16:07 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=6UDt4EOZ7EsVgAjZBBOlyHjDYVvLFq4ZFtrtAAs0Yihc3dCUaUcsWnHEhp1RTqIu6Hjl1nPYS1DiGe6JlrIwZIQZQeKpf7Xh5GcjQFkM1DYD4IbexR21C6w5sid%2F%2BXZMfLJHPxjNoxEz"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142efd30bd48274-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:16:08 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=4ffSDKj9UXqSOKvNptZ7MOjAMyu82cmPgmKWosGvC7nRJ4z31KQPuEx4EO%2Bkco%2BNxoDHvdzpAyWmuLp%2BwZrbv2Dm2pS05j7I7F%2BH68h3P1UY5JTOdNn6Yo%2BifWT%2Fsc%2B6FiSzJsSNagm8"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142efd57b965bff-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:16:08 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=G2VpOt4JhTvOvmXYoO6cMUJs0pB6xlkBkJqReEtgDTIn2q%2FUnTITOu30wt6ragXfrbahqZS5yiosAIen%2BGa6VQsszvfYa%2BWiAI%2BjFXVpdOEmyZJ7jHpBgLHTs7%2FB%2FRuH6iWKssZa5sa1"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142efd90cd00bb1-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0.2) Gecko/20100101 Firefox/148.0.2
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Wed, 01 Jul 2026 05:16:08 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=G4L8DApviBc53UywlayKHkjuaWDGfz30paNgWU3agnyBH1eZzGAJUqXKszPkwuVih4foYSOy9TiHQLL1c%2B4XXPiX0nw9LESxCkGVc77Bo21r%2FotkCjN9Re%2BU8VamfoB0a8KmbUDZIWgW"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a142efdb78cbad11-IAD
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