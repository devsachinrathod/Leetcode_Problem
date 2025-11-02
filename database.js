import { Client } from "pg";

const client = new Client({
    connectionString: 'postgresql://neondb_owner:4J5mwDkltErb@ep-young-poetry-a5jqv8hn-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
})

function createDatabaseClient() {
    client.connect();
    const result = client.query(
        `
    CREATE TABLE IF NOT EXISTS surveys (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,    
        questions JSONB NOT NULL
        );  `
    );
    return result.then(() => {
        console.log("Database connected and table ensured.");
    });
}

function toAddtoDatabase(title, questions) {
    const insertQuery = `
    INSERT INTO surveys (title, questions)
    VALUES ($1, $2)
    RETURNING *;
    `;

    return client.query(insertQuery, [title, JSON.stringify(questions)])
        .then(res => {
            console.log("Survey added:", res.rows[0]);
            return res.rows[0];
        })
        .catch(err => {
            console.error("Error adding survey:", err);
            throw err;
        });
}
function displayAllSurveys() {
    const selectAllServeys = `
    SELECT * FROM surveys;`;

    selectAllServeys.map((survey) => {
        console.log(survey.title);
    });
    return client.query(selectAllServeys)
        .then(res => {
            console.log("All Surveys:", res.rows);
            return res.rows;
        })
        .catch(err => {
            console.error("Error fetching surveys:", err);
            throw err;
        });

}
createDatabaseClient();
toAddtoDatabase("Customer Satisfaction", [
    { question: "How satisfied are you with our service?", type: "rating" },
    { question: "What can we improve?", type: "text" }
]);
displayAllSurveys();