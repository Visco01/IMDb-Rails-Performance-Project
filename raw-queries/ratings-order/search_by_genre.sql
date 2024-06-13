select tb.primary_title, tb.original_title, tb.is_adult, tr.average_rating, tr.num_votes 
from genres as g
join genres_title_basics as gtb on gtb.genre_id = g.id
join title_basics as tb on tb.tconst = gtb.title_basic_id 
join title_ratings as tr on tb.tconst = tr.tconst
where g.name = 'Fantasy'
order by tr.num_votes desc, tr.average_rating desc