// index.js
const express = require("express");
const cors = require("cors");
const db = require("./db");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
// ✅ Example route: get locations by damage group
app.get("/locations", async (req, res) => {
  const { damageGroup } = req.query;
try {
    const result = await db.query(
      `
      SELECT 
        id, name, damage_level, 
        ST_X(geom) AS lon, 
        ST_Y(geom) AS lat 
      FROM buildings 
      WHERE damage_group = $1
    `,
      [damageGroup]
    );
res.json(result.rows);
  } catch (err) {
    console.error("Error querying PostGIS:", err);
    res.status(500).json({ error: "Database error" });
  }
});
app.listen(PORT, () => {
  console.log(`✅ API running on http://localhost:${PORT}`);
});


