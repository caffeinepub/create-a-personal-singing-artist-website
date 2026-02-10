# Deployment Guide

This guide covers deploying the artist website to the Internet Computer.

## Prerequisites

- [dfx](https://internetcomputer.org/docs/current/developer-docs/setup/install/) installed (version 0.15.0 or later)
- Node.js and pnpm installed
- Internet Computer wallet with cycles (for mainnet deployment)

## Local Deployment (Testing)

1. **Start the local replica:**
   ```bash
   dfx start --clean --background
   ```

2. **Deploy canisters:**
   ```bash
   dfx deploy
   ```

3. **Access the site:**
   - Frontend: `http://localhost:4943/?canisterId=<frontend-canister-id>`
   - Backend: `http://localhost:4943/?canisterId=<backend-canister-id>`

4. **Get canister IDs:**
   ```bash
   dfx canister id frontend
   dfx canister id backend
   ```

## Mainnet Deployment

### 1. Build for Production

