select tb.primary_title, tb.original_title, tb.is_adult, tr.average_rating, tr.num_votes, nb.primary_name 
from title_basics as tb 
join title_ratings as tr on tb.tconst = tr.tconst
join title_crews as tc on tb.tconst = tc.tconst 
join directors as d on d.title_crew_id = tc.id 
join name_basics as nb on nb.nconst = d.name_basic_id 
where tb.original_title ilike '%interstel%'
order by tb.primary_title asc
;