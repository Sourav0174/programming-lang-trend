# Programming Trends Server

An Express.js server that serves data on top 80 programming languages with 10-year trends and growth.

## Getting Started

1. Install dependencies:
```
npm install
```

2. Start the server:
```
npm start
```

3. API Endpoint:
- `GET /api/languages` – returns the full language trends data.

## Example Response
```json
[
  {
    "name": "JavaScript",
    "trend": [87, 85, 88, 89, 90, 92, 95, 97, 96, 98],
    "growth": "+11%"
  },
  ...
]
```