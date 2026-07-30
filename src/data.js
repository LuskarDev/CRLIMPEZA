import cloro from './assets/products/cloro.png'
import cloro1l from './assets/products/cloro-1l.png'
import cloro3l from './assets/products/cloro-3l.png'
import cloro5l from './assets/products/cloro-5l.png'
import cloroKit from './assets/products/cloro-kit.png'
import amaciante from './assets/products/amaciante.png'
import amaciante1l from './assets/products/amaciante-1l.png'
import amaciante3l from './assets/products/amaciante-3l.png'
import amaciante5l from './assets/products/amaciante-5l.png'
import amacianteKit from './assets/products/amaciante-kit.png'
import detergente from './assets/products/detergente.png'
import detergente1l from './assets/products/detergente-1l.png'
import detergente3l from './assets/products/detergente-3l.png'
import detergente5l from './assets/products/detergente-5l.png'
import detergenteKit from './assets/products/detergente-kit.png'
import desinfetante from './assets/products/desinfetante.png'
import desinfetante1l from './assets/products/desinfetante-1l.png'
import desinfetante3l from './assets/products/desinfetante-3l.png'
import desinfetante5l from './assets/products/desinfetante-5l.png'
import desinfetanteKit from './assets/products/desinfetante-kit.png'
import sabao from './assets/products/sabao.png'
import kit1lImg from './assets/kits/kit-1l.jpg'
import kit2lImg from './assets/kits/kit-2l.jpg'
import kit3lImg from './assets/kits/kit-3l.jpg'
import kit5lImg from './assets/kits/kit-5l.jpg'

export const WHATSAPP_NUMBER = '5521986253642'
export const WHATSAPP_DISPLAY = '(21) 98625-3642'
export const REVIEW_WHATSAPP_NUMBER = '5521971447401'

// Regras do programa de indicação: quem indica acumula pontos a cada pedido feito com seu cupom
export const REFERRAL_DISCOUNT_THRESHOLD = 3
export const REFERRAL_DISCOUNT_LABEL = 'Desconto especial'
export const REFERRAL_GIFT_THRESHOLD = 5
export const REFERRAL_GIFT_LABEL = 'Brinde exclusivo'

export const products = [
  {
    id: 'cloro-1l',
    name: 'Cloro',
    qty: '1 Litro',
    price: 4.5,
    img: cloro1l,
    desc: 'Ideal para desinfecção de pisos, ralos, banheiros e áreas externas.',
  },
  {
    id: 'cloro',
    name: 'Cloro',
    qty: '2 Litros',
    price: 8.99,
    img: cloro,
    desc: 'Ideal para desinfecção de pisos, ralos, banheiros e áreas externas.',
  },
  {
    id: 'cloro-3l',
    name: 'Cloro',
    qty: '3 Litros',
    price: 13.49,
    img: cloro3l,
    desc: 'Ideal para desinfecção de pisos, ralos, banheiros e áreas externas.',
  },
  {
    id: 'cloro-5l',
    name: 'Cloro',
    qty: '5 Litros',
    price: 15.0,
    img: cloro5l,
    desc: 'Ideal para desinfecção de pisos, ralos, banheiros e áreas externas.',
  },
  {
    id: 'amaciante-1l',
    name: 'Amaciante',
    qty: '1 Litro',
    price: 5.0,
    img: amaciante1l,
    desc: 'Deixa suas roupas macias, cheirosas e com perfume de longa duração.',
  },
  {
    id: 'amaciante',
    name: 'Amaciante',
    qty: '2 Litros',
    price: 9.99,
    img: amaciante,
    desc: 'Deixa suas roupas macias, cheirosas e com perfume de longa duração.',
  },
  {
    id: 'amaciante-3l',
    name: 'Amaciante',
    qty: '3 Litros',
    price: 14.99,
    img: amaciante3l,
    desc: 'Deixa suas roupas macias, cheirosas e com perfume de longa duração.',
  },
  {
    id: 'amaciante-5l',
    name: 'Amaciante',
    qty: '5 Litros',
    price: 24.99,
    img: amaciante5l,
    desc: 'Deixa suas roupas macias, cheirosas e com perfume de longa duração.',
  },
  {
    id: 'detergente-1l',
    name: 'Detergente',
    qty: '1 Litro',
    price: 4.5,
    img: detergente1l,
    desc: 'Remove gordura com eficiência, rende bastante e cuida das suas mãos.',
  },
  {
    id: 'detergente',
    name: 'Detergente',
    qty: '2 Litros',
    price: 8.99,
    img: detergente,
    desc: 'Remove gordura com eficiência, rende bastante e cuida das suas mãos.',
  },
  {
    id: 'detergente-3l',
    name: 'Detergente',
    qty: '3 Litros',
    price: 13.49,
    img: detergente3l,
    desc: 'Remove gordura com eficiência, rende bastante e cuida das suas mãos.',
  },
  {
    id: 'detergente-5l',
    name: 'Detergente',
    qty: '5 Litros',
    price: 22.48,
    img: detergente5l,
    desc: 'Remove gordura com eficiência, rende bastante e cuida das suas mãos.',
  },
  {
    id: 'desinfetante-1l',
    name: 'Desinfetante',
    qty: '1 Litro',
    price: 4.5,
    img: desinfetante1l,
    desc: 'Elimina germes e bactérias com perfume agradável e proteção prolongada.',
  },
  {
    id: 'desinfetante',
    name: 'Desinfetante',
    qty: '2 Litros',
    price: 8.99,
    img: desinfetante,
    desc: 'Elimina germes e bactérias com perfume agradável e proteção prolongada.',
  },
  {
    id: 'desinfetante-3l',
    name: 'Desinfetante',
    qty: '3 Litros',
    price: 13.49,
    img: desinfetante3l,
    desc: 'Elimina germes e bactérias com perfume agradável e proteção prolongada.',
  },
  {
    id: 'desinfetante-5l',
    name: 'Desinfetante',
    qty: '5 Litros',
    price: 20.0,
    img: desinfetante5l,
    desc: 'Elimina germes e bactérias com perfume agradável e proteção prolongada.',
  },
  {
    id: 'sabao-1l',
    name: 'Sabão Líquido',
    qty: '1 Litro',
    price: 5.0,
    img: sabao,
    desc: 'Limpeza profunda para o dia a dia, com ótimo rendimento e perfume.',
  },
  {
    id: 'sabao',
    name: 'Sabão Líquido',
    qty: '2 Litros',
    price: 9.99,
    img: sabao,
    desc: 'Limpeza profunda para o dia a dia, com ótimo rendimento e perfume.',
  },
  {
    id: 'sabao-3l',
    name: 'Sabão Líquido',
    qty: '3 Litros',
    price: 14.99,
    img: sabao,
    desc: 'Limpeza profunda para o dia a dia, com ótimo rendimento e perfume.',
  },
  {
    id: 'sabao-5l',
    name: 'Sabão Líquido',
    qty: '5 Litros',
    price: 24.99,
    img: sabao,
    desc: 'Limpeza profunda para o dia a dia, com ótimo rendimento e perfume.',
  },
]

export const kitBottles = [cloroKit, amacianteKit, detergenteKit, desinfetanteKit, sabao]

export const kits = [
  { id: 'kit-1l', label: '1 LITRO', price: '23,99', priceValue: 23.99, img: kit1lImg },
  { id: 'kit-2l', label: '2 LITROS', price: '39,90', priceValue: 39.9, img: kit2lImg },
  { id: 'kit-3l', label: '3 LITROS', price: '59,99', priceValue: 59.99, img: kit3lImg },
  { id: 'kit-5l', label: '5 LITROS', price: '119,90', priceValue: 119.9, img: kit5lImg },
]

export const paymentMethods = ['Pix', 'Dinheiro', 'Cartão de Crédito', 'Cartão de Débito']

export const showcaseServices = [
  {
    id: 'dedetizacao',
    icon: 'bug',
    name: 'Dedetização',
    text: 'Controle eficiente de pragas urbanas com segurança e eficácia.',
    href: '#servicos',
  },
  {
    id: 'limpeza',
    icon: 'mop',
    name: 'Serviços de Limpeza',
    text: 'Limpeza residencial, comercial e pós-obra com alto padrão.',
    href: '#servicos',
  },
  {
    id: 'cloro',
    icon: 'bottle',
    name: 'Cloro e Desinfetantes',
    text: 'Produtos de qualidade para higienização e proteção.',
    href: '#produtos',
  },
]

export const quickOrderProducts = [
  { id: 'cloro-5l', name: 'Cloro 5L', price: '15,00', img: cloro5l },
  { id: 'desinfetante-5l', name: 'Desinfetante 5L', price: '20,00', img: desinfetante5l },
  { id: 'cloro-10l', name: 'Cloro 10L', price: '25,00', img: cloro5l },
]

export const galleryCategories = [
  { id: 'todos', label: 'Todos' },
  { id: 'caixa-dagua', label: "Caixa d'Água" },
  { id: 'dedetizacao', label: 'Dedetização' },
  { id: 'limpeza-terreno', label: 'Limpeza de Terreno' },
  { id: 'esquadrias', label: 'Portas e Janelas' },
]

export const galleryItems = [
  {
    id: 'gt-antes-1',
    category: 'limpeza-terreno',
    title: 'Limpeza de Terreno - Antes',
    location: 'São Gonçalo - RJ',
    img: 'terreno-antes-1',
  },
  {
    id: 'gt-antes-2',
    category: 'limpeza-terreno',
    title: 'Limpeza de Terreno - Antes',
    location: 'São Gonçalo - RJ',
    img: 'terreno-antes-2',
  },
  {
    id: 'gt-antes-3',
    category: 'limpeza-terreno',
    title: 'Limpeza de Terreno - Antes',
    location: 'São Gonçalo - RJ',
    img: 'terreno-antes-3',
  },
  {
    id: 'gt-depois-1',
    category: 'limpeza-terreno',
    title: 'Limpeza de Terreno - Depois',
    location: 'São Gonçalo - RJ',
    img: 'terreno-depois-1',
  },
  {
    id: 'gt-depois-2',
    category: 'limpeza-terreno',
    title: 'Limpeza de Terreno - Depois',
    location: 'São Gonçalo - RJ',
    img: 'terreno-depois-2',
  },
  {
    id: 'gt-depois-3',
    category: 'limpeza-terreno',
    title: 'Limpeza de Terreno - Depois',
    location: 'São Gonçalo - RJ',
    img: 'terreno-depois-3',
  },
  {
    id: 'gt-depois-4',
    category: 'limpeza-terreno',
    title: 'Limpeza de Terreno - Depois',
    location: 'São Gonçalo - RJ',
    img: 'terreno-depois-4',
  },
  {
    id: 'gt-depois-5',
    category: 'limpeza-terreno',
    title: 'Limpeza de Terreno - Depois',
    location: 'São Gonçalo - RJ',
    img: 'terreno-depois-5',
  },
  {
    id: 'gt-depois-6',
    category: 'limpeza-terreno',
    title: 'Limpeza de Terreno - Depois',
    location: 'São Gonçalo - RJ',
    img: 'terreno-depois-6',
  },
  {
    id: 'gt-depois-7',
    category: 'limpeza-terreno',
    title: 'Limpeza de Terreno - Depois',
    location: 'São Gonçalo - RJ',
    img: 'terreno-depois-7',
  },
  {
    id: 'gt-depois-8',
    category: 'limpeza-terreno',
    title: 'Limpeza de Terreno - Depois',
    location: 'São Gonçalo - RJ',
    img: 'terreno-depois-8',
  },
  {
    id: 'gt-depois-9',
    category: 'limpeza-terreno',
    title: 'Limpeza de Terreno - Depois',
    location: 'São Gonçalo - RJ',
    img: 'terreno-depois-9',
  },
  {
    id: 'gt-depois-10',
    category: 'limpeza-terreno',
    title: 'Limpeza de Terreno - Depois',
    location: 'São Gonçalo - RJ',
    img: 'terreno-depois-10',
  },
  {
    id: 'gt-depois-11',
    category: 'limpeza-terreno',
    title: 'Limpeza de Terreno - Depois',
    location: 'São Gonçalo - RJ',
    img: 'terreno-depois-11',
  },
  {
    id: 'gt-depois-12',
    category: 'limpeza-terreno',
    title: 'Limpeza de Terreno - Depois',
    location: 'São Gonçalo - RJ',
    img: 'terreno-depois-12',
  },
  {
    id: 'gt2-antes-1',
    category: 'caixa-dagua',
    title: "Lavagem de Caixa d'Água - Antes",
    location: 'São Gonçalo - RJ',
    img: 'caixa-real-antes-1',
  },
  {
    id: 'gt2-antes-2',
    category: 'caixa-dagua',
    title: "Lavagem de Caixa d'Água - Antes",
    location: 'São Gonçalo - RJ',
    img: 'caixa-real-antes-2',
  },
  {
    id: 'gt2-antes-3',
    category: 'caixa-dagua',
    title: "Lavagem de Caixa d'Água - Antes",
    location: 'São Gonçalo - RJ',
    img: 'caixa-real-antes-3',
  },
  {
    id: 'gt2-antes-4',
    category: 'caixa-dagua',
    title: "Lavagem de Caixa d'Água - Antes",
    location: 'São Gonçalo - RJ',
    img: 'caixa-real-antes-4',
  },
  {
    id: 'gt2-antes-5',
    category: 'caixa-dagua',
    title: "Lavagem de Caixa d'Água - Antes",
    location: 'São Gonçalo - RJ',
    img: 'caixa-real-antes-5',
  },
  {
    id: 'gt2-antes-6',
    category: 'caixa-dagua',
    title: "Lavagem de Caixa d'Água - Antes",
    location: 'São Gonçalo - RJ',
    img: 'caixa-real-antes-6',
  },
  {
    id: 'gt2-depois-1',
    category: 'caixa-dagua',
    title: "Lavagem de Caixa d'Água - Depois",
    location: 'São Gonçalo - RJ',
    img: 'caixa-real-depois-1',
  },
  {
    id: 'gt2-depois-2',
    category: 'caixa-dagua',
    title: "Lavagem de Caixa d'Água - Depois",
    location: 'São Gonçalo - RJ',
    img: 'caixa-real-depois-2',
  },
  {
    id: 'gt2-depois-3',
    category: 'caixa-dagua',
    title: "Lavagem de Caixa d'Água - Depois",
    location: 'São Gonçalo - RJ',
    img: 'caixa-real-depois-3',
  },
  {
    id: 'gt2-depois-4',
    category: 'caixa-dagua',
    title: "Lavagem de Caixa d'Água - Depois",
    location: 'São Gonçalo - RJ',
    img: 'caixa-real-depois-4',
  },
  {
    id: 'gt3-antes-1',
    category: 'limpeza-terreno',
    title: 'Limpeza de Terreno - Antes',
    location: 'São Gonçalo - RJ',
    img: 'terreno2-antes-1',
  },
  {
    id: 'gt3-antes-2',
    category: 'limpeza-terreno',
    title: 'Limpeza de Terreno - Antes',
    location: 'São Gonçalo - RJ',
    img: 'terreno2-antes-2',
  },
  {
    id: 'gt3-antes-3',
    category: 'limpeza-terreno',
    title: 'Limpeza de Terreno - Antes',
    location: 'São Gonçalo - RJ',
    img: 'terreno2-antes-3',
  },
  {
    id: 'gt3-depois-1',
    category: 'limpeza-terreno',
    title: 'Limpeza de Terreno - Depois',
    location: 'São Gonçalo - RJ',
    img: 'terreno2-depois-1',
  },
  {
    id: 'gt3-depois-2',
    category: 'limpeza-terreno',
    title: 'Limpeza de Terreno - Depois',
    location: 'São Gonçalo - RJ',
    img: 'terreno2-depois-2',
  },
  {
    id: 'gt3-depois-3',
    category: 'limpeza-terreno',
    title: 'Limpeza de Terreno - Depois',
    location: 'São Gonçalo - RJ',
    img: 'terreno2-depois-3',
  },
  {
    id: 'ge-1',
    category: 'esquadrias',
    title: 'Instalação de Porta e Janela de Alumínio',
    location: 'São Gonçalo - RJ',
    img: 'esquadria-1',
  },
  {
    id: 'ge-2',
    category: 'esquadrias',
    title: 'Instalação de Janela de Alumínio',
    location: 'São Gonçalo - RJ',
    img: 'esquadria-2',
  },
  {
    id: 'ge-3',
    category: 'esquadrias',
    title: 'Instalação de Janela de Alumínio',
    location: 'São Gonçalo - RJ',
    img: 'esquadria-3',
  },
  {
    id: 'ge-4',
    category: 'esquadrias',
    title: 'Instalação de Janela de Alumínio',
    location: 'São Gonçalo - RJ',
    img: 'esquadria-4',
  },
  {
    id: 'ge-5',
    category: 'esquadrias',
    title: 'Instalação de Janelas de Alumínio',
    location: 'São Gonçalo - RJ',
    img: 'esquadria-5',
  },
  {
    id: 'gt4-antes-1',
    category: 'limpeza-terreno',
    title: 'Limpeza de Terreno Comercial - Antes',
    location: 'São Gonçalo - RJ',
    img: 'terreno3-antes-1',
  },
  {
    id: 'gt4-antes-2',
    category: 'limpeza-terreno',
    title: 'Limpeza de Terreno Comercial - Antes',
    location: 'São Gonçalo - RJ',
    img: 'terreno3-antes-2',
  },
  {
    id: 'gt4-depois-1',
    category: 'limpeza-terreno',
    title: 'Limpeza de Terreno Comercial - Depois',
    location: 'São Gonçalo - RJ',
    img: 'terreno3-depois-1',
  },
  {
    id: 'gc-antes-1',
    category: 'limpeza-terreno',
    title: 'Roçagem de Calçada e Muro - Antes',
    location: 'São Gonçalo - RJ',
    img: 'calcada-antes-1',
  },
  {
    id: 'gc-antes-2',
    category: 'limpeza-terreno',
    title: 'Roçagem de Calçada e Muro - Antes',
    location: 'São Gonçalo - RJ',
    img: 'calcada-antes-2',
  },
  {
    id: 'gc-depois-1',
    category: 'limpeza-terreno',
    title: 'Roçagem de Calçada e Muro - Depois',
    location: 'São Gonçalo - RJ',
    img: 'calcada-depois-1',
  },
  {
    id: 'gc-depois-2',
    category: 'limpeza-terreno',
    title: 'Roçagem de Calçada e Muro - Depois',
    location: 'São Gonçalo - RJ',
    img: 'calcada-depois-2',
  },
  {
    id: 'gc-depois-3',
    category: 'limpeza-terreno',
    title: 'Roçagem de Calçada e Muro - Depois',
    location: 'São Gonçalo - RJ',
    img: 'calcada-depois-3',
  },
  {
    id: 'gc-depois-4',
    category: 'limpeza-terreno',
    title: 'Roçagem de Calçada e Muro - Depois',
    location: 'São Gonçalo - RJ',
    img: 'calcada-depois-4',
  },
  {
    id: 'gt2-antes-7',
    category: 'caixa-dagua',
    title: "Lavagem de Caixa d'Água - Antes",
    location: 'São Gonçalo - RJ',
    img: 'caixa-real-antes-7',
  },
  {
    id: 'gt2-antes-8',
    category: 'caixa-dagua',
    title: "Lavagem de Caixa d'Água - Antes",
    location: 'São Gonçalo - RJ',
    img: 'caixa-real-antes-8',
  },
  {
    id: 'gd-1',
    category: 'dedetizacao',
    title: 'Dedetização Residencial',
    location: 'São Gonçalo - RJ',
    img: 'dedetizacao-real-1',
  },
  {
    id: 'gd-2',
    category: 'dedetizacao',
    title: 'Dedetização Residencial',
    location: 'São Gonçalo - RJ',
    img: 'dedetizacao-real-2',
  },
  {
    id: 'gd-3',
    category: 'dedetizacao',
    title: 'Dedetização de Jardim',
    location: 'São Gonçalo - RJ',
    img: 'dedetizacao-real-3',
  },
  {
    id: 'gd-4',
    category: 'dedetizacao',
    title: 'Dedetização de Jardim',
    location: 'São Gonçalo - RJ',
    img: 'dedetizacao-real-4',
  },
  {
    id: 'gd-5',
    category: 'dedetizacao',
    title: 'Dedetização de Área Externa',
    location: 'São Gonçalo - RJ',
    img: 'dedetizacao-real-5',
  },
  {
    id: 'gd-6',
    category: 'dedetizacao',
    title: 'Dedetização Interna',
    location: 'São Gonçalo - RJ',
    img: 'dedetizacao-real-6',
  },
  {
    id: 'gd-7',
    category: 'dedetizacao',
    title: 'Dedetização Interna',
    location: 'São Gonçalo - RJ',
    img: 'dedetizacao-real-7',
  },
  {
    id: 'gd-8',
    category: 'dedetizacao',
    title: 'Dedetização Interna',
    location: 'São Gonçalo - RJ',
    img: 'dedetizacao-real-8',
  },
  {
    id: 'gt4-1',
    category: 'limpeza-terreno',
    title: 'Roçagem e Limpeza de Terreno',
    location: 'São Gonçalo - RJ',
    img: 'terreno4-foto-1',
  },
  {
    id: 'gt4-2',
    category: 'limpeza-terreno',
    title: 'Roçagem e Limpeza de Terreno',
    location: 'São Gonçalo - RJ',
    img: 'terreno4-foto-2',
  },
  {
    id: 'gt4-3',
    category: 'limpeza-terreno',
    title: 'Roçagem e Limpeza de Terreno',
    location: 'São Gonçalo - RJ',
    img: 'terreno4-foto-3',
  },
  {
    id: 'gt4-4',
    category: 'limpeza-terreno',
    title: 'Roçagem e Limpeza de Terreno',
    location: 'São Gonçalo - RJ',
    img: 'terreno4-foto-4',
  },
  {
    id: 'gt4-5',
    category: 'limpeza-terreno',
    title: 'Roçagem e Limpeza de Terreno',
    location: 'São Gonçalo - RJ',
    img: 'terreno4-foto-5',
  },
  {
    id: 'gt4-6',
    category: 'limpeza-terreno',
    title: 'Roçagem e Limpeza de Terreno',
    location: 'São Gonçalo - RJ',
    img: 'terreno4-foto-6',
  },
  {
    id: 'gt4-7',
    category: 'limpeza-terreno',
    title: 'Roçagem e Limpeza de Terreno',
    location: 'São Gonçalo - RJ',
    img: 'terreno4-foto-7',
  },
  {
    id: 'gt4-8',
    category: 'limpeza-terreno',
    title: 'Roçagem e Limpeza de Terreno',
    location: 'São Gonçalo - RJ',
    img: 'terreno4-foto-8',
  },
  {
    id: 'gt4-9',
    category: 'limpeza-terreno',
    title: 'Roçagem e Limpeza de Terreno',
    location: 'São Gonçalo - RJ',
    img: 'terreno4-foto-9',
  },
  {
    id: 'gt4-10',
    category: 'limpeza-terreno',
    title: 'Roçagem e Limpeza de Terreno',
    location: 'São Gonçalo - RJ',
    img: 'terreno4-foto-10',
  },
  {
    id: 'gt4-11',
    category: 'limpeza-terreno',
    title: 'Roçagem e Limpeza de Terreno',
    location: 'São Gonçalo - RJ',
    img: 'terreno4-foto-11',
  },
  {
    id: 'gt4-12',
    category: 'limpeza-terreno',
    title: 'Roçagem e Limpeza de Terreno',
    location: 'São Gonçalo - RJ',
    img: 'terreno4-foto-12',
  },
  {
    id: 'gt4-13',
    category: 'limpeza-terreno',
    title: 'Roçagem e Limpeza de Terreno',
    location: 'São Gonçalo - RJ',
    img: 'terreno4-foto-13',
  },
  {
    id: 'gt2-antes-9',
    category: 'caixa-dagua',
    title: "Lavagem de Caixa d'Água - Antes",
    location: 'São Gonçalo - RJ',
    img: 'caixa-real2-antes-1',
  },
  {
    id: 'gt2-antes-10',
    category: 'caixa-dagua',
    title: "Lavagem de Caixa d'Água - Antes",
    location: 'São Gonçalo - RJ',
    img: 'caixa-real2-antes-2',
  },
  {
    id: 'gc2-1',
    category: 'limpeza-terreno',
    title: 'Roçagem de Calçada e Muro',
    location: 'São Gonçalo - RJ',
    img: 'calcada2-foto-1',
  },
  {
    id: 'gc2-2',
    category: 'limpeza-terreno',
    title: 'Roçagem de Calçada e Muro',
    location: 'São Gonçalo - RJ',
    img: 'calcada2-foto-2',
  },
  {
    id: 'gc2-3',
    category: 'limpeza-terreno',
    title: 'Roçagem de Calçada e Muro',
    location: 'São Gonçalo - RJ',
    img: 'calcada2-foto-3',
  },
  {
    id: 'gc2-4',
    category: 'limpeza-terreno',
    title: 'Roçagem de Calçada e Muro',
    location: 'São Gonçalo - RJ',
    img: 'calcada2-foto-4',
  },
]

export const beforeAfterItems = [
  {
    id: 'ba-terreno',
    title: 'Limpeza de Terreno',
    location: 'São Gonçalo - RJ',
    before: 'terreno-antes-1',
    after: 'terreno-depois-1',
  },
  {
    id: 'ba-caixa',
    title: "Lavagem de Caixa d'Água",
    location: 'São Gonçalo - RJ',
    before: 'caixa-real-antes-1',
    after: 'caixa-real-depois-1',
  },
  {
    id: 'ba-terreno2',
    title: 'Limpeza de Terreno',
    location: 'São Gonçalo - RJ',
    before: 'terreno2-antes-1',
    after: 'terreno2-depois-1',
  },
  {
    id: 'ba-terreno3',
    title: 'Limpeza de Terreno Comercial',
    location: 'São Gonçalo - RJ',
    before: 'terreno3-antes-1',
    after: 'terreno3-depois-1',
  },
  {
    id: 'ba-calcada',
    title: 'Roçagem de Calçada e Muro',
    location: 'São Gonçalo - RJ',
    before: 'calcada-antes-1',
    after: 'calcada-depois-1',
  },
]

export const services = [
  { id: 'caixa-dagua', icon: 'bucket', name: "Lavagem de Caixa d'Água" },
  { id: 'dedetizacao', icon: 'bug', name: 'Dedetização e Desinsetização' },
  { id: 'pos-obra', icon: 'mop', name: 'Limpeza Pós Obra' },
  { id: 'comercial', icon: 'buildings', name: 'Limpeza Comercial' },
  { id: 'higienizacao', icon: 'spray', name: 'Higienização e Sanitização' },
  { id: 'desentupimento', icon: 'pipe', name: 'Desentupimento em Geral' },
  { id: 'venda', icon: 'bottle', name: 'Venda de Produtos' },
]

export const whyItems = [
  { icon: 'shield', name: 'Produtos de Alta Qualidade' },
  { icon: 'handdollar', name: 'Preços Justos e Competitivos' },
  { icon: 'truck', name: 'Entrega Rápida e Segura' },
  { icon: 'headset', name: 'Atendimento Rápido e Humano' },
  { icon: 'handshake', name: 'Confiança e Credibilidade' },
  { icon: 'smiley', name: 'Satisfação Garantida' },
]

export const testimonials = [
  {
    name: 'Maria Silva',
    initials: 'MS',
    text: 'Produtos excelentes e entrega super rápida! Atendimento nota 10!',
  },
  {
    name: 'Carlos Souza',
    initials: 'CS',
    text: 'Melhor custo-benefício que já encontrei. Recomendo muito!',
  },
  {
    name: 'Juliana Martins',
    initials: 'JM',
    text: 'Tudo sempre muito bem embalado e entregue no prazo.',
  },
]

export const footerLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Kits', href: '#kits' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Indique e Ganhe', href: '#indique' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]
