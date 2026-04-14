# 📘 GEMINI.md — Global Engineering Rules

## 🧠 1. Core Philosophy

- Code must be **readable, predictable, and maintainable**
- Prefer **clarity over cleverness**
- Avoid premature optimization
- Every piece of code should be understandable in **< 30 seconds**
- Write code for humans, not just machines

---

## 🧼 2. Clean Code Rules (MANDATORY)

### Naming

- Use descriptive and explicit names
  - ✅ `calculateInvoiceTotal`
  - ❌ `calc`, `fn1`, `dataHandler`

### Functions

- Max **20–30 lines**
- Single responsibility
- Avoid nested complexity

### Structure

- Avoid deeply nested logic
- Prefer early returns

---

## 🧱 3. Project Architecture

### Backend (Node / APIs)

- Follow layered architecture:
  - `controllers`
  - `services`
  - `repositories`
  - `middlewares`

### Frontend (React)

- Use feature-based structure:

```
/features
  /invoices
    /components
    /hooks
    /services
    /pages
```

---

## 🔁 4. DRY Principle

- Do not repeat logic
- Extract reusable utilities
- Centralize shared logic

---

## 🧩 5. React Components

- Keep components small and focused
- Max ~200 lines per component
- Move logic to hooks when needed

```js
// ✅ Good
useInvoiceCalculation()

// ❌ Bad
Everything inside component
```

---

## ⚙️ 6. State Management

- Local state → `useState`
- Shared state → Context or store
- Avoid unnecessary global state

---

## 🔐 7. Security (CRITICAL)

- Never trust frontend input
- Validate everything in backend
- Sanitize all inputs
- Protect tokens and secrets

---

## 📦 8. Error Handling

Never swallow errors:

```js
// ❌ Bad
catch(e) {}
```

```js
// ✅ Good
catch (error) {
  logger.error(error)
  throw new Error("Unexpected error occurred")
}
```

---

## 📊 9. Logging

- Use structured logs

```js
logger.info("Invoice created", { invoiceId });
```

- Never log:
  - passwords
  - tokens
  - sensitive data

---

## 🚀 10. Performance

- Avoid unnecessary re-renders
- Use memoization only when needed
- Lazy load large modules

---

## 🧪 11. Testing (Minimum Required)

- Test business logic
- Test critical endpoints
- Test calculations (especially financial)

---

## 🧾 12. Code Standards

### JavaScript / TypeScript

- Prefer `const` over `let`
- Never use `var`
- Use arrow functions

### Formatting

- Use ESLint + Prettier
- Do not commit unformatted code

---

## 🔄 13. Git Workflow

### Commit Convention

```
feat: add invoice creation
fix: correct tax calculation
refactor: improve service structure
```

---

## 🧠 14. AI Usage Rules (Cursor / Copilot / Gemini)

- Never accept AI-generated code blindly

- Always review:
  - security
  - performance
  - readability

- Prefer:
  - modular code
  - clear naming
  - explicit logic

---

## 🧩 15. External Integrations

- Always handle:
  - errors
  - timeouts
  - retries (when needed)

---

## 🏗️ 16. Scalability

- Avoid tight coupling
- Design for growth
- Keep modules independent

---

## 🔒 17. SaaS & Financial Systems Rules

- Never mutate financial records after creation
- Always log system actions
- Validate before processing transactions
- Track states (pending, completed, failed)

---

## 🧭 18. Golden Rule

> If another developer cannot understand your code in 30 seconds, it is poorly written.

## 🏗️ 19. Architecture Rules (MANDATORY)

All code MUST follow this structure:

- Components → UI only
- Hooks → business logic
- Services → API calls
- Utils → pure functions

### Data Flow

Component → Hook → Service → API

### Forbidden

- API calls inside components
- Business logic inside UI
- Mixing responsibilities

---
