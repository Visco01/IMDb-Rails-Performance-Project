select tb.primary_title, tb.original_title, tb.is_adult
from genres as g
join genres_title_basics as gtb on gtb.genre_id = g.id
join title_basics as tb on tb.tconst = gtb.title_basic_id
where g.name = 'Fantasy' and tb.runtime_minutes >=120
order by tb.primary_title 
;