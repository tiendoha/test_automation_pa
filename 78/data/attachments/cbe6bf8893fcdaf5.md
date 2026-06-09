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
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 323
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:13 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=j0JrFt%2BPTOa1VcwrmXtVh9hEzCJvNHhgXsVQ8sVKFRGbq%2F0H2G2oXFDjDZmeAgrEjyIPDEi1DQn8kXD8Wpni95%2BjFEASqX1kJnil07QSWifbcT7Gl3E3qFXUP990tmb0Uao%2F%2B2Sz%2F58c"}]}
    - cf-ray: a08d90cedfb1d70b-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:13 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=86cgbWhKdF4ZRcDx5xhX5As4gLle4iWvsGCvI0tUV38GkUZHORYbi6mQ11pMLH4COBPorchrWb6oxembUTBM81%2BykEBB6Ko%2BiXA%2B5UKW5VDwvTt2XDSCpLdK81kjN5Oby4W2%2BNpAMn6G"}]}
    - cf-ray: a08d90d16c877fca-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:14 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=LKhcl3K94VsK9oSL%2F0ca%2FeOL6nYQdm%2FyzFWl1Q%2BkRjCRyqpN3FRtYDH2NCq7z2%2FIsoQuHiCFgxVuf74ach2zx98mjtbeaezMPU32LU4xXzHNFuWxrBDkCGujeRueX0BPE16OTqSq2UJK"}]}
    - cf-ray: a08d90d4f876d68f-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:14 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=wsKGlf6CXGy4iC05vJusUNncD9uGjWiaQfyStDj1pNcrrnJ5hU%2FMaaUo8BX063h8iZkUtV5Wmj%2Ffyrmsju5ODBwF9YuLBrt%2F9vfKqVP9OI5AUysctQBZDL3hKU9gcgbGS1YUPG2bFOUI"}]}
    - cf-ray: a08d90d86b898848-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:15 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=4ezY2mRwNbIett4e01oJaBXe5WMULitCTWDeDPaYbzK8o7JYqRpP%2F5OAMnpC1TLTnrz%2F34hyBzn5p5FG%2FwO8S9FfkHVvWy6Bcjx%2FUKq477kBXZ%2Fo0lBmpL779JtIQ0rM0ITRWa4Nm5Cf"}]}
    - cf-ray: a08d90dac90bb8b1-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:15 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=TLAQrifvCPIzkZoxv5dsjp63ncEizRdk7IMsxuCJeazanFfAiA4xeY0Bsnai5B8ZCDBI92DD%2Fdv26dhq6E%2FUM3mspDE4ojDycr4Dms7hrcRs37I%2F76I0ZM7W6hzETq672L5XFnovrxoC"}]}
    - cf-ray: a08d90de4e513550-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:16 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=hgh1%2FMGHpKH53CPTADzdHcUl1LlLtUZtSFm%2FJt%2F%2FjpqTfPY7TC7S1TKzNVpQxaCF2AJCDiDxsjRcsJqs8fEciN%2FFooSMu%2FqED0kuCLx%2FXy%2FyDDrrQPq5HWyutcfbQyZxwX2feZUXtWUL"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a08d90e1d90ef283-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:16 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=VmZu9Uac7Shd8oh4yswxEcBbthaF%2B1BCcrmdtXx3ZW9qXpc3h4nQ0CjTwCxga8lcPzRoLwSf%2BZS%2Fc8FCb%2BrwooDYBYISAAKVhKAb6mnRBXc3JaQfX3z5EoBfcLIl4UchD1zG6Pj7eTxO"}]}
    - cf-ray: a08d90e4cc6f3e80-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:17 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=PGrHt7Cw3aUnB6ctl6Pbc9I6BphL629CLSjJvAy7RVWMmJEord69fVMMyHwja0O1AVqFX9XUFEElQbtR%2F3skooA1W17%2FschfBG1hk53rFpjkYQBhgmDwwK72GTGz3cio4Civtj4EfcXY"}]}
    - cf-ray: a08d90e75b1fb967-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:17 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=fe9qePHvMOQmm2R4wu5TprSfoX1El3WnjvliQCi5tt6m9a8FJvPeX%2FjLyofpjH4DhFQj1FUGlqCnrr1rT6jUhbJuyS03qJ3aoCmoYT2GPIIDQpOKQaWVJRBA4x4ZRNCH1CasXf9sJSJd"}]}
    - cf-ray: a08d90e9cb5bd6a0-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:18 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=yx69dYVzZtQLyqNtLitxrLRFrNjV7x3l6AKxSP972aIh4VZUyX%2BZUdc8lny0Guj33yjksPNnRKqClV917NpjfR7GvnYahjMfJDKizw3GFkrSyvSgJXyazl3PpWcPUg9bbgBv2nd7mLAz"}]}
    - cf-ray: a08d90ed983505a7-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:18 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=lKMN9MuWyE%2B1EFOFuo1FIC87HXkPpHSQIshv1BBWDsc1dYmM%2FgpjfdEkZH%2FxXObmnEORA2n1mDSm0eZYFEZvAyfPQ6QvUsQ9R79sP2mvkUb4ZCf3I630%2BcNsYN2IyEye6CbjUz6OeLeF"}]}
    - cf-ray: a08d90f149d29c2e-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:19 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=qU9HYNrkytCYLGmNnppSjI9neaV2a1pfSHAamxtviCPYpiRYhRHeHrJ2a1W9%2FnSEEl%2BaRSN%2Bv3B4qKgfCSWCEOFbCD%2FwPdToFeluxMGOS8JDh1d9lwAHyRmWZM7RKewrW65ke1RycwvB"}]}
    - cf-ray: a08d90f50bdaea88-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:19 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=PrN47ALsJXL6DoPocZ20wJNcaNJaGZSC2OVqatvrrJXZ66qHxEyI4VxUQ15vFWo95B3m7Q8sPQQSN7GsaX%2BlcNuO1EccqyFgZ%2BuJ4pY20dhN3BxTRpkdJiH82o8VTHLho8lBhLQhzGWd"}]}
    - cf-ray: a08d90f79e50d70b-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:20 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=qAYanZFRw7mI%2BlGI1frPwYw82lOiBX6rRyLuzmDcjxiQcuzbAtIHfzcodiI9x2Eh22iGW%2BZbhflMaln%2F6SbmgdMqw%2FQaphLzQqP0YYeaWzZgtlbVM9P5GQOLVULu9s%2Bj%2Bxg0hbibi3oM"}]}
    - cf-ray: a08d90fa0a46d6d7-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:20 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=wN2M3o%2FqEU9HYGB1Y1rThLzUx8ur7e2ETSaR7%2FqvisKXWqe9wBertHO7nu08eIIdItcauvFvzcFGk2uYR9a8EWqAZ5BRTkylOuLuuUtzY%2Bil4CsO4xQU%2BhvTyy26Igyulwog1nclMvBB"}]}
    - cf-ray: a08d90fc7da98848-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:20 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=bw4KTqyitHcmQitKlpEN1rfexbMVGcIbbecoyoOSOJAXDCBkbQ6MJxbL5tLoQW6AEI%2BlTnuCofWX0lrOvCoCubZO%2BErPHvhFzwizm5Yu2xhXJiHQ5rTVFPdOn1xgVEGOx61t5AkufFuM"}]}
    - cf-ray: a08d90ff1a267fca-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:21 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2FN1OWkpky7UdLs6jwnJ9bjHdw9%2FqaQoX6AiHO%2F%2BQHuzcCpRhCnMDtJl1QLeR7HB1Z46eVo549OiCl%2BdUDmCJ18DqWcVionrjtP5IqXvZ4voWqB5exSHAoUg%2BnF380WtuIueUlDGezw1I"}]}
    - cf-ray: a08d9101992eb8b1-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:22 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=6eLF7HLQy2NeN1vXYjqgxPmDUpu%2Fhb5ihUM8l4qVgPobrZW2Xtejvvb%2FQu6uv6pECgluLlyUu8L2A2VsyEcgX86ypDfnWDtqjTEc6tYEFAGJydQRuwx6dbsLTHuHayO2cU8XT4BKqxX8"}]}
    - cf-ray: a08d91054a9fd68f-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:22 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=EtOo7%2BbhWJ%2Bwacriivt%2FbztzwzkQtdsjX5N3FXjO0ZFAeT%2FjuCnoxsivWlrl3SC%2Fa4VW7K%2FrZUUkyeMtmJ1qNQyS7uiEdNMk3IBSQNgrHJqgRpDJj0l4d0QbwUVM7XzdFQFIJH0E9pkL"}]}
    - cf-ray: a08d910909dc3550-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:23 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=jXvkNYptnLGJv84huLP3%2BJB8U1e%2FWiRTT0liTTCJCout0A4llFPbD2dfWX022x%2Fne%2FacAVhfed7TVww3jJ7d5ZUPCcQv6NsLnow3DPzPSR9UlFBAdlAMqpe%2FLBV%2Fe%2BSI%2B1lYb1QewypH"}]}
    - cf-ray: a08d910b8bfbb967-IAD
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
    - date: Tue, 09 Jun 2026 04:59:23 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=XXEhqPt0XfpMJ9nlNZZAMBde6eY7ko7DgWaviV8QzG2q0yh46%2BNTt89xmi2TFRz%2Ffs0NOJcfJdXVl1EZMS%2Fda8FT4Dh593FMnfYXzhmL%2BPEh2KK5Fit7C7yPlK72%2FWX1hV4fuwUnvp3J"}]}
    - cf-ray: a08d9110db01f283-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:24 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2B1rzXY%2F2Ki3zzFEwlHLCs%2BgXU2OzutOapAtypw%2FzSiZ5OQ%2FWSmHfUZL2MWYDrSFtOBgsHEqAnX6HFQoA6Vt0irDjQ3SSg3YLNGbfLCFYcRLlsY%2BkorPd250qVY22k1BT5XRNbU17b%2BeY"}]}
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - cf-ray: a08d9113ada3d6a0-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:25 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=pSwF%2FL1y1fh1b0MoUVU40Kdy6i7bVLFsuMjc6qRvDGf%2B9jc9Pt9xQp%2FWFxZ0hz4RAqxgrWWhwYooveZftMtlPncRhgzZn6NvDe%2F0DmYCpie2n0%2B9CAzWRiIhJyf2zeU9w%2FmlBKxEfrF8"}]}
    - cf-ray: a08d911818189c2e-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:26 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=lXczIMAf54rLUuxgym4jR2BXwn%2F5s%2B2i8aGlmnWFI9i7C9DBXczX673NnScxMsqCMuEtWF4hp5ABvowzgDyq1hs8Phm335l8einLXnt5EPIGx56S3eBCcfjWarSfTIkelOePuBHc%2FkrY"}]}
    - cf-ray: a08d911ba86705a7-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:26 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=qXxvVEK5enHcO3JO%2Bazwjtvt15x%2Ff9RubQ%2FcK0wLAh7WLzj30RoGw9us4UF8nNzI1L%2FeeczTd6Z1DZo5T2yCiYSuQ%2B5nDfCRPaLaHs1vRgQwN2mnO5QMGYe5N6LgkQrXpfJK%2FQvtWF3H"}]}
    - cf-ray: a08d91220d4c8848-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:26 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=6d4ILHt40TayMdqCJ8WDog0Vsk8tW9KGVR7tvB2qMcBWEPGu60Mi6IQatzEJT08zW8Wo95ehB3tU%2FD5GhMrz2hjMILieawNcGtEptdtF7DPCJjuLDTT1C1T5dLcnSFFdcRsC4FZxnpUP"}]}
    - cf-ray: a08d91252f88d70b-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:27 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=aEsW7CORlasvTMrfTPWd1PoqxK%2BOsUEtUF%2BXesgIc%2B0Ihku0NrGpK%2FzgXXrU4fPE%2FiGOJXJNL6jyhFDG5s0WhEKrtvFSqapKyjvxvfjKnb0Da%2FN5k8baAPogzXgx%2BAtepc28y%2BDvP4JF"}]}
    - cf-ray: a08d91279fbed6d7-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:28 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=bv02BqtK2IlYHutN7sCF9O4un936%2BwP6eG1F1VqWtwIAXo0E9tidW3j%2BfJl8mjE6W1UZSYv7Ie3YL3oP%2Byy7WVbUhJRJElhdW2vuUHvuVz65nnaBeIDP6UO7G8n5IiZX527ih5ovDXLP"}]}
    - cf-ray: a08d912b7e49e5e9-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:28 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=GBcTH7TZrIGprved4f9j1MJx8hJCRlk0mga7ldo7HJ10nq3RJnyF286xZGWx1bEsUBsrRUwvWZaCcH1%2FR6hb4NsOKrA1DT3O0vWz6n7ku7tWgy1xjJB5Ar7Q1DFgLj8gzMczQ64d6Ahy"}]}
    - cf-ray: a08d912e88217fca-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:29 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=xbzXTO3pBVsc036n0SBQqP398hV%2BCYLniW7nms9mO8ueQhHcAs69kkan6t4XbWrPRqzdh3REb%2FxAjKI4gsHKgU%2FxfCxBAqeAAJSlQ9KngUuBhru6BnPOh2qlWo6tUZT7Es5htNuOfHEt"}]}
    - cf-ray: a08d913118ea3126-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:29 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Dj%2FU%2FOPx1YXYOmRLZOQWY2FUjth%2FdYOwihwVVb%2F1oeDRJ5hF%2FAUtxgl4Ih4qureSfBY3wYjserkkwxuouGZBcnmhioUNBliyY29NPMIBH8ZKeW1aifyZUXkVhxrjWOuWEXeVB42h7hHb"}]}
    - cf-ray: a08d9134af0bb8b1-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:30 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=NszHnEmHCRzMpXkpYZ0NiKPfItrM8h3l1xp1Qm30d4boRCvD5JtJYQOe9nDhPcVmR2rtJsmOMxO5gdbvVT4QvYCfwhTNGSnpsw04rlT90%2Bd7lcGGhvSoa5mVQIzHY6MrnV1EctfTqAUI"}]}
    - cf-ray: a08d91388bf5d68f-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:30 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=XUJBb3DLS7RGi8SGgT%2Be2zTAZ8h%2BPTmSR%2FjTaUxHaqi%2FhLUjNuBwxIFADLIGiJ3htZ1%2BhCXr29uXLkIenY3bn6od2UIWG3K2%2BJhwF3CV%2F6H%2FJ3nPzdhgqw3bCOak4%2BsXQNGZZzns9dIt"}]}
    - cf-ray: a08d913c3b0cd6a0-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:31 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=w0TtBAfKEyRN2cMYlu6FZZTfX3MHTbCAtmgLhxztAChxeVXoefzV3RrlaCeWI8Otgx5PeF4YQDwyceNoMC9RuRFc1PG1X33a05ykKDHJsQT7eUyJc%2BJOt4P4eltArlwet%2BtUgHYbg7BD"}]}
    - cf-ray: a08d913ebf829c2e-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:32 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=uOCqnhd8ifvGMD8xrl9jvUyIdCoPqMtBJESSXeQl2C1%2Fmy57Owa9j2x9Wna089m2DGMjoLdUozGIHE90t0KYhxruZoSC9MByH1gwQ9T5i75VvA4TpfEYHw5rzTv1ggrgkk%2FdoMdZ2757"}]}
    - cf-ray: a08d91428cb6b967-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:32 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=e0nV1EciF%2BnOa5xw1Fd0NioiqCKBGlJDIxf%2BrEEYD3ylM4ScU839HF6TaIh26jr2cQxKKOT4Zy8QqKI35CnB5upKIKNxs3pwCtmiVOUpTvIf9v2B3txufx%2BSCI8YZorpIHs5e2%2BUMkqg"}]}
    - cf-ray: a08d91479fb205a7-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:33 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=PWjaJhRQGZkdwKo0wV8%2FstNfGC2fLusGDp3J9vbvQg%2FnfBkmJ7M6FF8PQUkPm3k%2F10A%2FJOJL9s1s39gceBSUOTXh8KGlO7hLAtWkP1ecJYYOvGxdry7vPh%2FaHEescX9lkqR22WGDLUHV"}]}
    - cf-ray: a08d914b5d608848-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:33 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=oMiPMR4g5mpTpMLMyMK5dZ%2Bp7bxm8apR8AmabyRRj%2FW1XBU7oEjVP1nr1xo9eW%2BjW6bgvOmz5cz4%2BuNq6LGOVAatZdAquJjpalLPPtLYsNGiEeCgH7zpi7%2B%2B2f1PWFEtEh0KgGKmYz5N"}]}
    - cf-ray: a08d914ddf453550-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:34 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=jc9BOKU%2F%2Fjsnqu8Fc8TK2XhvRMorNpaNbpX3G067SjVSzXRU4VHwwI9jLmL3PtIKxseQjKiPkuxYca3Z8JO4%2FZZg2CgCQ3m7N1FENZNCBIjyZ2r3gEvaSegn%2FgGDDUwUDVYtf0aH%2BIbV"}]}
    - cf-ray: a08d915229aef283-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:34 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=G7bHWc5wuve9uthUsnHist4CahLAaB67fO3z5T3oaMWflHSFKNtXW58nSf6%2FnKCsHVor61x9%2BOXzsQYhDAEYDT7CSETpHqOknKgb4NAR1Cctk%2BRv92vbSvO3mXG%2FOoNTtGtAuAzlRd7l"}]}
    - cf-ray: a08d9155af017fca-IAD
    - alt-svc: h3=":443"; ma=86400
  - → DELETE https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 62
  - ← 302 Found
    - date: Tue, 09 Jun 2026 04:59:35 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=0I3%2F%2BpMpE7eHRLiTUWgAtPFucXEbyKJMo51aEgivJR1i1%2FzxYkTdaC%2BMh5JGbjRo9E4eE%2B6eN4KZCoYGnYY4g9NzUHLkRuZcRnam%2F0ApMWYmqi23tBphS25fIZU75YEmn9qtmJHGKNrE"}]}
    - cf-ray: a08d91581dbdd6d7-IAD
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