select tb.primary_title, tb.original_title, tb.is_adult
from name_basics as nb 
join directors as d on d.name_basic_id = nb.nconst
join title_crews as tc on tc.id = d.title_crew_id 
join title_basics as tb on tb.tconst = tc.tconst
where nb.primary_name ilike '%Steven Spielberg%' and tb.runtime_minutes >=120
order by tb.primary_title asc
;