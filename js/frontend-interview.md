# Interview Prep for FrontEnd focused developer role 
## Talking Point: Background and Experience 
* Education: "I have a wealth of academic and real world experience in the software
development space. Studying information science Uniersity allowed me the
opportunity to develop strong foundations in data management, data retrieval,
and web focused technologies."
* Certifications 
1. Microsoft Technology Associate 
2. Microsoft Certified Technology Specialist
* Prior Industry Experience
1. I have first hand experience with moderate to large scale web app
   development lifecycles. I have exerpeince working with inhouse and overseas
   based development teams. Cross team collaboration is at the heart of my
   development workflow, and creating technical documentation to accompany
   design and development solutions has been a big part of the value that
   I have provided to companies in the past.

## Talking Point: Project Scope 
* Version Control
* Project Management Tools
* Team Collaboration 
* Test Driven Development (conceptual examples)

## Talking Point: Javascript Ecosystem 
* React.js 
1. Fundamental understanding of core React.js (jsx, virtual DOM, stateless and
   stateful components, props and prop validation via proptypes, state
   management via state store managers like Redux and via the Context API and
   global state providers, and react hooks)
* Gatsby.js 
1. Static Site Generator that leverages React to build performant sites and
   webapps. Gatsby-plugin systems makes it easy to add functionality to your
   site. Serverless rendering generates static HTML at build time which
   creates a secure environment for deploying production code. Limits the
   amount of security vunerabilities right from the get go. 
* Node.js (npm)
1. Having uniformity between our database layer, business logic layer and
   application layer made it easy to migrate to Node.js from legacy technology
   stacks like PHP and Laravel. 
2. A large developer community and enterprise level support made it easy to
   utilize npm packages for enhanced functionality in our development
   lifecycle process
* Cloud architecture (aws, docker, dbs: posstgres and mysql)
1. AWS cloud architecture (EC2, S3 Storage, and Contanierization) best case
   scenario for setting up Staging, Testing and Production environments in the
   cloud. Allowed us to utilize CI/CD workflows and have a certain standard
   for setting up staging and testing environments before deploying to
   production
2. Docker compose was used for handling the containerization of our webapp
   environments and was especially helpful during migration stages where we
   needed to analyze the impact on our development environments based on the
   technology stacks we were using. 

## Talking Point: Headless CMS 
* Strapi (Headless CMS) 
1. Has built in support for authentication and authorization with JWT and has
   the ability to issue API tokens for external development teams. 
2. REST API and GraphQL support  
3. Extensible and Customizable to fine tune the admin dashboard experience for
   a wide range of users. 
4. Helps drive a content-first approach to software development and helps to
   speed up the SDLC by allowing content creators to create their content in
   parallel with the developer team.
* Arcxp
1. No access to documentation from the website but it looks very familiar to
   other CMS platforms like Ghost, Contentful and Sanity.io
* Rest API (express.js and ORMs(mongoose))
1. Drawbacks that I experienced using REST APIs were
   underfetching/overfetching data. At times you may need to have access to
   a particular piece of data that would require an excessive combination of
   URI paths, query parameters or request body constraints and can result in
   complex middleware code that is not easy to read or understand.  
2. REST API are helpful for keeping your middleware scalabale and extensible.
   REST APIs are great option if you are working on an application that
   requires cacheing (i.e. caching images that were high resolution made our
   websites faster for returning users)
* GraphQL
1. Development inefficiencies that I have encountered working with GraphQL
   include error handling and HTTP caching. All errors are treated the same in
   a GraphQl environment and it's hard to know where the errors come from. You
   can employ result states in your GraphQL schema and then use Unions to
   better encompass a wider range of expected results. 
2. We were able to handle caching by employing the use of global unique
   identifiers and persisted queries. Essentially storing the query in the
   server and the using the GET method to provide the id to the query as the
   URL parameter.  
3. GraphQL is great for being able to specify the particular type of data that
   is required for your Application UI layer. GraphQL allows you to cut down
   on the amount of overfetching/underfetching of data that you may run into
   when using REST APIs. 

## Talking Point: Adding Value 
* Design to Developer Pipeline
* SDLC 
* Overcoming Inefficiency

## Resources to Share
* Link to Github: https://github.com/Jzbonner 
* Link to personal website: https://jzbonner.me/
* Link to Github Projects: https://github.com/users/Jzbonner/projects/5 

## Bonus Talking Points
* Improvements to ajc.com 
* Improvements to dawgnation.com 
