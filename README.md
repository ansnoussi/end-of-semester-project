# End of Semester Projet - Deployment & DevOps

The project was developed using [Express](https://expressjs.com/), the [Node.js](https://nodejs.org/en/) web application framework.

## 🏃 Run the project
To run the project, simply clone the repo and start it using docker-compose :
```bash
make start
```
This will run :
- [http://localhost:8080](http://localhost:8080) : The Express app.
- [http://localhost:9090](http://localhost:9090) : Prometheus Dashboard.
- [http://localhost:3000](http://localhost:3000) : Grafana Dashboard.

## ⚙️ Functional endpoints

| Endpoint           | Description                                                              |
|--------------------|--------------------------------------------------------------------------|
| GET:: /encode/:str | The `encode` endpoint to encode a string `str` into base64               |
| GET:: /decode/:str | The `decode` endpoint to decode a string `str` from base64 back to ascii |

## 🧪 Tests

### 1. Unit tests
This project uses [Jest](https://jestjs.io/) to run unit tests and generate a coverage report (**100% coverge** btw).

```bash
make test
```

### 2. Load test
This project uses [Artillery](https://www.artillery.io/) to run load test and generate a report (under `reports/report.html`).

```bash
make load-test
```
## 📦 Continious Integration

Defined in `.github/workflows/node.js.yml`, runs the following on pull requests to the `main` branch :
- Runs unit tests on different Node.js versions (12.x, 14.x, 16.x).
- Runs a lint job.
## 📦 Continious Deployment

Defined in `.github/workflows/release.yml`, runs the following on pull requests to the `main` branch :
1. Build docker image and tag it.
2. Push the image to docker hub.
3. updates the `docker-compose` file
4. deploys the docker-compose file in the machine.

## 📊 Monitoring

For monitoring the health of this project we used :
- [Prometheus](https://prometheus.io/) : records real-time metrics in a time series database built using a HTTP pull model, with flexible queries and real-time alerting.
- [Grafana](https://grafana.com/) : multi-platform open source analytics and interactive visualization web application

We also defined 2 custom metrics and later used them in Grafana :
- `node_encode_request_total` : a mtric of type **Counter** to record the total number of requests to the `/encode` endpoint.
- `node_decode_request_total` : a mtric of type **Counter** to record the total number of requests to the `/decode` endpoint.
#### `GET:: /metrics`

This endpoint allows the admin to retrieve application metrics.

## 🚨 Alerting

Alerting is implemented using [AlertManager](https://prometheus.io/docs/alerting/latest/alertmanager/) which is a single binary that handles alerts sent by [Prometheus](https://prometheus.io/) server and notifies end user through E-mail.
