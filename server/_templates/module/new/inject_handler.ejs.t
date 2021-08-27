---
inject: true
to: src/routes.ts
skip_if: <%= name %>
before: "export default routes;"
---
routes.<%= method %>('/<%= name %>', <%= name %>)