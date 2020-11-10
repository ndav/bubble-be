## Insights Service

This is the insights microservice, built as a development demostration for Bubble.

I stuggled a little to work out an enhancement to demonstrate my skills but i settled on a booked duration aggregate which injests the confirmed bookings for a user and populates a db table with the injested data.

This is intended as a scheduled task and will only operate on bookings in the past (to prevent duplication)

[Swagger Definition](src/config/swagger.yaml)

# Enhancements - Time Permitting

- Full test coverage! (the service has partial test coverage)
- Perform aggregations in the db where they belong
- The service is fully dockerised but i would a build scripts for adding to the registry and deployment

# Service Dependencies

# External Dependencies

# Environment Variables

| Variable Name          | Default Value | Comment                 |
| ---------------------- | ------------- | ----------------------- |
| SERVICE_NAME           | insight       | The name of the service |
| ENV                    | dev           | Environment             |
| BASE_PATH              | /             | Service base path       |
| PORT                   | 4008          | Service port            |
| DB_CONNECTOR           | pg            | Database Connector      |
| DB_HOST                | localhost     | DB Host                 |
| DB_PORT                | 5432          | DB Port                 |
| DB_NAME                | bubble        | DB Name                 |
| DB_SYNCHRONIZE         | true          | Syncronise the Schema   |
| DB_SCHEMA              | insight       | DB Schema               |
| DB_SCHEMA_SSL          | true          | Uses SSL                |
| DB_SCHEMA_LOGGING      | true          | Log DB Queries          |
| TEST_DB_USER           | postgres      | Test DB User            |
| TEST_DB_CONNECTOR      | pg            | Test DB Connector       |
| TEST_DB_HOST           | localhost     | Test DB Host            |
| TEST_DB_PASSWORD       | password      | Test DB Password        |
| TEST_DB_PORT           | 5432          | Test DB Port            |
| TEST_DB_NAME           | bubble        | Test DB Name            |
| TEST_DB_SYNCHRONIZE    | true          | Test DB Syncronisse     |
| TEST_DB_SCHEMA         | insight       | Test DB Schema          |
| TEST_DB_SCHEMA_SSL     | true          | Test DB Uses SSL        |
| TEST_DB_SCHEMA_LOGGING | true          | Test DB Query Logging   |
| AUTH0_DOMAIN           | {hidden}      | Auth0 Domain            |
| AUTH0_AUDIENCE         | {hidden}      | Auth0 Audience          |
