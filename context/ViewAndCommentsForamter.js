export const VCFormatter = (VC) => {
  const VCInt = parseInt(VC, 10);

  if (isNaN(VCInt)) return "Invalid Number";

  if (VCInt >= 1e9) return (VCInt / 1e9).toFixed(1) + "B";
  if (VCInt >= 1e6) return (VCInt / 1e6).toFixed(1) + "M";
  if (VCInt >= 1e3) return (VCInt / 1e3).toFixed(1) + "K";

  return VCInt.toString();
};
