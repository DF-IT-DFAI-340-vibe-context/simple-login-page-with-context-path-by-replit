# Overview

This is a Vue 3 single-page application built with Vite as the build tool. The application features three main pages: a login page, a welcome page (protected), and an about us page. It uses Vue Router for navigation, Pinia for state management, and SCSS for styling. The application is designed to run in a configurable context path environment with separate configurations for development and production.

**Last Updated**: November 11, 2025

# User Preferences

Preferred communication style: Simple, everyday language (Chinese/Traditional).

# Recent Changes

## November 11, 2025 - Initial Project Setup
- Created complete Vite + Vue 3 project structure with SCSS
- Implemented three pages: Login, Welcome (protected), and About Us
- Configured environment-based CONTEXT_PATH routing
- Set up Pinia store for authentication state management
- Configured Vite to bind to 0.0.0.0:5000 for external access

# System Architecture

## Frontend Architecture

**Framework**: Vue 3 with Composition API
- **Rationale**: Vue 3 provides a modern, reactive framework with improved performance. The Composition API enables better code organization and reusability.
- **Build Tool**: Vite for fast development builds and optimized production bundles
- **Pages**: 
  - Login page (`/login`) - Form-based user authentication
  - Welcome page (`/welcome`) - Protected page with user greeting and real-time date/time
  - About Us page (`/about`) - Public page with company information

**State Management**: Pinia
- **Rationale**: Official state management solution for Vue 3, offering a simpler and more intuitive API than Vuex
- **Implementation**: Composition API-based stores (see `src/stores/auth.js`)
- **Auth Store**: Manages login state (`isLoggedIn`, `username`) with `login()` and `logout()` actions

**Routing**: Vue Router 4
- **Rationale**: Official routing library for Vue 3 with support for navigation guards and dynamic routing
- **Configuration**: Uses `createWebHistory` with configurable base path via `VITE_CONTEXT_PATH`
- **Authentication Guards**: Route-level authentication checks via `beforeEach` navigation guard
- **Protected Routes**: `/welcome` requires authentication; redirects to `/login` if not logged in

**Styling**: SCSS with global variables
- **Rationale**: SCSS provides variables, nesting, and mixins for maintainable styles
- **Configuration**: Global variables auto-imported via Vite preprocessor options from `src/styles/variables.scss`
- **Structure**:
  - `src/styles/variables.scss` - Color palette, spacing, shadows, transitions
  - `src/styles/main.scss` - Global resets and base styles
  - Component-scoped styles using `<style lang="scss" scoped>`

## Environment Configuration

**CONTEXT_PATH**: Configurable via `VITE_CONTEXT_PATH` environment variable
- **Development** (`.env.development.local`): `/dev`
- **Production** (`.env.production.local`): `/`
- **Rationale**: Allows deployment under different URL paths without code changes
- **Scope**: Affects both Vite build base and Vue Router history base

**Server Configuration**: Development server runs on `0.0.0.0:5000`
- **Rationale**: Binding to `0.0.0.0` allows external access, useful for containerized or networked environments
- **Workflow**: `npm run dev` starts the development server

## Project Structure

```
├── src/
│   ├── main.js                 # Application entry point
│   ├── App.vue                 # Root component
│   ├── router/
│   │   └── index.js            # Vue Router configuration with CONTEXT_PATH
│   ├── stores/
│   │   └── auth.js             # Pinia authentication store
│   ├── views/
│   │   ├── Login.vue           # Login page component
│   │   ├── Welcome.vue         # Protected welcome page
│   │   └── About.vue           # About us page
│   └── styles/
│       ├── variables.scss      # SCSS variables
│       └── main.scss           # Global styles
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies and scripts
├── .env.development.local      # Development environment variables
└── .env.production.local       # Production environment variables
```

# Third-Party Libraries

**State Management**
- `pinia` v2.1.0 - Vue 3 state management

**Routing**
- `vue-router` v4.2.0 - Vue 3 routing with navigation guards

**Build Tools**
- `vite` v5.0.0 - Frontend build tool
- `@vitejs/plugin-vue` v5.0.0 - Vue 3 plugin for Vite
- `sass` v1.70.0 - SCSS preprocessor

**Other**
- `vue` v3.4.0 - Core Vue 3 framework
- `@types/memoizee` v0.4.12 - TypeScript definitions
- `memoizee` v0.4.17 - Function result caching
- `openid-client` v6.8.1 - OpenID Connect client (available but not yet integrated)

# Development Workflow

**Start Development Server**:
```bash
npm run dev
```
Server runs on http://localhost:5000/dev (or configured CONTEXT_PATH)

**Build for Production**:
```bash
npm run build
```

**Preview Production Build**:
```bash
npm run preview
```
