class TitleBasicSerializer < ActiveModel::Serializer
  def attributes(*args)
    object.attributes.symbolize_keys
  end

  # has_many :title_ratings, embed: :ids
end
