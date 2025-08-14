import type { Category } from '@/lib/types';
import {
  Gift,
  Heart,
  HeartCrack,
  Sparkles,
  PartyPopper,
  GraduationCap,
  Users,
  MessageSquareHeart,
  Flower2,
  Pen,
  MessageCircleQuestion,
  Calendar,
} from 'lucide-react';

export const categories: Category[] = [
  {
    name: 'Birthday Wishes',
    slug: 'birthday',
    description: 'Find the perfect words to celebrate a special day.',
    icon: Gift,
  },
  {
    name: 'Love & Romance',
    slug: 'love-romance',
    description: 'Express your deepest feelings with our collection of romantic quotes.',
    icon: Heart,
  },
  {
    name: 'Heartbreak & Healing',
    slug: 'heartbreak-healing',
    description: 'Words of comfort and strength for navigating difficult times.',
    icon: HeartCrack,
  },
  {
    name: 'Inspiration & Motivation',
    slug: 'inspirational-motivational',
    description: 'Uplifting quotes to inspire and motivate you every day.',
    icon: Sparkles,
  },
  {
    name: 'Holiday Greetings',
    slug: 'holiday-greetings',
    description: 'Seasonal messages for Christmas, New Year, and more.',
    icon: PartyPopper,
  },
  {
    name: 'Life Milestones',
    slug: 'life-milestones',
    description: 'Celebrate weddings, graduations, new jobs, and other big moments.',
    icon: GraduationCap,
  },
  {
    name: 'Friendship & Family',
    slug: 'friendship-family',
    description: 'Quotes that cherish the bonds of friendship and family.',
    icon: Users,
  },
  {
    name: 'Daily Affirmations',
    slug: 'daily-affirmations',
    description: 'Positive affirmations to start your day with confidence.',
    icon: MessageSquareHeart,
  },
  {
    name: 'Sympathy & Support',
    slug: 'sympathy-support',
    description: 'Offer comfort and support with thoughtful messages.',
    icon: Flower2,
  },
  {
    name: 'Poems',
    slug: 'poems',
    description: 'A collection of poems for various moods and occasions.',
    icon: Pen,
  },
  {
    name: 'Social Media Captions',
    slug: 'social-media-captions',
    description: 'Ready-to-use captions to make your posts shine.',
    icon: MessageCircleQuestion,
  },
  {
    name: 'Monthly Celebrations',
    slug: 'monthly-celebrations',
    description: 'Messages to celebrate every month of the year.',
    icon: Calendar,
  },
];

export const getCategoryBySlug = (slug: string) => {
  return categories.find((category) => category.slug === slug);
};
