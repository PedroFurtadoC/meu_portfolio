# Meu Portfólio - Pedro Furtado Cunha

### Descrição

Este é o meu portfólio pessoal, desenvolvido com **Next.js**. O site apresenta informações sobre minha trajetória, habilidades, experiências e serviços que ofereço.

![Preview do Site](https://pedrofurtadoc.github.io/meu_portfolio/WebsitePreview.JPG)

---

## 🚀 Tecnologias Utilizadas

-   **Next.js**
-   **Google Fonts**
-   **AOS (Animate on Scroll)** para animações

---

## 📁 Estrutura do Projeto

```
meu_portfolio/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── public/
│   └── assets
│
├── src/
│   └── app/
│       ├── assets/
│       │
│       ├── components/
│       │
│       ├── content/
│       │
│       ├── sections/
│       │
│       ├── stores/
│       │
│       ├── utils/
│       │   ├── functions/
│       │   └── hooks/
│       │
│       ├── global.css
│       ├── layout.tsx
│       └── page.tsx
│
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🗂️ Detalhamento das Pastas

Abaixo estão descrições detalhadas das principais pastas dentro da estrutura do projeto, para facilitar a compreensão e manutenção do código:

-   **`utils/`** (`./src/app/utils/`):  
    Contém utilitários reutilizáveis da aplicação. Está dividida em:

    -   **`hooks/`** (`./src/app/utils/hooks/`):  
        Hooks personalizados utilizados para abstrair lógicas de estado ou efeitos colaterais.

    -   **`functions/`** (`./src/app/utils/functions/`):  
        Funções utilitárias reutilizáveis que auxiliam em cálculos, formatações e outras tarefas.

-   **`stores/`** (`./src/app/utils/stores/`):  
    Arquivos responsáveis pelo gerenciamento de estado global utilizando **Zustand**. Cada store centraliza dados e ações relacionadas à sua parte da aplicação.

-   **`content/`** (`./src/app/utils/content/`):  
    Contém os dados que alimentam as seções da página, como textos, listas de projetos, perguntas frequentes etc. Ideal para personalização sem alterar a lógica da aplicação.

-   **`sections/`** (`./src/app/utils/sections/`):  
    Componentes principais da página, divididos por seção (ex: Sobre, Projetos, Contato). Cada arquivo representa uma área visível do site.

-   **`components/`** (`./src/app/utils/components/`):  
    Componentes reutilizáveis menores, como botões, cards, ícones, ou elementos visuais utilizados em várias partes do layout.

---

## 📁 Conteúdo Personalizável

A pasta [`meu_portfolio/src/app/content/`](./src/app/content/) contém todos os conteúdos alteráveis da página. Nela você encontrará os arquivos responsáveis por textos, listas de projetos, habilidades, experiências e outras seções que aparecem no site.

### ✏️ Como editar

Você pode editar diretamente os arquivos dessa pasta para modificar o conteúdo exibido, sem precisar alterar a estrutura ou os componentes do layout. Isso facilita a personalização do portfólio de forma rápida e segura.

> ⚠️ Importante: Evite remover arquivos da pasta `content/` sem saber se eles são utilizados por alguma parte da aplicação. Modificações incorretas podem quebrar o layout ou causar erros de renderização.

---

## 📄 Estrutura da Página

A estrutura da página é composta por seções principais, cada uma localizada na pasta [`meu_portfolio/src/app/sections/`](./src/app/sections/):

1. **Sobre mim**
2. **Soluções**
3. **Depoimentos**
4. **FAQ**
5. **Projetos**
6. **Jornada**
7. **Contato**

---

## 🛠️ Como Rodar o Projeto

1. **Clone o Repositório**
    ```bash
    git clone -b main --single-branch https://github.com/PedroFurtadoC/meu_portfolio.git
    ```
2. **Abra o Projeto**

    ```bash
    cd meu_portfolio
    code .
    ```

3. **Instale as dependências**

    ```bash
     npm i
    ```

4. **Execute o projeto**

    ```bash
     npm run dev
    ```

5. **Abra no navegador**
    ```bash
     http://localhost:3000/meu_portfolio
    ```

---

## 📄 Licença

Este projeto está sob a **Licença MIT**.

---

## 📬 Contato

**Pedro Furtado Cunha**  
📧 [pedrocunha.furtado@gmail.com](mailto:pedrocunha.furtado@gmail.com)  
🔗 [LinkedIn](https://linkedin.com/in/pedro-furtado-33159023b) | [GitHub](https://github.com/PedroFurtadoC) | [Portfólio Online](https://pedrofurtadoc.github.io/meu_portfolio/)

---
