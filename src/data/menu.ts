import type { MenuCategory, MenuItem } from '../types/domain';

export const menuCategories: MenuCategory[] = [
  { id:'tandoor', label:'Flame-charred legacies', image:'/assets/cat-appetizers.png' },
  { id:'curries', label:'Curries that comfort', image:'/assets/cat-curries.png' },
  { id:'biryani', label:'Biryani & Bread', image:'/assets/cat-biryani.png' },
  { id:'indo-chinese', label:'A fusion worth sharing', image:'/assets/cat-indo.png' },
  { id:'desserts', label:'Desserts & Drinks', image:'/assets/cat-desserts.png' },
];

const item = (id:string,name:string,description:string,price:string,image:string,category:string,extras:Partial<MenuItem> = {}):MenuItem => ({ id,name,description,price,image:`/assets/menu/${image}`,category,...extras });
export const menuItems: MenuItem[] = [
  item('murgh-malai','Murgh Malai Tikka','Silken chicken infused with cream, cheese and gentle spices.','$18.99','murgh-malai.png','tandoor',{spicy:true}),
  item('paneer-achari','Paneer Achari Tikka','Cottage cheese marinated in house pickle spices and grilled to perfection.','$18.99','paneer-achari.png','tandoor',{vegetarian:true}),
  item('seekh-kebab','Seekh Kebab','Minced lamb blended with spices and grilled on skewers.','$18.99','seekh-kebab.png','tandoor',{spicy:true}),
  item('tandoori-chicken','Tandoori Chicken','Classic bone-in chicken marinated in yogurt and spices.','$18.99','tandoori-chicken.png','tandoor'),
  item('murgh-malai-2','Murgh Malai Tikka','Silken chicken infused with cream, cheese and gentle spices.','$18.99','murgh-malai.png','tandoor',{spicy:true}),
  item('paneer-achari-2','Paneer Achari Tikka','Cottage cheese marinated in house pickle spices and grilled to perfection.','$18.99','paneer-achari.png','tandoor',{vegetarian:true}),
  item('dal-makhani','Dal Makhani','Black lentils simmered overnight with butter and cream.','$18.99','dal-makhani.png','curries',{vegetarian:true}),
  item('butter-chicken','Butter Chicken','Tandoori chicken in a rich tomato and butter gravy.','$18.99','butter-chicken.png','curries'),
  item('malabar-prawn','Malabar Prawn Curry','Prawns cooked in coconut and spice infused coastal curry.','$18.99','malabar-prawn.png','curries',{spicy:true}),
  item('paneer-kadai','Paneer Kadai','Cottage cheese with bell peppers in a bold tomato masala.','$18.99','paneer-kadai.png','curries',{vegetarian:true}),
  item('dal-makhani-2','Dal Makhani','Black lentils simmered overnight with butter and cream.','$18.99','dal-makhani.png','curries',{vegetarian:true}),
  item('paneer-kadai-2','Paneer Kadai','Cottage cheese with bell peppers in a bold tomato masala.','$18.99','paneer-kadai.png','curries',{vegetarian:true}),
  item('lucknowi','Lucknowi Murgh Biryani','Fragrant basmati layered with tender chicken and subtle spices.','$24.50','lucknowi-biryani.png','biryani',{featured:true}),
  item('hyderabadi','Hyderabadi Veg Biryani','Aromatic basmati with garden vegetables and saffron.','$12.75','hyderabadi-biryani.png','biryani',{vegetarian:true}),
  item('garlic-naan','Garlic Naan','Soft tandoor naan brushed with garlic and butter.','$29.99','garlic-naan.png','biryani',{vegetarian:true}),
  item('laccha','Laccha Paratha','Multi-layered whole wheat paratha cooked on tawa.','$15.00','laccha-paratha.png','biryani',{vegetarian:true}),
  item('lucknowi-2','Lucknowi Murgh Biryani','Fragrant basmati layered with tender chicken and subtle spices.','$33.20','lucknowi-biryani.png','biryani',{featured:true,spicy:true}),
  item('laccha-2','Laccha Paratha','Multi-layered whole wheat paratha cooked on tawa.','$9.49','laccha-paratha.png','biryani',{vegetarian:true}),
  item('chilli-paneer','Chilli Paneer','Crispy cottage cheese tossed in spicy Indo-Chinese sauce.','$17.59','chilli-paneer.png','indo-chinese',{vegetarian:true,spicy:true}),
  item('veg-manchurian','Veg Manchurian','Crispy vegetable balls in a tangy, savoury brown sauce.','$16.99','veg-manchurian.png','indo-chinese',{vegetarian:true}),
  item('chicken-65','Chicken 65','Spicy, deep-fried chicken bites with curry leaves.','$18.99','chicken-65.png','indo-chinese',{spicy:true}),
  item('hakka','Hakka Noodles','Stir-fried noodles with vegetables and classic seasonings.','$15.99','hakka-noodles.png','indo-chinese'),
  item('chilli-paneer-2','Chilli Paneer','Crispy cottage cheese tossed in spicy Indo-Chinese sauce.','$17.59','chilli-paneer.png','indo-chinese',{vegetarian:true,spicy:true}),
  item('veg-manchurian-2','Veg Manchurian','Crispy vegetable balls in a tangy, savoury brown sauce.','$16.99','veg-manchurian.png','indo-chinese',{vegetarian:true}),
  item('gulab','Gulab Jamun','Soft milk dumplings in rose flavoured sugar syrup.','$6.99','gulab-jamun.png','desserts',{vegetarian:true}),
  item('kulfi','Kulfi (Pistachio)','Traditional Indian ice cream garnished with pistachios.','$7.99','kulfi.png','desserts',{vegetarian:true}),
  item('chai','Masala Chai','Spiced Indian tea brewed to warm your soul.','$4.49','masala-chai.png','desserts',{vegetarian:true}),
  item('lassi','Mango Lassi','Creamy yogurt blended with mango and cardamom.','$5.49','mango-lassi.png','desserts',{vegetarian:true}),
  item('gulab-2','Gulab Jamun','Soft milk dumplings in rose flavoured sugar syrup.','$6.99','gulab-jamun.png','desserts',{vegetarian:true}),
  item('kulfi-2','Kulfi (Pistachio)','Traditional Indian ice cream garnished with pistachios.','$7.99','kulfi.png','desserts',{vegetarian:true}),
];
