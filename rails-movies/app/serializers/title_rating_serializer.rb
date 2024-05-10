class TitleRatingSerializer < ActiveModel::Serializer
  def attributes(*args)
    object.attributes.symbolize_keys
  end

  def title_basic
    object.title_basic.attributes.symbolize_keys
  end
end
