require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
  ssl: { rejectUnauthorized: false } // optional: for RDS public instances
});
exports.handler = async (event) => {
  const damageGroup = event.queryStringParameters?.damageGroup || 1;
try {
    const result = await pool.query(
      `
      SELECT 
        id, name, damage_level, 
        ST_X(geom) as lon, 
        ST_Y(geom) as lat 
      FROM buildings 
      WHERE damage_group = $1
      LIMIT 100
    `,
      [damageGroup]
    );
return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(result.rows)
    };
  } catch (error) {
    console.error("Database error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" })
    };
  }
};
