select tb.original_title title, tr.num_votes popolarity
from title_basics tb 
inner join title_akas ta on tb.id = ta.id
inner join title_ratings tr on ta.id = tr.id 
where tb.title_type = 'movie'
order by tr.num_votes desc