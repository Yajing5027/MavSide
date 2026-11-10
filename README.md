# MavSide

**An integrated campus services prototype for smarter routes, peer-to-peer help, accessible delivery support, and student community impact.**

MavSide was selected for presentation at the CADSCOM 2026 Student Showcase, organized by the Twin Cities ACM Chapter.

**Live demo:** https://yajing5027.github.io/MavSide/

<p align="center"><img src="poster.png" alt="MavSide campus services project poster" width="1200" style="max-width:100%;height:auto;"></p>

## Overview

MavSide brings campus tasks, food ordering, delivery coordination, route matching, and community support into one responsive, browser-based demonstration. It explores how students already moving across campus might help others with short, practical detours, while an illustrative MavAccess program makes delivery assistance easier to explore.

This is an **educational prototype**, not a live campus delivery business, university service, or production payment platform.

## What you can explore

| Experience | Features |
| --- | --- |
| **Smart Routing** | A Dijkstra-based labeled campus graph, helper detour matching, configurable time tolerance, weather-aware route weights, OpenStreetMap-based map views, and animated simulated delivery routes. |
| **Task & Delivery** | Post and browse tasks, accept or claim requests, coordinate pickup and delivery, use demonstration verification codes, and follow order or task progress. |
| **MavAccess** | Explore simulated accessibility-assistance experiences, MavPoints, delivery-fee discounts, and illustrative subsidy calculations. |
| **Shops & Ordering** | Browse four independently designed fictional campus storefronts — Purple Taco Spot, North Star Coffee, Little Chicken A, and Study Bagel House — with searchable menus, carts, checkout flows, and **60 individually generated and reviewed food photographs**. |
| **Accounts & Roles** | Try Student, MavAccess, and Admin demo experiences, plus browser-local personal workspaces with separated sample data. |
| **Admin Data Center** | Explore prototype task, merchant, financial, and community insights, including filtering and CSV exports. |
| **Impact & Rewards** | Inspect Helper Hearts, modeled volunteer activity, donations, commissions, and Impact Fund scenarios. |
| **Financial Integrity** | Follow separate illustrative points and money ledgers, fund reconciliation, and safeguards against duplicate simulated settlements. |
| **Accessibility & UX** | Use keyboard-accessible dialogs and navigation, responsive desktop/mobile layouts, reduced-motion support, and location features that require user opt-in. |

### Try a journey

1. Open the [MavSide demo](https://yajing5027.github.io/MavSide/) and choose a sample role or a personal browser-local account.
2. Explore the Task Hall, post or claim a sample request, and inspect pickup, delivery, and tracking states.
3. Visit Shops to browse original product photography, build a cart, and try the simulated checkout flow.
4. Explore Route Matching, MavAccess, and the Admin Data Center to see how logistics, assistance, and impact modeling connect.

## How the prototype works

The site is built with static HTML, CSS, and JavaScript. Its campus routing and pricing models run in the browser, and demo state is managed locally rather than by a production backend. Maps use OpenStreetMap data and tiles, with map-library assets distributed with their applicable license. An internet connection may be needed for third-party map tiles and weather-dependent functionality.

**Important limitations:**

- **No real authentication or university SSO.** Role switching and browser-local workspaces are demonstration interfaces, not secure server-side authorization. Do not enter real passwords, student IDs, payment details, or sensitive personal information.
- **No real orders, delivery dispatch, payments, donations, or aid verification.** Checkout, account balances, commissions, subsidies, and impact figures are simulations or illustrative models, not audited operational results.
- **No certified accessible travel directions.** The labeled campus graph and weather-aware route costs are experimental. They do not establish verified step-free access or substitute for official accessibility guidance.
- **No formal accessibility certification.** The experience includes keyboard, dialog, contrast, and reduced-motion improvements, but is not claimed to be fully WCAG-certified.
- **Location is optional.** Do not depend on this demonstration for emergency, navigation, or mobility-critical decisions. Demo information may persist only in the same browser and may be cleared with local site data.

The four storefront identities and their menus are fictional MavSide demonstrations. They do not represent real merchant affiliations, inventory, fulfillment, or pricing.

## Technology and credits

- **Routing:** graph shortest paths, detour constraints, and weather-weighted edges.
- **Maps:** [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors; [Leaflet](https://leafletjs.com/) map library, with its redistribution license included in the deployed site.
- **Interface:** client-side HTML, CSS, and JavaScript with browser-local prototype state.
- **Visual assets:** original merchant identity sets and 60 individually generated, curated product photographs.

The campus setting references Minnesota State University, Mankato, but MavSide is an independent academic demonstration, not an official university program.

## Development

The implementation source is maintained in a separate private repository. This public repository contains only the static demonstration bundle used by GitHub Pages.

To preview the published static site locally, serve this directory through an HTTP server (for example, `python3 -m http.server 8000`) and open `http://localhost:8000/`. Opening HTML pages as `file://` URLs can interfere with component loading and map resources.

---

**Explore the demo:** https://yajing5027.github.io/MavSide/
