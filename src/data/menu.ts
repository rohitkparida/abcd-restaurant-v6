import catalog from './restaurant-menu.json';
import type { MenuCategory, MenuItem } from '../types/domain';

type Diet = 'veg' | 'nonveg' | 'custom';
interface SourceItem { name:string; price:string; description:string; diet:Diet; spicy:boolean }
interface SourceSection { title:string; note?:string; items:SourceItem[] }
interface SourceCategory { id:string; letter:string; title:string; sections:SourceSection[] }

const source = catalog as SourceCategory[];
const slug = (value:string) => value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const categoryImages:Record<string,string> = {
  appetizers:'/assets/cat-appetizers.png',
  'biryani-bread':'/assets/cat-biryani.png',
  curries:'/assets/cat-curries.png',
  'desserts-drinks':'/assets/cat-desserts.png',
};
const fallbackImages:Record<string,string> = {
  appetizers:'murgh-malai.png',
  'biryani-bread':'lucknowi-biryani.png',
  curries:'dal-makhani.png',
  'desserts-drinks':'gulab-jamun.png',
};
const knownImages:Record<string,string> = {
  'classic-tandoori-chicken':'tandoori-chicken.png', 'veg-manchurian':'veg-manchurian.png',
  'chilli-paneer':'chilli-paneer.png', 'chilli-chicken':'chicken-65.png',
  'hyderabadi-chicken-65':'chicken-65.png', 'hyderabadi-veg-dum-biryani':'hyderabadi-biryani.png',
  'laccha-paratha':'laccha-paratha.png', 'garlic-naan':'garlic-naan.png',
  'dal-makhani':'dal-makhani.png', 'delhi-waala-butter-chicken':'butter-chicken.png',
  'goan-prawn-curry':'malabar-prawn.png', 'gulab-jamun':'gulab-jamun.png',
  'mango-lassi':'mango-lassi.png', 'masala-chai':'masala-chai.png',
};

export const menuCatalog = source.map(category => ({
  ...category,
  sections:category.sections.map((section, sectionIndex) => ({
    ...section,
    id:`${category.id}-${slug(section.title)}`,
    items:section.items.map((entry, itemIndex):MenuItem => {
      const itemSlug=slug(entry.name);
      return {
        id:`${category.id}-${sectionIndex}-${itemIndex}-${itemSlug}`,
        name:entry.name,
        description:entry.description,
        price:`$${entry.price}`,
        image:`/assets/menu/${knownImages[itemSlug] ?? fallbackImages[category.id]}`,
        category:category.id,
        diet:entry.diet,
        vegetarian:entry.diet === 'veg',
        spicy:entry.spicy,
      };
    }),
  })),
}));

export const menuCategories:MenuCategory[] = source.map(category => ({
  id:category.id,
  label:category.title,
  image:categoryImages[category.id] ?? '/assets/cat-appetizers.png',
}));

export const menuItems:MenuItem[] = menuCatalog.flatMap(category => category.sections.flatMap(section => section.items));
