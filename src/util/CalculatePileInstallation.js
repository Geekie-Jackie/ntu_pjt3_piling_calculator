// src/utils/CalculatePileInstallation.js
const CalculatePileInstallation = (
  casingTopLevel,
  groundLevel,
  cutOffLevel,
  tapeLength,
  designLength
) => {
  // Ensure all inputs are numbers; if not, use 0 as default
  const validatedCasingTopLevel = isNaN(casingTopLevel) ? 0 : casingTopLevel;
  const validatedCutOffLevel = isNaN(cutOffLevel) ? 0 : cutOffLevel;
  const validatedTapeLength = isNaN(tapeLength) ? 0 : tapeLength;
  const validatedDesignLength = isNaN(designLength) ? 0 : designLength;
  const validatedgroundLevel = isNaN(groundLevel) ? 0 : groundLevel;

  // Calculate the Actual Toe Level
  const actualToeLevel = validatedCasingTopLevel - validatedTapeLength;

  // Calculate the Actual Pile Length
  const actualPileLength = validatedCutOffLevel - actualToeLevel;

  // Calculate Pentration Depth
  const penetrationDepth = validatedgroundLevel - actualToeLevel;

  // Calculate the Percentage Difference
  const percentageDifference =
    ((validatedDesignLength - actualPileLength) / validatedDesignLength) * 100;

  // Handle division by zero in percentage calculation
  const safePercentageDifference = isFinite(percentageDifference)
    ? percentageDifference
    : 0;

  // Return the result as an object
  return {
    actualToeLevel,
    actualPileLength,
    penetrationDepth,
    percentageDifference: safePercentageDifference,
  };
};

export default CalculatePileInstallation;
