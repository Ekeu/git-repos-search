<h1 align="center">
  Github Repo Search
</h1>

---

## What is it? 🧐

Github Repo Search is a web application that allows you to search for repositories on github.

---

## Stack Used

I used the following technologies:

1. [React JS](https://nextjs.org/) as frontend framework
2. [Tailwind](https://tailwindui.com/) as my css framework
3. [Github API](https://docs.github.com/en/graphql/overview/about-the-graphql-api) as my data source
4. [Apollo Client](https://www.apollographql.com/docs/react/) as my graphql client

## To make it work

You can see it working online by visiting the deployed [app](https://git-repos-search.vercel.app/)

##### OR

1. Create a personal access token on github. [Here's how](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)

2. Create a `.env` file in the root of the project and add the following key

````env

```env
REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN="PERSONAL_ACCESS_TOKEN"
````

3. Run the server

```npm
- npm install
- npm start
```

4. Open your browser and go to http://localhost:3000 to see the result.
