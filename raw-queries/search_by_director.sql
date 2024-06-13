select tb.primary_title, tb.original_title, tb.is_adult, tr.average_rating, tr.num_votes 
from name_basics as nb 
join directors as d on d.name_basic_id = nb.nconst
join title_crews as tc on tc.id = d.title_crew_id 
join title_basics as tb on tb.tconst = tc.tconst 
join title_ratings as tr on tb.tconst = tr.tconst
where nb.primary_name ilike '%Steven Spielberg%'
order by tr.num_votes desc, tr.average_rating desc 
;