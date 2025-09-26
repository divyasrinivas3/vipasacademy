// Education options type
export type Education = 'B.Tech' | 'B.E' | 'M.Tech' | 'MBA' | 'Degree' | '';

// Plan of Future union type
export type PlanOfFuture =
  | 'SAP Consultant'
  | 'Software Developer'
  | 'Data Analyst'
  | 'Business Analyst'
  | 'Project Manager'
  | 'Programmer'
  | '';

// Available coaching programs
export const COACHING_PROGRAMS = [
  'SAP SD',
  'SAP MM',
  'SAP FICO',
  'SAP PS',
  'SAP ABAP',
  'SAP Fiori',
  'SAP BTP',
  'SAP EC',
  'SF PMGM',
  'SF RCM/RMK',
  'SF OMB/OFB',
  'Full Stack Development',
  'Excel & Power BI',
  'SAC',
] as const;

export type CoachingProgram = typeof COACHING_PROGRAMS[number];

// Plan of Future options for dropdown
export const planOfFutureOptions: PlanOfFuture[] = [
  'SAP Consultant',
  'Software Developer',
  'Data Analyst',
  'Business Analyst',
  'Project Manager',
  'Programmer',
  
];

// Career options mapping
export const careerOptionsMap: Record<PlanOfFuture, CoachingProgram[]> = {
  'SAP Consultant': ['SAP SD', 'SAP MM', 'SAP FICO', 'SAP PS', 'SAP ABAP', 'SAP Fiori', 'SAP BTP', 'SAP EC'],
  'Software Developer': ['Full Stack Development', 'SAP ABAP', 'SAP Fiori', 'SAP BTP'],
  'Data Analyst': ['Excel & Power BI', 'SAC', 'SAP FICO', 'SAP SD'],
  'Business Analyst': ['SAP SD', 'SAP MM', 'SAP FICO', 'Excel & Power BI', 'SAC', 'SAP PS'],
  'Project Manager': ['SAP PS', 'Excel & Power BI', 'SAC', 'SAP MM'],
  'Programmer': ['Full Stack Development', 'SAP ABAP', 'SAP Fiori', 'SAP BTP'],
  '': [],
};

// Education options
export const educationOptions: Education[] = ['B.Tech', 'B.E', 'M.Tech', 'MBA', 'Degree'];

// Form data interface
export interface ContactFormData {
  name: string;
  contact: string;
  email: string;
  education: Education;
  planOfFuture: PlanOfFuture;
  careerPath: CoachingProgram | '';
}
