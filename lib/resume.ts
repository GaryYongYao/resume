import resumeData from '@/data/resume.json'
import _ from 'lodash'

export interface CustomField {
  id: string
  icon: string
  text: string
  link: string
}

export interface ResumeBasics {
  name: string
  headline: string
  email: string
  phone: string
  location: string
  customFields: CustomField[]
}

export interface ExperienceItem {
  id: string
  company: string
  position: string
  location: string
  period: string
  website: { url: string; label: string }
  description: string
}

export interface ProjectItem {
  id: string
  name: string
  period: string
  website: { url: string; label: string }
  description: string
}

export interface SkillItem {
  id: string
  name: string
}

export interface EducationItem {
  id: string
  school: string
  degree: string
  area: string
}

export interface CertificationItem {
  id: string
  title: string
}

export interface LanguageItem {
  id: string
  language: string
  fluency: string
}

export const getBasics = (): ResumeBasics =>
  resumeData.basics as unknown as ResumeBasics

export const getSummary = (): string =>
  resumeData.summary.content

export const getExperience = (): ExperienceItem[] =>
  _.filter(resumeData.sections.experience.items, { hidden: false }) as unknown as ExperienceItem[]

export const getProjects = (): ProjectItem[] =>
  _.filter(resumeData.sections.projects.items, { hidden: false }) as unknown as ProjectItem[]

export const getSkills = (): SkillItem[] =>
  _.filter(resumeData.sections.skills.items, { hidden: false }) as unknown as SkillItem[]

export const getEducation = (): EducationItem[] =>
  _.filter(resumeData.sections.education.items, { hidden: false }) as unknown as EducationItem[]

export const getCertifications = (): CertificationItem[] =>
  _.filter(resumeData.sections.certifications.items, { hidden: false }) as unknown as CertificationItem[]

export const getLanguages = (): LanguageItem[] =>
  _.filter(resumeData.sections.languages.items, { hidden: false }) as unknown as LanguageItem[]
