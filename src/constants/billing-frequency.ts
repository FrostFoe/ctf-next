export interface IBillingFrequency {
  value: string;
  label: string;
  priceSuffix: string;
}

export const BillingFrequency: IBillingFrequency[] = [
  { value: 'month', label: 'মাসিক', priceSuffix: 'প্রতি ব্যবহারকারী/মাস' },
  { value: 'year', label: 'বার্ষিক', priceSuffix: 'প্রতি ব্যবহারকারী/বছর' },
];
