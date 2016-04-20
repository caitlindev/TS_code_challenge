# Tenable Security Code Challenge


####**Q: Instead of sending host=2 you now send host=10000 and the response contains 10000 fields. How would you handle that? What could be improved to get the best performance?**

Some things I would try would be applying extra server-side filtering and/or pagination, server-side caching including writing to local files (which a solution I was involved in at EverAfter and it familiarized me more with backend) and client-side caching with expiration dates.

> I have included the dependencies for this app in its repo, despite best practice being to tell git to ignore them then install them locally via a package manager config file. I don't like leaving dependency installations up to chance since every team I've ever worked on has had issues with version inconsistencies and what not, specifically in this situation where I can't troubleshoot what you guys see on your end. **TL;DR** you don't have to run `npm install` upon cloning this project.



####TO RUN####

- `cd` into your local server working directory, and clone the project
- `cd` into the project root
- **Do NOT run `npm install`**
- run `node server.js`