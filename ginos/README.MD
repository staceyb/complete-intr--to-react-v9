This is code created from watchng Brian Holt's Intro to React class Version 9 at Frontend Masters.

The app is an Italian pizza restaurant shwoing their avaiable menu with an ordering system. The orders are stored in a SQLite DB and past orders can be retrieved. 

It has a front end built with React 18 and the Tanstack router and Tanstack query and a backend using a Fastify server and API on Node. 

It has both a controlled form to choose the pizza type and size when ordering and an uncontrolled form, a contact form. It also uses the following hooks:
useContext
useState
useEffect
useRef
usePizzaOfTheDay - a custom hook
useDebugValue
useMutation - Tanstack hook
useQuery - Tanstack hook

It also has a modal, an ErrorBoundary wrapped around a component and examples of lazy loading of some components.

The images and CSS are served to the front end from the server also.

A branch of this project has an update with React 19 release candidate geatures. There is code using Form actions, Suspense and the React compiler is also installed which provides memoization determined by the compiler. The React 19 branch is called rc19.

Vite is used to bundle this app. Eslint is configured using the new flattened format config. 

Vitest is used for testing. And as experiment some test use Playwright has to be installed using the following command.

npx install playwright for testing