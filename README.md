# CR Limpeza Profissional — Site em React

Site institucional/e-commerce da CR Limpeza Profissional, convertido para **React + Vite**, com o layout replicado a partir da imagem de referência (header, hero com kit de produtos, barra de informações, produtos, kits promocionais, serviços, indique e ganhe, por que nos escolher, depoimentos e rodapé).

## Como rodar o projeto

Pré-requisitos: [Node.js](https://nodejs.org) 18 ou superior instalado.

```bash
# 1. Instalar as dependências
npm install

# 2. Rodar em modo desenvolvimento (com hot reload)
npm run dev
# abra o endereço mostrado no terminal (geralmente http://localhost:5173)

# 3. Gerar a versão de produção (arquivos otimizados)
npm run build
# os arquivos finais ficam na pasta "dist"

# 4. Visualizar a versão de produção localmente
npm run preview
```

## Estrutura do projeto

```
src/
  assets/            → logo, imagem do hero e garrafas dos produtos
  assets/icons/       → ícones usados nas seções (extraídos do material enviado)
  assets/products/    → imagens das 5 garrafas (Cloro, Amaciante, Detergente, Desinfetante, Sabão Líquido)
  components/         → um componente por seção do site
    Header.jsx
    Hero.jsx
    InfoBar.jsx
    Products.jsx
    Kits.jsx
    Services.jsx
    Indique.jsx
    WhyChoose.jsx
    Testimonials.jsx
    Footer.jsx
    FloatWhatsapp.jsx
    OrderForm.jsx      → formulário de pedido de produtos/kits (calcula troco e envia pro WhatsApp)
    ServiceForm.jsx     → formulário de orçamento de serviços (dropdown estilizado com ícones)
    IconSelect.jsx      → dropdown reutilizável com ícone + texto, usado nos dois formulários
    Icon.jsx          → componente auxiliar que resolve o ícone certo por nome
  data.js             → todos os textos, preços, produtos, kits e serviços (edite aqui!)
  App.jsx             → monta a página juntando todas as seções
  index.css           → todo o estilo do site (cores, layout, responsividade)
```

## O que editar com mais frequência

- **Preços e produtos:** arquivo `src/data.js`
- **Número de WhatsApp:** constante `WHATSAPP_NUMBER` em `src/data.js` (formato: código do país + DDD + número, sem espaços/traços)
- **Textos dos depoimentos, serviços e "por que nos escolher":** também em `src/data.js`
- **Cores do site:** variáveis no topo do arquivo `src/index.css` (`:root { --navy, --blue, --yellow, --green ... }`)

## Formulários de pedido e orçamento

- **Faça seu Pedido** (produtos/kits): calcula o total automaticamente, e se a forma de pagamento for "Dinheiro" mostra um campo opcional "Troco para quanto?" que calcula o troco na hora. Ao enviar, abre o WhatsApp com a mensagem já formatada.
- **Contrate um Serviço**: dropdown estilizado com o ícone de cada serviço (Lavagem de Caixa d'Água, Dedetização, etc.) — a lista vem de `services` em `src/data.js`, então para adicionar um novo serviço (ex: capinação) basta incluir um item novo nesse array com um ícone disponível em `src/components/Icon.jsx`.

## Publicando o site

Depois de rodar `npm run build`, a pasta `dist/` contém um site estático pronto para subir em qualquer hospedagem (Vercel, Netlify, GitHub Pages, hospedagem compartilhada, etc.) — basta enviar o conteúdo dessa pasta.
