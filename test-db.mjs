import pg from 'pg';
const { Client } = pg;

const connectionString = "postgres://postgres:Number05@127.0.0.1:5432/nutritrain_storefront";

async function testConnection() {
  const client = new Client({
    connectionString,
  });

  try {
    console.log("Connecting to Postgres...");
    await client.connect();
    console.log("SUCCESS: Connected to Postgres successfully!");
    
    const res = await client.query('SELECT current_database(), current_user;');
    console.log("DB Info:", res.rows[0]);
    
  } catch (err) {
    console.error("FAILED to connect. Postgres Error:");
    console.error(err.message);
  } finally {
    await client.end();
  }
}

testConnection();
