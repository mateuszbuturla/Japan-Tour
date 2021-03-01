const NormalizeString = (string: String) => {
  return string
    .replace(/\s/g, "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
};

export default NormalizeString;
