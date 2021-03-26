---
title: 'Nextの本領発揮'
date: '2020-04-01'
description: '1.Next.jsの進化が問われる2021年、何がそんなにすごいのか？今日はその内容を考察していきます。'
img_path: 'thum-4.jpg'
---

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- E-commerce product listings
- Help and documentation

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.
