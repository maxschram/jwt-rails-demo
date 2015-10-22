### JWT Auth Rails Demo ###
Simple demo to show to use JWT authentication in rails

JWTs are generated when login credentials are verified in the `TokensController`.
Other controllers that require authentication grab the token from the headers of the request and attempt to decode it and set the `@current_user` ivar using a `before_action` hook defined in `ApplicationController` as `authenticate_reqest`.

Upon successful login the frontend stores the token in the cookies using `localStorage`. Every request to the rails api uploads the token in an `Authorization` header.
