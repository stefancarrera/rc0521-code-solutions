select
  "c"."firstName" as "firstName",
  "c"."lastName" as "lastName",
  sum("p"."amount") as "totalAmt"
from "payments" as "p"
join "customers" as "c" using ("customerId")
group by "firstName",
         "lastName"
order by "totalAmt" desc;
