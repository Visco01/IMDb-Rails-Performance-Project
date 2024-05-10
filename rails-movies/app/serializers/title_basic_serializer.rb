class TitleBasicSerializer < ActiveModel::Serializer
  def attributes(*args)
    object.attributes.symbolize_keys.merge(title_ratings: title_ratings)
  end

  def title_ratings
    TitleRating.where(id: object.id).map do |title_rating|
      TitleRatingSerializer.new(title_rating, root: false).attributes
    end
  end
end
