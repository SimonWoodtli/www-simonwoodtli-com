---
title: Welcome to my blog - Why I chose this stack
i: '0'
date: 2023-12-31T14:43:55Z
type: blog
cover: false
tags: ['hugo', 'website', 'ssg', 'tailwind', 'javascript', 'tinacms', 'cactus']
---

A few weeks ago, I decided to create my own blog. I also desperately needed a
portfolio site to show my work and apply for a job. And I was reluctant to use
a theme.

So I researched what technologies would make the most sense to accomplish what
I wanted. I wanted to keep it simple and follow the Progressive
Enhancement approach to achieve my goal.

***What is Progressive Enhancement?***  
Use the minimum required technology that is available and gets the job done.
Only add more technologies if you need more features that cannot be achieved
with the current stack. So start with the simplest technology that is
sufficient for your goal.

## Blog Architecture

* My blog should have a main feed where link posts and article posts should be aggregated on the homepage.
* Link posts are reaction posts to a quoted information on the web. They offer the bloggers take on it.
* Blog posts are written articles, essays or tutorials.
* A searchbar to search content from the blog.
* Tags to categorize the posts.
* Comments to interact with the content.

Thanks John 🙏 for inventing Blogs with link and blog posts: https://daringfireball.net/

## Static Site Generators

I believe that developing a modern blog from scratch should nowadays be done
using a static site generator. Because a static website is easier to deploy, easier to
maintain and easier to create.

In my [research] I narrowed the selection down to these three SSGs:

***Astro***  
I think with a more complex tech stack Astro would have been the better choice.
It allows you to use JSX so it'd be great to use together with a JS framework.

***Zola***  
I did not do that much research on it, but it seems to be a super cool product.
However I am learning Go and Zola is written in Rust.

***Hugo: My pick***  
It's more widely adapted in the industry than Zola and because I can practice
the arcane go template lang :)

## CSS

After some research, I decided to have a closer look on these three candidates:

***Vanilla CSS***  
I've played around with vanilla CSS enough to know that it's very time
consuming to create a larger project from scratch.

***Bulma CSS***  
I think Bulma is great if you don't plan to create a custom design and use
pre-built components.

***Tailwind CSS: My pick***  
Because it makes styling a project so much faster and allows for complete
custom designs. It's a simple utility first framework that increases your
productivity.

## Javascript

These are some frontend frameworks that come to mind when choosing a stack:

***Alpinejs***  
Alpine is great it works really well with htmx. But my blog has no dynamic
content. I think I might add it anyways in a future refactoring. Because it's
also great to just use it to manage accessibility with it.

***Vue|React|Svelte***  
Many developers choose an over-engineered approach to create simple projects
simply to demonstrate their skills in using a particular technology. I disagree
with this philosophy. Choosing a stack with progressive enhancement in mind
ensures that you don't accumulate technical debt unless it benefits the
product.

***Vanilla JS: My pick***  
It is the simplest technology available for Webdev, and I had very few features
in mind for this project.

## Comments

I was looking for an open source commenting system that was easy to maintain
and simple to set up. These three were worthy contenders that I wanted to take
a closer look at:

***Giscus***  
A great commenting system but GitHub accounts only. It uses GitHub discussions
to store the comments, which is neat and better than alternatives that use
GitHub issues.

***Isso***  
Another great commenting system but you need to self host it.

***Cactus Comments: My pick***  
Allows anonymous comment, uses the matrix chat protocol in the backend. So
people can login to matrix and keep track of their comments if they want. Can
be self hosted but not required.

## Make posting easy on any device

Creating posts with Hugo requires a terminal, and sitting down in front of a
computer in the usual programming environment to just put something on the blog
feels like work. 

Blogging should be fun and easy so that I can post regularly.
So being able to do it from my phone was a must. With this in mind I was
thinking about implementing a simple solution to this problem.

***Termux***  
I really like the Termux terminal App on Android. But coding or even just
writing in it feels cumbersome to me. Also, if you have a few Hugo shortcodes
to embed videos, images or something a bit more complex you have to memorize
them and write them in your Markdown, all kinds of no fun.

***DecapCMS***  
* If you don't want to use Netlify it's a bit of a hassle to self host the
  backend and maintain it.
* If you want to log in with other providers, setting up OAuth is not so easy
  and requires your own hosting too.
* The biggest factor for me personally is scalability. Due to its design,
  GitHub API requests are required, and these are limited to 5000 for free
  accounts.   In practice, that means you can have about 10k posts on your
  blog. That's probably enough for me (if I were to create a new GitHub account
  just for the blog). But I don't want to create a new GitHub account and need
  those free API requests for other projects as well. TinaCMS's cloud proxy
  approach makes things more complicated, but it's also kind of necessary. I'm
  excited to see how the project develops with the new maintainer and will
  definitely keep an eye on it.
* https://github.com/decaporg/decap-cms/issues/663
* https://decapcms.org/blog/2023/11/git-based-cms-definition-features-best-practices/

***TinaCMS: My pick***  
It's a great git based CMS. It offers visual editing, cloud database proxy and
lots of customization. However visual editing only works with a JS framework.

Choosing between DecapCMS and TinaCMS was a difficult decision. I really needed
to get a good understanding of how they both work because they are very
similar. DecapCMS is simpler and has fewer features and customizations, which
is actually an advantage for me. But the GitHub API issue makes it a potential
future problem that I don't want to deal with.

## Conclusion

So far I like the minimalist approach for my blog. I hope it keeps me
interested to keep blogging. I wish you all a great new year 2024 🎉

[research]:<https://jamstack.org/generators/>
