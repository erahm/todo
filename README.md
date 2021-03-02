This project contains 2 separate parts.
  - A react app bundled with webpack and served via express
    - the express app serves static files located in the `dist/` directory
  - A GraphQL API served via Apollo Server on express.

  To run the project:
  ```
    npm i && npm start
  ```

  - Web app is running on http://localhost:3000
  - There is a sign up page at http://localhost:3000/join although nothing currently links to it and it is not hooked up to the API.
  - There is a sign in page at http://localhost:3000/login althoug nothing currently links to it and it is no hooked u p to the API.

I've gone a little past what I wanted to timebox myself to and it's time to put the kids in bed so rather than continue on with this project, I'll just mention what and how I planned to complete it.

The idea, given enough time was that the user would hit a landing page and be promted to sign up or sign in before being redirected to the actual app.

*Authentication* was to be handled via Auth0 on the express server, which would then set a cookie for the UI.

I removed the user type from GraphQL as I decided a more simple setup for an app like this would be to have the auth cookie include a `userId` that I could then just use to look up any `todo` item associated with that `userId`. In a larger app or if using a relational database, we would likely want to keep the users table.

My `todo` schema for GraphQL currently doesn't include the `dueDate` data that the UI accounts for simply becuase GraphQL doesn't provide a Date type out of the box and I need to create a scalar type for it. The UI won't choke on this because null is perfectly accpetable.

The sign in and sign up pages were to have their forms post to endpoints on the express server to kick off the authentication services.

The hardest part of this was the setup. This is mostly because it took me longer than I'd like to admit to realize that Apollo Server doesn't allow you to specify other endpoints (that I know of) where you could serve html files. I eventually got around this by simply defining 2 express apps inside of `server.js` - one for GraphQL and one to serve my UI bundle.

As for styling, I decided to go with the look of an old legal pad. There was one sitting in front of me with a list of things on it and it seemed like a fun idea.