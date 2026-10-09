export  const toBanglaNumber = (num: number): string => {
      return num.toString().replace(/\d/g, (digit: string) => {
        return "০১২৩৪৫৬৭৮৯"[Number(digit)];
      });
    };



export const translateUnit = (unit: string): string => {
  const units: Record<string, string> = {
    kg: "কেজি",
    litre: "লিটার",
    dozen: "ডজন",
    piece: "পিস",
  };

  return units[unit] || unit;
};