# End of Semester Projet - Deployment & DevOps

This is an encoding service which offers 2 endpoints for encoding and decoding strings passed in parameters

The project was developed using [Express](https://expressjs.com/), the [Node.js](https://nodejs.org/en/) web application framework.

# Functional endpoints

### `GET:: /encode/:str`

The encode endpoint allows the user to encode a string (passed as a parameter 'str') to base64

### `GET:: /decode/:str`

The decode endpoint allows the user to decode a string (passed as a parameter 'str') from base64

# CI/CD

To be completed

# Monitoring

The monitoring part of this application was made using the monitoring system & time series database [Prometheus](https://prometheus.io/), which records real-time metrics in a time series database built using a HTTP pull model, with flexible queries and real-time alerting, and also using [Grafana](https://grafana.com/), which is a multi-platform open source analytics and interactive visualization web application. It allows the admin to build operational dashboards to visualize its app data and metrics. It provides charts, graphs, and alerts for the web when connected to supported data sources (Prometheus in this case).

# Monitoring endpoints

### `GET:: /ping`

This endpoint allows the admin to check the health of the instance and if it's always running or broken.

### `GET:: /metrics`

This endpoint allows the admin to retrieve application metrics.

## Available Scripts

In the project directory, you can run:

### `npm dev`

Runs the app in the development mode.<br />
Accessible with [http://localhost:8080](http://localhost:8080) in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm start`

Runs the app in the release mode.<br />
Accessible with [http://localhost:8080](http://localhost:8080) in the browser.
