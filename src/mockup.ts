import { Roadmap } from "./types/roadmap.type";

export const mockRoadmaps: Roadmap[] = [
  {
    id: 1,
    userId: 1,
    userName: "Guilherme Alves",
    targetOccupation: "Desenvolvedor Full Stack",
    description:
      "Torne-se um desenvolvedor completo dominando frontend e backend, integrações, deploy e melhores práticas de desenvolvimento.",
    checkpoints: [
      {
        id: 1,
        title: "Fundamentos HTML & CSS",
        description:
          "Aprenda a estruturar páginas web com HTML5 e estilizar com CSS3. Domine conceitos de responsividade, flexbox e grid.",
        order: 1,
        courses: [
          {
            id: 1,
            name: "HTML5 Completo - Do Básico ao Avançado",
            platform: "YouTube",
            url: "https://www.youtube.com/watch?v=Ejkb_YpuHWs",
            description: "Curso completo de HTML5 com projetos práticos",
            durationHours: 8,
          },
          {
            id: 2,
            name: "CSS3 - Curso Completo",
            platform: "Udemy",
            url: "https://www.udemy.com/course/css-completo",
            description: "Do básico ao avançado com Flexbox e Grid",
            durationHours: 12,
          },
          {
            id: 3,
            name: "Responsive Web Design",
            platform: "freeCodeCamp",
            url: "https://www.freecodecamp.org/learn/responsive-web-design",
            description: "Aprenda a criar sites responsivos",
            durationHours: 15,
          },
        ],
      },
      {
        id: 2,
        title: "JavaScript Moderno (ES6+)",
        description:
          "Domine a linguagem JavaScript com recursos modernos. Aprenda sobre arrow functions, promises, async/await e muito mais.",
        order: 2,
        courses: [
          {
            id: 4,
            name: "JavaScript Completo ES6+",
            platform: "Origamid",
            url: "https://www.origamid.com/curso/javascript-completo-es6",
            description: "Curso completo com projetos reais",
            durationHours: 74,
          },
          {
            id: 5,
            name: "JavaScript: Understanding the Weird Parts",
            platform: "Udemy",
            url: "https://www.udemy.com/course/understand-javascript",
            description: "Entenda profundamente como JavaScript funciona",
            durationHours: 11,
          },
        ],
      },
      {
        id: 3,
        title: "React.js - Framework Frontend",
        description:
          "Construa interfaces modernas e reativas com React. Aprenda hooks, context API, e gerenciamento de estado.",
        order: 3,
        courses: [
          {
            id: 6,
            name: "React - The Complete Guide",
            platform: "Udemy",
            url: "https://www.udemy.com/course/react-the-complete-guide",
            description: "Do básico ao avançado com hooks e Redux",
            durationHours: 40,
          },
          {
            id: 7,
            name: "React Hooks em Profundidade",
            platform: "YouTube",
            url: "https://www.youtube.com/watch?v=6ThXsUwLWvc",
            description: "Entenda todos os hooks do React",
            durationHours: 3,
          },
        ],
      },
      {
        id: 4,
        title: "Node.js e APIs RESTful",
        description:
          "Desenvolva o backend com Node.js e Express. Crie APIs RESTful robustas e escaláveis.",
        order: 4,
        courses: [
          {
            id: 8,
            name: "Node.js: O Guia Completo",
            platform: "Udemy",
            url: "https://www.udemy.com/course/nodejs-o-guia-completo",
            description: "Do zero ao deploy com Express e MongoDB",
            durationHours: 35,
          },
          {
            id: 9,
            name: "REST API Design Best Practices",
            platform: "Pluralsight",
            url: "https://www.pluralsight.com/courses/rest-api-design",
            description: "Aprenda as melhores práticas de design de APIs",
            durationHours: 6,
          },
        ],
      },
      {
        id: 5,
        title: "Banco de Dados SQL e NoSQL",
        description:
          "Trabalhe com bancos relacionais (PostgreSQL) e não relacionais (MongoDB). Aprenda queries, modelagem e otimização.",
        order: 5,
        courses: [
          {
            id: 10,
            name: "PostgreSQL: Do Básico ao Avançado",
            platform: "Udemy",
            url: "https://www.udemy.com/course/postgresql-completo",
            description: "Domine SQL com PostgreSQL",
            durationHours: 20,
          },
          {
            id: 11,
            name: "MongoDB University - M001",
            platform: "MongoDB University",
            url: "https://university.mongodb.com/courses/M001",
            description: "Curso oficial de MongoDB",
            durationHours: 8,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    userId: 1,
    userName: "Guilherme Alves",
    targetOccupation: "Desenvolvedor Mobile React Native",
    description:
      "Desenvolva aplicativos nativos e multiplataforma para iOS e Android usando React Native e as melhores práticas mobile.",
    checkpoints: [
      {
        id: 6,
        title: "Fundamentos do React Native",
        description:
          "Configure o ambiente e aprenda os conceitos básicos de desenvolvimento mobile com React Native.",
        order: 1,
        courses: [
          {
            id: 12,
            name: "React Native - The Practical Guide",
            platform: "Udemy",
            url: "https://www.udemy.com/course/react-native-practical-guide",
            description: "Do setup ao deploy na Play Store e App Store",
            durationHours: 31,
          },
          {
            id: 13,
            name: "Introdução ao Expo",
            platform: "YouTube",
            url: "https://www.youtube.com/watch?v=qSRrxpdMpVc",
            description: "Aprenda a usar o Expo para desenvolvimento rápido",
            durationHours: 2,
          },
        ],
      },
      {
        id: 7,
        title: "Navegação e Roteamento",
        description:
          "Implemente navegação entre telas com React Navigation. Aprenda Stack, Tab e Drawer navigators.",
        order: 2,
        courses: [
          {
            id: 14,
            name: "React Navigation 6 - Complete Guide",
            platform: "YouTube",
            url: "https://www.youtube.com/watch?v=nQVCkqvU1uE",
            description: "Guia completo de navegação em React Native",
            durationHours: 4,
          },
        ],
      },
      {
        id: 8,
        title: "APIs Nativas e Integrações",
        description:
          "Acesse recursos do dispositivo como câmera, galeria, localização e notificações push.",
        order: 3,
        courses: [
          {
            id: 15,
            name: "React Native: Módulos Nativos",
            platform: "Udemy",
            url: "https://www.udemy.com/course/react-native-modulos-nativos",
            description: "Integre funcionalidades nativas ao seu app",
            durationHours: 15,
          },
          {
            id: 16,
            name: "Push Notifications com Firebase",
            platform: "YouTube",
            url: "https://www.youtube.com/watch?v=VW1kzskmKCA",
            description: "Implemente notificações push",
            durationHours: 3,
          },
        ],
      },
      {
        id: 9,
        title: "Performance e Otimização",
        description:
          "Otimize seu aplicativo para melhor desempenho. Aprenda sobre profiling, lazy loading e best practices.",
        order: 4,
        courses: [
          {
            id: 17,
            name: "React Native Performance",
            platform: "Egghead",
            url: "https://egghead.io/courses/react-native-performance",
            description: "Técnicas avançadas de otimização",
            durationHours: 5,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    userId: 1,
    userName: "Guilherme Alves",
    targetOccupation: "Cientista de Dados",
    description:
      "Entre no mundo da ciência de dados. Aprenda Python, análise exploratória, machine learning e visualização de dados.",
    checkpoints: [
      {
        id: 10,
        title: "Python para Data Science",
        description:
          "Domine Python e suas principais bibliotecas: NumPy, Pandas e Matplotlib.",
        order: 1,
        courses: [
          {
            id: 18,
            name: "Python para Data Science e Machine Learning",
            platform: "Udemy",
            url: "https://www.udemy.com/course/python-para-data-science",
            description: "Do zero ao avançado em Data Science",
            durationHours: 44,
          },
          {
            id: 19,
            name: "NumPy Tutorial - freeCodeCamp",
            platform: "YouTube",
            url: "https://www.youtube.com/watch?v=QUT1VHiLmmI",
            description: "Tutorial completo de NumPy",
            durationHours: 1,
          },
          {
            id: 20,
            name: "Pandas Essentials",
            platform: "DataCamp",
            url: "https://www.datacamp.com/courses/pandas-foundations",
            description: "Análise de dados com Pandas",
            durationHours: 4,
          },
        ],
      },
      {
        id: 11,
        title: "Machine Learning Fundamentals",
        description:
          "Aprenda os algoritmos fundamentais de ML: regressão, classificação, clustering e árvores de decisão.",
        order: 2,
        courses: [
          {
            id: 21,
            name: "Machine Learning A-Z",
            platform: "Udemy",
            url: "https://www.udemy.com/course/machinelearning",
            description: "Curso completo de Machine Learning",
            durationHours: 40,
          },
          {
            id: 22,
            name: "Scikit-Learn Tutorial",
            platform: "YouTube",
            url: "https://www.youtube.com/watch?v=0B5eIE_1vpU",
            description: "Biblioteca essencial para ML em Python",
            durationHours: 2,
          },
        ],
      },
      {
        id: 12,
        title: "SQL para Análise de Dados",
        description:
          "Domine SQL para extrair, transformar e analisar dados de bancos relacionais.",
        order: 3,
        courses: [
          {
            id: 23,
            name: "SQL para Data Science",
            platform: "Coursera",
            url: "https://www.coursera.org/learn/sql-for-data-science",
            description: "Aprenda SQL focado em análise de dados",
            durationHours: 15,
          },
        ],
      },
      {
        id: 13,
        title: "Visualização de Dados",
        description:
          "Comunique insights através de visualizações impactantes com Matplotlib, Seaborn e Plotly.",
        order: 4,
        courses: [
          {
            id: 24,
            name: "Data Visualization with Python",
            platform: "Coursera",
            url: "https://www.coursera.org/learn/python-for-data-visualization",
            description: "Crie visualizações profissionais",
            durationHours: 20,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    userId: 1,
    userName: "Guilherme Alves",
    targetOccupation: "Engenheiro DevOps",
    description:
      "Automatize deploys e gerencie infraestrutura. Aprenda Docker, Kubernetes, CI/CD e cloud computing.",
    checkpoints: [
      {
        id: 14,
        title: "Linux e Bash Scripting",
        description:
          "Fundamentos de Linux e automação com scripts Bash. Essencial para qualquer DevOps.",
        order: 1,
        courses: [
          {
            id: 25,
            name: "Linux para Desenvolvedores",
            platform: "Udemy",
            url: "https://www.udemy.com/course/linux-completo",
            description: "Do básico ao avançado em Linux",
            durationHours: 22,
          },
          {
            id: 26,
            name: "Bash Scripting Tutorial",
            platform: "YouTube",
            url: "https://www.youtube.com/watch?v=tK9Oc6AEnR4",
            description: "Automatize tarefas com Bash",
            durationHours: 3,
          },
        ],
      },
      {
        id: 15,
        title: "Docker e Containerização",
        description:
          "Containerize aplicações com Docker. Aprenda Dockerfile, Docker Compose e orquestração básica.",
        order: 2,
        courses: [
          {
            id: 27,
            name: "Docker Mastery",
            platform: "Udemy",
            url: "https://www.udemy.com/course/docker-mastery",
            description: "Do básico ao Kubernetes",
            durationHours: 19,
          },
          {
            id: 28,
            name: "Docker Compose na Prática",
            platform: "YouTube",
            url: "https://www.youtube.com/watch?v=Kzcz-EVKBEQ",
            description: "Gerencie múltiplos containers",
            durationHours: 2,
          },
        ],
      },
      {
        id: 16,
        title: "Kubernetes - Orquestração",
        description:
          "Orquestre containers em produção com Kubernetes. Aprenda pods, services, deployments e scaling.",
        order: 3,
        courses: [
          {
            id: 29,
            name: "Kubernetes for Beginners",
            platform: "Udemy",
            url: "https://www.udemy.com/course/learn-kubernetes",
            description: "Do zero ao deploy em produção",
            durationHours: 6,
          },
        ],
      },
      {
        id: 17,
        title: "CI/CD e Automação",
        description:
          "Implemente pipelines de integração e deploy contínuo com GitHub Actions, GitLab CI e Jenkins.",
        order: 4,
        courses: [
          {
            id: 30,
            name: "GitHub Actions - Complete Course",
            platform: "YouTube",
            url: "https://www.youtube.com/watch?v=R8_veQiYBjI",
            description: "Automatize tudo com GitHub Actions",
            durationHours: 4,
          },
          {
            id: 31,
            name: "Jenkins Tutorial",
            platform: "Udemy",
            url: "https://www.udemy.com/course/jenkins-from-zero-to-hero",
            description: "CI/CD com Jenkins",
            durationHours: 10,
          },
        ],
      },
      {
        id: 18,
        title: "Cloud Computing (AWS/Azure)",
        description:
          "Gerencie infraestrutura na nuvem. Aprenda serviços de compute, storage e networking.",
        order: 5,
        courses: [
          {
            id: 32,
            name: "AWS Certified Solutions Architect",
            platform: "Udemy",
            url: "https://www.udemy.com/course/aws-certified-solutions-architect-associate",
            description: "Certificação AWS Associate",
            durationHours: 24,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    userId: 1,
    userName: "Guilherme Alves",
    targetOccupation: "Desenvolvedor Backend Java",
    description:
      "Especialize-se em desenvolvimento backend com Java. Aprenda Spring Boot, APIs REST, microsserviços e boas práticas.",
    checkpoints: [
      {
        id: 19,
        title: "Java Fundamentals",
        description:
          "Domine os fundamentos da linguagem Java: OOP, collections, streams e tratamento de exceções.",
        order: 1,
        courses: [
          {
            id: 33,
            name: "Java Programming Masterclass",
            platform: "Udemy",
            url: "https://www.udemy.com/course/java-the-complete-java-developer-course",
            description: "Do básico ao avançado em Java",
            durationHours: 80,
          },
          {
            id: 34,
            name: "Java 8 Streams",
            platform: "YouTube",
            url: "https://www.youtube.com/watch?v=t1-YZ6bF-g0",
            description: "Programação funcional com Streams",
            durationHours: 2,
          },
        ],
      },
      {
        id: 20,
        title: "Spring Framework e Spring Boot",
        description:
          "Construa aplicações enterprise com Spring. Aprenda IoC, DI, Spring MVC e Spring Boot.",
        order: 2,
        courses: [
          {
            id: 35,
            name: "Spring & Spring Boot - Completo",
            platform: "Udemy",
            url: "https://www.udemy.com/course/spring-boot-expert",
            description: "Do zero ao deploy em produção",
            durationHours: 50,
          },
          {
            id: 36,
            name: "Spring Data JPA",
            platform: "Alura",
            url: "https://www.alura.com.br/curso-online-spring-data-jpa",
            description: "Persistência de dados com JPA",
            durationHours: 8,
          },
        ],
      },
      {
        id: 21,
        title: "APIs RESTful com Spring",
        description:
          "Desenvolva APIs REST profissionais. Aprenda sobre versionamento, documentação com Swagger e segurança.",
        order: 3,
        courses: [
          {
            id: 37,
            name: "REST API Design, Development & Management",
            platform: "Udemy",
            url: "https://www.udemy.com/course/rest-api",
            description: "Boas práticas de APIs REST",
            durationHours: 10,
          },
          {
            id: 38,
            name: "Spring Security",
            platform: "YouTube",
            url: "https://www.youtube.com/watch?v=her_7pa0vrg",
            description: "Segurança em aplicações Spring",
            durationHours: 5,
          },
        ],
      },
      {
        id: 22,
        title: "Microsserviços com Spring Cloud",
        description:
          "Arquitetura de microsserviços. Aprenda service discovery, API Gateway, circuit breakers e mensageria.",
        order: 4,
        courses: [
          {
            id: 39,
            name: "Microservices with Spring Boot and Spring Cloud",
            platform: "Udemy",
            url: "https://www.udemy.com/course/microservices-with-spring-boot-and-spring-cloud",
            description: "Arquitetura de microsserviços completa",
            durationHours: 30,
          },
        ],
      },
      {
        id: 23,
        title: "Testes e Qualidade de Código",
        description:
          "Escreva testes unitários e de integração. Aprenda JUnit, Mockito e TDD.",
        order: 5,
        courses: [
          {
            id: 40,
            name: "Testing Spring Boot Applications",
            platform: "Udemy",
            url: "https://www.udemy.com/course/testing-spring-boot-application-with-junit-and-mockito",
            description: "Testes completos em Spring Boot",
            durationHours: 15,
          },
        ],
      },
    ],
  },
];
