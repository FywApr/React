/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as NotesIndexImport } from './routes/notes/index'
import { Route as NotesAddImport } from './routes/notes/add'
import { Route as NotesNoteIdImport } from './routes/notes/$noteId'
import { Route as NotesNoteIdEditImport } from './routes/notes/$noteId.edit'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const NotesIndexRoute = NotesIndexImport.update({
  path: '/notes/',
  getParentRoute: () => rootRoute,
} as any)

const NotesAddRoute = NotesAddImport.update({
  path: '/notes/add',
  getParentRoute: () => rootRoute,
} as any)

const NotesNoteIdRoute = NotesNoteIdImport.update({
  path: '/notes/$noteId',
  getParentRoute: () => rootRoute,
} as any)

const NotesNoteIdEditRoute = NotesNoteIdEditImport.update({
  path: '/edit',
  getParentRoute: () => NotesNoteIdRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/notes/$noteId': {
      preLoaderRoute: typeof NotesNoteIdImport
      parentRoute: typeof rootRoute
    }
    '/notes/add': {
      preLoaderRoute: typeof NotesAddImport
      parentRoute: typeof rootRoute
    }
    '/notes/': {
      preLoaderRoute: typeof NotesIndexImport
      parentRoute: typeof rootRoute
    }
    '/notes/$noteId/edit': {
      preLoaderRoute: typeof NotesNoteIdEditImport
      parentRoute: typeof NotesNoteIdImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  NotesNoteIdRoute.addChildren([NotesNoteIdEditRoute]),
  NotesAddRoute,
  NotesIndexRoute,
])

/* prettier-ignore-end */
