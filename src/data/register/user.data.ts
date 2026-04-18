import { generateUniqueEmail } from '../../helpers/common/random.helper';

export interface UserRegistrationData {
  name: string;
  email: string;
  password: string;
  title: 'Mr.' | 'Mrs.';
  dateOfBirth: {
    day: string;
    month: string;
    year: string;
  };
  newsletter: boolean;
  specialOffers: boolean;
  firstName: string;
  lastName: string;
  company?: string;
  address1: string;
  address2?: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  mobileNumber: string;
}

/**
 * Generates a complete UserRegistrationData object with a unique email
 * to avoid conflicts between test runs.
 */
export function generateUserData(): UserRegistrationData {
  return {
    name: 'Test User',
    email: generateUniqueEmail('testuser'),
    password: 'Password@123',
    title: 'Mr.',
    dateOfBirth: {
      day: '15',
      month: 'June',
      year: '1995',
    },
    newsletter: true,
    specialOffers: false,
    firstName: 'Test',
    lastName: 'User',
    company: 'QA Labs',
    address1: '123 Automation Street',
    address2: 'Suite 456',
    country: 'United States',
    state: 'California',
    city: 'Los Angeles',
    zipcode: '90001',
    mobileNumber: '0987654321',
  };
}
