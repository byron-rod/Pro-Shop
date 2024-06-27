// routes/checkoutRoutes.js
import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/create", async (req, res) => {
  const {
    name,
    amount_in_cents,
    charge_type,
    currency,
    available_installments,
  } = req.body;

  const data = {
    product: {
      name,
      custom_payment_method_settings: "true",
      card_payments_enabled: "true",
      bank_transfer_payments_enabled: "true",
      available_installments: available_installments || [3, 6, 12, 18],
      prices_attributes: [
        {
          amount_in_cents,
          charge_type,
          currency,
        },
      ],
    },
  };

  try {
    const config = {
      method: "post",
      url: "https://app.recurrente.com/api/checkouts",
      headers: {
        "X-PUBLIC-KEY": process.env.X_PUBLIC_KEY,
        "X-SECRET-KEY": process.env.X_SECRET_KEY,
        "Content-Type": "application/json",
      },
      data,
    };

    const response = await axios(config);
    res.json(response.data);
  } catch (error) {
    console.error(
      "Error creating checkout:",
      error.response ? error.response.data : error.message
    );
    res
      .status(500)
      .json({
        error: error.response ? error.response.data : "Error creating checkout",
      });
  }
});

export default router;
