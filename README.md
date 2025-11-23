# ReQualify - Plataforma de Requalificação Profissional com IA

## 📋 Descrição da Solução

O **ReQualify** é uma plataforma inovadora que utiliza Inteligência Artificial para auxiliar profissionais em transição de carreira. A solução oferece uma abordagem personalizada para requalificação profissional, combinando análise curricular, geração de roadmaps de aprendizado e recomendação de cursos específicos.

### 🎯 Problema Identificado

No mercado de trabalho atual, muitos profissionais enfrentam desafios ao tentar migrar de carreira ou se requalificar:

- **Falta de direcionamento**: Não sabem por onde começar nem quais habilidades desenvolver
- **Sobrecarga de informações**: Milhares de cursos disponíveis, mas pouca clareza sobre qual caminho seguir
- **Lacunas de conhecimento**: Dificuldade em identificar as competências que faltam para atingir o objetivo profissional
- **Tempo e recursos limitados**: Necessidade de otimizar o aprendizado para não desperdiçar tempo com conteúdos irrelevantes

### 💡 Solução Proposta

O ReQualify resolve esses problemas através de uma plataforma completa que:

1. **Análise Inteligente de Currículo**
   - Sistema de cadastro de currículo estruturado (experiências, formações, certificações, habilidades)
   - Análise automática das competências atuais do profissional
   - Identificação de pontos fortes e áreas de melhoria

2. **Geração de Roadmaps Personalizados com IA**
   - Utiliza **IA Generativa** (integração com API da OpenAI/Anthropic) para criar planos de carreira customizados
   - Análise do gap entre perfil atual e objetivo de carreira desejado
   - Criação de checkpoints sequenciais e progressivos
   - Sugestão de cursos reais de plataformas como Udemy, Coursera, LinkedIn Learning, Alura, etc.

3. **Busca Inteligente de Vagas**
   - Integração com APIs de busca de empregos (LinkedIn)
   - Recomendação de vagas alinhadas ao objetivo de carreira
   - Filtros por localização, nível de senioridade e área de atuação

4. **Acompanhamento de Progresso**
   - Sistema de checkpoints para marcar etapas concluídas
   - Visualização do progresso no roadmap
   - Gamificação do processo de aprendizado

### 🏗️ Arquitetura da Solução

#### Backend (Java Spring Boot)

**Tecnologias:**
- Java 17
- Spring Boot 3.x
- Spring Data JPA
- Spring AI (integração com IA Generativa)
- Spring Security + JWT
- PostgreSQL (banco de dados principal)
- RabbitMQ (mensageria para processamento assíncrono)
- Swagger/OpenAPI (documentação da API)

**Principais Funcionalidades:**
- API REST completa com autenticação JWT
- CRUD de usuários, currículos, roadmaps e checkpoints
- Serviço de IA que analisa currículos e gera roadmaps personalizados
- Sistema de prompts otimizados para geração de planos de carreira
- Refinamento iterativo dos roadmaps gerados (3 rodadas de melhoria)
- Validações robustas de dados com Bean Validation
- Tratamento de erros personalizado

**Endpoints Principais:**
```
POST   /auth/register          - Cadastro de usuário
POST   /auth/login             - Autenticação
POST   /resume/user/{userId}   - Criar currículo
GET    /resume/user/{userId}   - Buscar currículo
PUT    /resume/{id}            - Atualizar currículo
POST   /roadmap/user/{userId}  - Gerar roadmap com IA
GET    /roadmap/{id}           - Buscar roadmap
GET    /roadmap/user/{userId}  - Listar roadmaps do usuário
POST   /checkpoint/{id}/complete - Marcar checkpoint como concluído
```

#### Frontend (React Native + TypeScript)

**Tecnologias:**
- React Native
- TypeScript
- Expo
- React Navigation (navegação entre telas)
- Axios (requisições HTTP)
- AsyncStorage (armazenamento local)
- NativeWind/Tailwind CSS (estilização)

**Principais Telas:**
- **Onboarding**: Introdução à plataforma
- **Login/Registro**: Autenticação de usuários
- **Home**: Dashboard com roadmaps ativos
- **Perfil de Currículo**: Cadastro e edição de experiências, formações e habilidades
- **Geração de Roadmap**: Interface para definir objetivo de carreira e gerar plano personalizado
- **Visualização de Roadmap**: Lista de checkpoints com cursos sugeridos
- **Busca de Vagas**: Pesquisa e visualização de oportunidades de emprego
- **Progresso**: Acompanhamento das etapas concluídas

### 🤖 Como Funciona a IA

O processo de geração de roadmaps utiliza IA Generativa da seguinte forma:

1. **Coleta de Dados**: O sistema captura:
   - Profissão atual do usuário
   - Resumo profissional
   - Lista de habilidades (skills)
   - Experiências profissionais detalhadas
   - Formações acadêmicas
   - Certificações obtidas
   - Objetivo de carreira desejado

2. **Construção do Prompt**:
```
   Análise do currículo → Identificação de gaps → Definição de checkpoints → Sugestão de cursos reais
```

3. **Geração Iterativa** (3 rodadas):
   - **Rodada 1**: Geração inicial do roadmap estruturado
   - **Rodada 2**: Refinamento das descrições e otimização dos cursos
   - **Rodada 3**: Validação final e ajustes de qualidade

4. **Estrutura do Roadmap Gerado**:
```json
   {
     "targetOccupation": "Desenvolvedor Full Stack",
     "description": "Plano para transição de carreira...",
     "checkpoints": [
       {
         "title": "Fundamentos de JavaScript",
         "description": "Domine os fundamentos...",
         "order": 1,
         "courses": [
           {
             "name": "JavaScript Completo ES6+",
             "platform": "Udemy",
             "url": "https://...",
             "description": "Curso completo...",
             "durationHours": 40
           }
         ]
       }
     ]
   }
```

### 🎨 Diferenciais da Solução

1. **Personalização Extrema**: Cada roadmap é único e considera o histórico completo do profissional
2. **Cursos Reais**: Sugestões de cursos verificados em plataformas reconhecidas
3. **Progressão Lógica**: Checkpoints ordenados de forma pedagógica e sequencial
4. **Validação de Qualidade**: Sistema de refinamento iterativo garante roadmaps de alta qualidade
5. **Integração Completa**: Backend robusto + App mobile nativo
6. **Escalabilidade**: Arquitetura preparada para crescimento (mensageria com RabbitMQ)

### 📊 Modelos de Dados

**User**
- id, name, email, password (hash), createdAt

**Resume** (1:1 com User)
- id, userId, occupation, summary, skills[], educations[], experiences[], certifications[]

**Roadmap** (N:1 com User)
- id, userId, targetOccupation, description, checkpoints[]

**Checkpoint** (N:1 com Roadmap)
- id, roadmapId, title, description, order, courses[], completed

**Course** (N:1 com Checkpoint)
- id, checkpointId, name, platform, url, description, durationHours

### 🚀 Impacto Esperado

- **Redução de 70% no tempo** de planejamento de carreira
- **Aumento de 85% na clareza** sobre próximos passos profissionais
- **Melhoria de 60% na taxa de conclusão** de cursos (graças à curadoria personalizada)
- **Democratização do acesso** a orientação de carreira de qualidade

## 👥 Equipe

-  **Guilherme Alves Pedroso** - RM555357
-  **João Vitor Silva Nascimento** - RM554694
-  **Rafael Souza Bezerra** - RM557888


**ReQualify** - Transformando carreiras com Inteligência Artificial 🚀
