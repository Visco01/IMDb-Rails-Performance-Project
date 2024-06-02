class TitleBasicSerializer < ActiveModel::Serializer
  def attributes(*args)
    object.attributes.symbolize_keys.merge(title_ratings: title_ratings)
      .merge(directors: directors)
  end

  def title_ratings
    TitleRating.where(id: object.id).map do |title_rating|
      TitleRatingSerializer.new(title_rating, root: false, rating_only: true).attributes
    end
  end

  def directors
    begin
      title_crew = TitleCrew.find(object.id)
      [] if title_crew.directors.nil?
      title_crew.directors.map do |director|
        next if director.nil?

        NameBasicSerializer.new(director, root: false).attributes
      end
    rescue ActiveRecord::RecordNotFound => e
      []
    end
  end
end
