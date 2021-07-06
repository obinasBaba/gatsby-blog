---
contentKey: blog
title: React Hooks in Action
date: 2021-07-06T09:08:05.183Z
thumbnail: /img/screenshot-61-.png
tags:
  - tag: "#framer-motion"
  - tag: "#react"
---
React transforms our data into UI. Each component plays its part, returning its
contribution to the overall user interface. React builds the tree of elements, com-
pares it with what’s already rendered, and commits any necessary changes to the
DOM. When the state changes, React goes through the process again to update the
UI. React is really good at efficiently deciding what should update and scheduling
any changes. 
 Sometimes, however, we need our components to reach outside this data-flow
process and directly interact with other APIs. An action that impinges on the outside
world in some way is called a side effect. Common side effects include the following:
 Setting the page title imperatively
 Working with timers like setInterval or setTimeout



 Measuring the width, height, or position of elements in the DOM
 Logging messages to the console or other service
 Setting or getting values in local storage
 Fetching data or subscribing and unsubscribing to services
Whatever our components are trying to achieve, it would be risky for them to simply
ignore React and try to perform their tasks blindly. It’s much better to enlist React’s
help to schedule such side effects effectively, considering when and how often they
should run, even as React does its job of rendering each component and committing
changes to the screen. React provides the useEffect hook so that we can better con-
trol side effects and integrate them into the life cycles of our components.
 In this chapter, we come to grips with how the useEffect hook works. We start, in
section 4.1, by trying out simple examples that highlight calling the hook, controlling
when it runs, and specifying how to clean up any effects when a component unmounts.
In section 4.2, we set up a simple server for data in the bookings app example and create
components to practice fetching that data. Finally, in section 4.3, we switch our book-
ings app over from importing database files to fetching data from a server.
 The useEffect hook is our gateway to safe interactions with the outside world.
Let’s take our first steps on the path.