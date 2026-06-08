
## Objetivo

Transformar a landing page atual da Dra. Thayssa em uma página mais robusta e completa, inspirada na estrutura das referências (Dra. Aline – blefaroplastia e Dra. Amanda – ninfoplastia), **mantendo 100% da identidade visual atual**: paleta rosa blush, bege, areia, branco e grafite, fontes, cantos arredondados (2xl), sombras suaves e micro-animações via framer-motion.

## Nova estrutura da página

Ordem das seções no `src/pages/Index.tsx`:

1. **Header** (já existe — mantém)
2. **Hero** (já existe — pequenos ajustes de copy/CTA duplo: "Assistir vídeo" + "Falar com a equipe")
3. **Indicações** *(nova)* — "Para quem a blefaroplastia é indicada?" — grid de cards com ícones (excesso de pele, bolsas, olhar cansado, assimetria, dificuldade com maquiagem)
4. **VideoSection** (já existe — mantém com YouTube + tracking GTM)
5. **O que é a Blefaroplastia** *(nova)* — explicação + 3 cards: Superior, Inferior, Combinada
6. **Benefícios buscados** *(nova)* — lista com ícones de checkmark, com disclaimer de que resultados variam
7. **Como é a recuperação** *(nova)* — timeline horizontal/vertical com 4 etapas (48h, 1ª semana, 2ª-4ª, 1-3 meses)
8. **Diferenciais do atendimento** *(nova)* — 4 cards: avaliação individual, planejamento personalizado, preparo pré/pós, acompanhamento próximo
9. **DoctorBio** (já existe — mantém)
10. **FAQSection** (já existe — mantém, eventualmente adicionar 1-2 perguntas)
11. **WhatsAppCTA** final (já existe — mantém)
12. **Footer** (já existe — mantém)

Botão flutuante de WhatsApp continua fixo na tela.

## Conformidade médica

Todas as novas seções seguem as diretrizes:
- Linguagem informativa, sem promessa de resultados
- Sem antes/depois, sem preços
- Disclaimer reforçado: "A avaliação médica individual é indispensável para indicação do procedimento"
- Alt text adequado, contraste e fonte ≥16px

## Detalhes técnicos

Arquivos novos em `src/components/`:
- `Indications.tsx` — grid de 5 cards (lucide-react: `Eye`, `EyeOff`, `Moon`, `Scale`, `Sparkles`)
- `AboutProcedure.tsx` — seção explicativa + 3 tipos
- `Benefits.tsx` — lista com `CheckCircle2`
- `Recovery.tsx` — timeline com 4 etapas, usando `motion` para revelar progressivamente
- `Differentials.tsx` — 4 cards (`UserCheck`, `ClipboardList`, `ShieldCheck`, `HeartHandshake`)

Arquivo modificado:
- `src/pages/Index.tsx` — importar e ordenar as novas seções
- `src/components/Hero.tsx` — adicionar CTA secundário "Falar com a equipe" (link WhatsApp) ao lado de "Assistir vídeo agora"

Padrão visual reutilizado em todas as seções:
- Container `max-w-5xl/6xl mx-auto`
- Alternância de background: `bg-background` ↔ `bg-sand/30`
- Títulos `text-graphite`, destaque em `text-primary` (rosa)
- Cards `rounded-2xl shadow-sm hover:shadow-md` com `bg-card`
- Animações `initial/whileInView` com `viewport={{ once: true }}`
- Responsivo mobile-first

## Eventos GTM adicionais (opcional, dataLayer)

Mantém os eventos atuais e adiciona:
- `cta_indications_click`, `cta_recovery_click` se cada nova seção tiver botão WhatsApp próprio (decidir junto na implementação — por padrão concentro CTAs nas seções já existentes para não poluir).

## Fora do escopo

- Formulário de pré-avaliação (como o da Dra. Amanda) — não incluído. Posso adicionar depois se quiser captura de leads via Lovable Cloud.
- Mudanças de cor, tipografia ou logo.
- Tradução de conteúdo das referências literalmente — todo o copy será adaptado para a Dra. Thayssa (blefaroplastia, São Paulo/Moema).
