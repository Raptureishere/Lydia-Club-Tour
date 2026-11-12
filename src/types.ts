export type ScreenType = 'welcome' | 'register' | 'success';

export interface RegistrationFormData {
  fullName: string;
  indexNumber: string;
  phoneNumber: string;
  confirmed: boolean;
}

export interface RegistrationRecord extends RegistrationFormData {
  ticketId: string;
  timestamp: string;
  seatZone: string;
}

export interface FormErrors {
  fullName?: string;
  indexNumber?: string;
  phoneNumber?: string;
  confirmed?: string;
}
