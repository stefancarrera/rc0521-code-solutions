select
  "co"."name" as "country",
  count("c"."countryId") as "totalCities"
  from "countries" as "co"
  join "cities" as "c" using ("countryId")
  group by "co"."countryId";
