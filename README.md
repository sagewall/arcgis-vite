# ArcGIS Vite

## NPM Scripts

**Start development server**

```
npm run dev
```

**Lint with ESLint**

```
npm run lint
```

**Build for production**

```
npm run build
```

**Locally preview production build**

```
npm run serve
```

**Why enable `checkJs` in `tsconfig.json`?**

To enable VS Code's built in JavaScript type checking. It is likely that most cases of changing variable types in runtime are likely to be accidental, rather than deliberate. This provides advanced typechecking out of the box. Should you like to take advantage of the dynamically-typed nature of JavaScript, it is trivial to change the configuration.

**Why `global.d.ts` instead of `compilerOptions.types` inside `jsconfig.json` or `tsconfig.json`?**

Setting `compilerOptions.types` shuts out all other types not explicitly listed in the configuration. Using triple-slash references keeps the default TypeScript setting of accepting type information from the entire workspace, while also adding `vite/client` type information.
