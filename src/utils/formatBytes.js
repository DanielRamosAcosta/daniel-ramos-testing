const concatIfNotEmpty = (...values) => values.filter((x) => x).join(" ");

const formatTb = (value) => `${value}TB`;
const formatGb = (value) => `${value}GB`;
const formatMb = (value) => `${value}MB`;

const formatMap = [
  { breakpoint: 1000000, formatFn: formatTb },
  { breakpoint: 1000, formatFn: formatGb },
  { breakpoint: 1, formatFn: formatMb },
];

export default function formatBytes(megaBytes) {
  if (megaBytes === 0) {
    return "";
  }

  const format = formatMap.find((format) => megaBytes >= format.breakpoint);

  if (format) {
    const reminder = Math.floor(megaBytes / format.breakpoint);
    const value = megaBytes % format.breakpoint;

    return concatIfNotEmpty(format.formatFn(reminder), formatBytes(value));
  }
}
