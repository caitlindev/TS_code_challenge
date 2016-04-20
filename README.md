# Tenable Security Code Challenge


####**Q: Instead of sending host=2 you now send host=10000 and the response contains 10000 fields. How would you handle that? What could be improved to get the best performance?**

Some things I would try would be applying extra server-side filtering and/or pagination, server-side caching including writing to local files (which a solution I was involved in at EverAfter and it familiarized me more with backend) and client-side caching with expiration dates.