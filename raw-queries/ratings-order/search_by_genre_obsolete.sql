select tb.original_title title, g."name" genre
from title_basics tb 
inner join genres_title_basics gtb on tb.id = gtb.title_basic_id 
inner join genres g on gtb.genre_id = g.id
where tb.title_type = 'movie' and g."name" <>'\N'