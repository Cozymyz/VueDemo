# Vuex Lazy Loading Framework

Experimental Framework for On-Demand Vuex Module Loading

## Overview

This project explores a dynamic Vuex module lazy-loading approach for large-scale Vue.js applications.

The framework was developed as part of research on frontend performance optimization and state management architecture.

The primary goal is to reduce unnecessary initial state loading by dynamically registering Vuex modules only when required.

<img width="1014" height="843" alt="系统模块划分图" src="https://github.com/user-attachments/assets/60436371-1151-4100-bb06-9dbd9a6eb269" />

---

## Motivation

In large-scale Vue.js applications, Vuex stores often contain modules that are not immediately required during application startup.

Loading all state modules at initialization can increase startup costs and reduce maintainability.

This project investigates an on-demand loading strategy for Vuex state management.

---

## Approach

Traditional Vuex Architecture

Application Startup
→ Load All Vuex Modules
→ Register Entire Store

Proposed Architecture

Application Startup
→ Load Required Modules
→ Dynamically Register Additional Modules
→ On-Demand State Expansion

---

## Key Features

* Dynamic Vuex module registration
* Lazy loading of state modules
* Demand-driven state management
* Reduced initial loading overhead
* Modular store architecture

---

## Research Objectives

* Improve frontend initialization performance
* Reduce unnecessary state loading
* Investigate scalable Vuex architectures
* Explore automation opportunities for module management

---

## Experimental Evaluation

This repository was used as an experimental platform for evaluating dynamic Vuex module loading strategies in Vue.js applications.

The project focuses on feasibility and architectural analysis rather than production deployment.

<img width="1204" height="632" alt="Comparison of display time between SPA with and without lazy loading" src="https://github.com/user-attachments/assets/16ca53f5-a595-4849-8c95-0b4f218fff7e" />

---

## Related Publication

Towards Automation of Module Lazy Loading in Single-Page Web Applications

APSEC 2024

---

## Author

Yizhi Mei
Ph.D. Candidate, Oita University
Frontend Software Engineering Research

GitHub: https://github.com/Cozymyz
E-mail:yizhimei0302@gmail.com / v25f1001@oita-u.ac.jp
