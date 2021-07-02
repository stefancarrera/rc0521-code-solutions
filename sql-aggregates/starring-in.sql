select
  "cat"."name" as "catergories",
  count("cat"."categoryId") as "totalFilms"
from "categories" as "cat"
join "filmCategory" using ("categoryId")
join "castMembers" using ("filmId")
where "castMembers"."actorId" = 178
group by "cat"."name";
