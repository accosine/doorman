doorman
=======
A static file server (st) with configurable http-auth.

###Environment variables:
- DIRECTORY
- PORT
- USERNAME
- PASSWORD
- INDEX
- CACHE

###Example:
`DIRECTORY=public/ PORT=8080 USERNAME=user PASSWORD=secret INDEX=index.html CACHE=false node doorman.js`
