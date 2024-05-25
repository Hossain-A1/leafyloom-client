import React from 'react'

export default function CurrencyFormatter({amount}:{amount:number}) {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(amount);
}
