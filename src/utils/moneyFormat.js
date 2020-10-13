export default function moneyFormat(number) {
  if (number === Math.round(number)) {
    return formatWithDollar(number) + ".00";
  }

  return formatWithDollar(number);
}

function formatWithDollar(number) {
  return "$" + number.toLocaleString("en-US");
}
