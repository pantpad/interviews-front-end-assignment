/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as RecipesImport } from './routes/recipes'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as RecipesIndexImport } from './routes/recipes/index'
import { Route as RecipesRecipeIdImport } from './routes/recipes/$recipeId'

// Create/Update Routes

const RecipesRoute = RecipesImport.update({
  id: '/recipes',
  path: '/recipes',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const RecipesIndexRoute = RecipesIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => RecipesRoute,
} as any)

const RecipesRecipeIdRoute = RecipesRecipeIdImport.update({
  id: '/$recipeId',
  path: '/$recipeId',
  getParentRoute: () => RecipesRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/recipes': {
      id: '/recipes'
      path: '/recipes'
      fullPath: '/recipes'
      preLoaderRoute: typeof RecipesImport
      parentRoute: typeof rootRoute
    }
    '/recipes/$recipeId': {
      id: '/recipes/$recipeId'
      path: '/$recipeId'
      fullPath: '/recipes/$recipeId'
      preLoaderRoute: typeof RecipesRecipeIdImport
      parentRoute: typeof RecipesImport
    }
    '/recipes/': {
      id: '/recipes/'
      path: '/'
      fullPath: '/recipes/'
      preLoaderRoute: typeof RecipesIndexImport
      parentRoute: typeof RecipesImport
    }
  }
}

// Create and export the route tree

interface RecipesRouteChildren {
  RecipesRecipeIdRoute: typeof RecipesRecipeIdRoute
  RecipesIndexRoute: typeof RecipesIndexRoute
}

const RecipesRouteChildren: RecipesRouteChildren = {
  RecipesRecipeIdRoute: RecipesRecipeIdRoute,
  RecipesIndexRoute: RecipesIndexRoute,
}

const RecipesRouteWithChildren =
  RecipesRoute._addFileChildren(RecipesRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/recipes': typeof RecipesRouteWithChildren
  '/recipes/$recipeId': typeof RecipesRecipeIdRoute
  '/recipes/': typeof RecipesIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/recipes/$recipeId': typeof RecipesRecipeIdRoute
  '/recipes': typeof RecipesIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/recipes': typeof RecipesRouteWithChildren
  '/recipes/$recipeId': typeof RecipesRecipeIdRoute
  '/recipes/': typeof RecipesIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/recipes' | '/recipes/$recipeId' | '/recipes/'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/recipes/$recipeId' | '/recipes'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/recipes'
    | '/recipes/$recipeId'
    | '/recipes/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  RecipesRoute: typeof RecipesRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  RecipesRoute: RecipesRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/recipes"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/recipes": {
      "filePath": "recipes.tsx",
      "children": [
        "/recipes/$recipeId",
        "/recipes/"
      ]
    },
    "/recipes/$recipeId": {
      "filePath": "recipes/$recipeId.tsx",
      "parent": "/recipes"
    },
    "/recipes/": {
      "filePath": "recipes/index.tsx",
      "parent": "/recipes"
    }
  }
}
ROUTE_MANIFEST_END */
