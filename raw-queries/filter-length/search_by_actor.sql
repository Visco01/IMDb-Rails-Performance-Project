select tb.primary_title
from name_basics as nb 
join title_principals as tp on nb.nconst = tp.nconst 
join title_basics as tb on tb.tconst = tp.tconst
where nb.primary_name ilike '%harrison ford%' and tb.runtime_minutes >=120
order by tb.primary_title asc 
;