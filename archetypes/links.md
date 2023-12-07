---
title: {{ replace .File.ContentBaseName "-" " " | title }}
i: '{{ index (last 2 (strings.Split .File.Dir "/")) 0 }}'
date: {{ time.Now.UTC.Format "2006-01-02T15:04:05Z" }}
type: blog
cover: false
linkUrl: DON'T FORGET TO SET ME!!
tags: []
draft: true
---

