/**
 * Validation and carrier detection helper for Ghanaian phone numbers
 */

export interface PhoneValidationResult {
  isValid: boolean;
  carrier?: 'MTN' | 'Telecel' | 'AT' | 'Ghana Network';
  error?: string;
  formatted?: string;
}

export function validateGhanaPhone(input: string): PhoneValidationResult {
  const trimmed = input.trim();
  if (!trimmed) {
    return {
      isValid: false,
      error: 'Phone number is required',
    };
  }

  // Remove spaces, hyphens, parentheses
  const cleaned = trimmed.replace(/[\s\-()]/g, '');

  // Check valid Ghana formats:
  // Option 1: 0[235][0-9]{8} (10 digits starting with 0)
  // Option 2: +233[235][0-9]{8} (13 characters)
  // Option 3: 233[235][0-9]{8} (12 digits)
  // Option 4: general 10 digits starting with 0
  const isLocalFormat = /^0[2-5][0-9]{8}$/.test(cleaned);
  const isIntlWithPlus = /^\+233[2-5][0-9]{8}$/.test(cleaned);
  const isIntlWithoutPlus = /^233[2-5][0-9]{8}$/.test(cleaned);

  if (!isLocalFormat && !isIntlWithPlus && !isIntlWithoutPlus) {
    // If it looks like a phone number but wrong length or prefix
    if (!/^[0-9+]+$/.test(cleaned)) {
      return {
        isValid: false,
        error: 'Phone number must only contain digits and optional + country code',
      };
    }
    if (cleaned.startsWith('0') && cleaned.length !== 10) {
      return {
        isValid: false,
        error: `Local phone number must be 10 digits (currently ${cleaned.length})`,
      };
    }
    return {
      isValid: false,
      error: 'Please enter a valid Ghanaian phone number (e.g. 024 123 4567 or +233 24 123 4567)',
    };
  }

  // Detect carrier prefix
  let standardLocal = cleaned;
  if (isIntlWithPlus) {
    standardLocal = '0' + cleaned.substring(4);
  } else if (isIntlWithoutPlus) {
    standardLocal = '0' + cleaned.substring(3);
  }

  const prefix3 = standardLocal.substring(0, 3);
  let carrier: 'MTN' | 'Telecel' | 'AT' | 'Ghana Network' = 'Ghana Network';

  // MTN: 024, 025, 053, 054, 055, 059
  if (['024', '025', '053', '054', '055', '059'].includes(prefix3)) {
    carrier = 'MTN';
  }
  // Telecel (formerly Vodafone): 020, 050
  else if (['020', '050'].includes(prefix3)) {
    carrier = 'Telecel';
  }
  // AT (AirtelTigo): 026, 027, 056, 057
  else if (['026', '027', '056', '057'].includes(prefix3)) {
    carrier = 'AT';
  }

  // Format nicely for display: e.g. 024 123 4567
  const formatted = `${standardLocal.substring(0, 3)} ${standardLocal.substring(3, 6)} ${standardLocal.substring(6)}`;

  return {
    isValid: true,
    carrier,
    formatted,
  };
}
