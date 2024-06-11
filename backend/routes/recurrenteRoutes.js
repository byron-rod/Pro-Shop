// routes/recurrenteRoutes.js
import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/test", async (req, res) => {
  try {
    const config = {
      method: "get",
      url: "https://app.recurrente.com/api/test",
      headers: {
        "X-PUBLIC-KEY": process.env.X_PUBLIC_KEY,
        "X-SECRET-KEY": process.env.X_SECRET_KEY,
        "Content-Type": "application/json",
      },
    };

    const response = await axios(config);
    res.json(response.data);
  } catch (error) {
    console.error(
      "Error testing authentication:",
      error.response ? error.response.data : error.message
    );
    res
      .status(500)
      .json({
        error: error.response
          ? error.response.data
          : "Error testing authentication",
      });
  }
});

export default router;
