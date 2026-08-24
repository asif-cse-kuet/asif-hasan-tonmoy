import type { LocaleText } from './types'

export type ResearchPublication = {
  id: string
  title: LocaleText
  venue: string
  year: number
  doi: string
  doiUrl: string
  model: string
  metrics: ResearchMetric[]
  abstract: LocaleText
  tags: string[]
}

export type ResearchMetric = {
  label: LocaleText
  value: string
}

export const RESEARCH_PUBLICATIONS: ResearchPublication[] = [
  {
    id: 'iccit-2025-transmentalnet',
    title: {
      en: 'Mental Health Sign Recognition in Bengali Text: An Optimized Deep Learning Transformer Model for Imbalanced Classification',
      bn: 'বাংলা টেক্সটে মানসিক স্বাস্থ্য চিহ্ন শনাক্তকরণ: Imbalanced Classification-এর জন্য অপ্টিমাইজড ডিপ লার্নিং ট্রান্সফরমার মডেল',
    },
    venue: 'ICCIT 2025',
    year: 2025,
    doi: '10.1109/ICCIT68739.2025.11490477',
    doiUrl: 'https://doi.org/10.1109/ICCIT68739.2025.11490477',
    model: 'TransMentalNet-6',
    metrics: [
      {
        label: { en: 'Weighted F1 score', bn: 'Weighted F1 স্কোর' },
        value: '66.35%',
      },
      {
        label: { en: 'Dataset size', bn: 'ডেটাসেট আকার' },
        value: '27,031 samples',
      },
      {
        label: { en: 'Classes', bn: 'ক্লাস' },
        value: '12',
      },
      {
        label: { en: 'Base model lineage', bn: 'বেস মডেল লিনিয়েজ' },
        value: 'BanglaBERT',
      },
    ],
    abstract: {
      en: 'Proposes TransMentalNet-6, a transformer architecture tuned for severely imbalanced Bengali mental health sign classification across 12 disorder categories on 27,031 samples.',
      bn: 'TransMentalNet-6 প্রস্তাব করে - ২৭,০৩১ নমুনায় ১২টি disorder ক্যাটাগরিতে severely imbalanced বাংলা মানসিক স্বাস্থ্য চিহ্ন শ্রেণীবিভাগের জন্য টিউন করা ট্রান্সফরমার-ভিত্তিক আর্কিটেকচার।',
    },
    tags: ['nlp', 'bengali', 'mental-health', 'transformers', 'imbalanced-classification'],
  },
]

export const THESIS_LINEAGE: LocaleText = {
  en: 'KUET CSE thesis (2018–2023) to ICCIT 2025 publication: academic NLP research carried into production AI pipelines.',
  bn: 'KUET CSE থিসিস (২০১৮–২০২৩) থেকে ICCIT 2025 প্রকাশনা: একাডেমিক NLP গবেষণা প্রোডাকশন AI পাইপলাইনে নিয়ে যাওয়া।',
}
