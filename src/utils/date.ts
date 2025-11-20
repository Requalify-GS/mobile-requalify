export const convertDateToISO = (dateString: string): string => {
  if (!dateString || dateString.trim() === "") return "";

  const parts = dateString.split("/");
  if (parts.length !== 3) return "";

  const [day, month, year] = parts;
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const convertDateFromISO = (isoString: string): string => {
  if (!isoString || isoString.trim() === "") return "";

  const parts = isoString.split("-");
  if (parts.length !== 3) return "";

  const [year, month, day] = parts;
  return `${day}/${month}/${year}`;
};
