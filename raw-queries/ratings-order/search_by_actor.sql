select tb.primary_title, tr.average_rating, tr.num_votes 
from name_basics as nb 
join title_principals as tp on nb.nconst = tp.nconst 
join title_basics as tb on tb.tconst = tp.tconst 
join title_ratings as tr on tb.tconst = tr.tconst
where nb.primary_name ilike '%harrison ford%'
order by tr.num_votes desc, tr.average_rating desc
;