# 🚧 Devio Admin Panel Sandbox

**The modern admin panel for Devio — an open-source headless CMS built for speed, structure, and scalability.**

Devio is a headless CMS platform inspired by WordPress' plugin ecosystem. Headless CMSs today help modernize development and improve frontend flexibility — but they’re often slower to build with than traditional platforms. Devio solves this with a plugin-driven architecture, making it plug-and-play for use cases like eCommerce, LMS, SaaS, and more.

Unlike other emerging plug-and-play CMS platforms — where all plugins are internally developed — Devio is designed to be a hub for indie developers to create, share, and monetize their own plugins. Think of it as the modern, headless WordPress for today's web builders.

## 🖼️ Project Previews

<p align="center">
  <img src="./public/landing-page.jpg" alt="Devio Landing Page Preview" width="800"/>
  <br/>
  <em>✨ Devio Landing Page – Clean and intuitive UI</em>
</p>

<p align="center">
  <img src="./public/admin-panel.png" alt="Devio Landing Page Preview" width="800"/>
  <br/>
  <em>✨ Devio Admin Panel – Block-based UI with plugin backend</em>
</p>

<p align="center">
  <img src="./public/paypal-config.png" alt="PayPal Config Dashboard" width="800"/>
  <br/>
  <em>✨ Devio PayPal Configuration Panel – PayPal-integrated Panel</em>
</p>

## ✨ Why This Exists

Most headless CMSs provide content modeling, but they stop short when it comes to **backend logic**. Dev teams need to re-implement backend logic such as cart, order-processing, authentication, and more.

Think:

* **Drag-and-drop block-based UI**
* **Schema-driven content modeling**
* **Plugin-powered backend workflows**
* **Instant preview and deploy-ready frontends**

This project is your entry point to shaping how headless CMS admin panels **should work** in 2025 and beyond.

---

## 🛠️ Pain Points I've Identified

While Devio is promising, I've found some issues from which I observed Devio might fall short at.

## Plugins Flexibility and Compatibility
Devio's plugin ecosystem will soon grow and the custom plugins developed by thousands of developers may not meet individual needs. It falls short on UI-compatibility, and UX control. We address this by letting developers or users use pre-built plugins that already comes with a theme (like a backend-ready checkout UI), where they do not need manual API wiring. Or, they can build a fully customized UI, with only a very minimal wiring work to do. 

**What this solves**
- It gives ability for non-technical users complete the whole frontend/backend functionality of their websites, by just clicking buttons. 
- Developers only need to do 10% of wiring work for customized UI/UX. 

## Learning Curve ##
Navigating around the Devio ecosystem might be complex for indie developers. We are working to complete an official documentation to make it easier to get started and to clarify plugin development, deployment, and integration workflows. We foresee that:

- Comprehensive guides and API references will help reduce the learning curve.
- Example projects and starter templates will be provided to accelerate onboarding.
- Community-driven Q&A and troubleshooting resources will be available to support developers at all levels.
- Regular updates and changelogs will keep everyone informed about new features and best practices.

By investing in clear documentation and community support, we aim to empower developers to confidently build, share, and monetize plugins within the Devio ecosystem.

## Additional takes from what I've observed

1. A lot of people are actually more than happy to use anything that just works (templated UI's, pre-built backend, especially for time-sensitive projects such as a simple landing page).

2. A lot of developers build so many cool stuff for their learning.

3. Pre-built plugins don't have to be flat. This lets developers get creative. How about making a simple payment button with features to customize its look? Drag-and-drop positioning? Why not make that a pro-version? Many are making profits out of building WordPress plugins, and so will be for Devio.

---

## 🧱 Our Current Stack
* **React** (Vite-powered)
* **Bootstrap**
* **Laravel**
* **GraphQL**
* **Devio API** (mocked endpoints for now)

---

## 🚀 Ready To Ge Started?

```bash
git clone git@github.com:keatonmurray/devio-api-sandbox.git
cd /api
npm install
php artisan serve
cd /api/panel
npm install
npm run dev
```

> You’ll be running the Devio Admin Panel locally with mocked API endpoints. Real plugin integration coming soon.

---

## 🤝 Contributing

We’re looking for contributors who want to **reimagine the CMS admin experience**. Designers, frontend devs, backend plugin creators — all are welcome. 

I respond to questions through the following channels:

Gmail: murraykeaton422@gmail.com

Telegram: +1 450 233 7755.

---

### 📂 Good First Issues

* [ ] Component testing with Vitest
* [ ] Plugin card UI design
* [ ] Plugin sandbox API stubs
* [ ] Content model validation rules

### 🧑‍💻 How to Contribute

```bash
git checkout -b contribution
npm run dev
```

Make your changes, commit, push to your fork, and open a Pull Request. Be sure to link to any related issue in your PR description.

---

## 💬 Join the Community

* 💬 [Discord](https://discord.gg/devio) — Discuss architecture, integrations, plugins
* 🐦 [Twitter](https://twitter.com/deviohq) — Get updates

---

## 📄 License

MIT © [Keaton Murray](https://github.com/keatonmurray)

Devio is an ongoing open-source project — contributions and  discussions welcome.

---

> “Everything WordPress got right — but decoupled, developer-first, and ready for the modern stack.” 🚀
